import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isNil, omitBy } from 'lodash';
import { BehaviorSubject, ReplaySubject, catchError, combineLatest, of, switchMap, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface InstallationFilter {
  installationCode?: string | null;
  description?: string | null;
}

export interface Installation {
  id: number;
  installationCode: string;
  description: string;
  imei: string;
}

export interface iInstallation {
  installationCode?: string | null;
  description?: string | null;
  imei?: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class InstallationsService {
  private url = environment.apiUrl;

  private _filters$ = new BehaviorSubject<InstallationFilter | null>(null);
  filters$ = this._filters$.asObservable();
  private _requestUpdate$ = new ReplaySubject<void>();
  private _actions$ = new BehaviorSubject<"add" | "delete" | "filter">("filter");
  actions$ = this._actions$.asObservable();

  installations$ = combineLatest([
    this._requestUpdate$,
    this.filters$
  ]).pipe(
    catchError(err => {
      throwError(err);
      return []
    }),
    switchMap(
      ([_, filters]) => {
        const q = omitBy(filters, isNil);
        return this.http.get<Installation[]>(`${this.url}/installation/list`, {params: q})
          .pipe(
            catchError(err => of([]))
          )
      }
    )
  )

  constructor(private http: HttpClient) {
    this._requestUpdate$.next();
  }

  list(filters: InstallationFilter) {
    this._filters$.next(filters);
    this._actions$.next("filter");
  }

  assigned() {
    return this.http.get<Installation>(`${this.url}/installation/assigned`)
      .pipe(
        tap(res => this._requestUpdate$.next())
      )
  }

  delete(id: number) {
    return this.http.delete<{message: string}>(`${this.url}/installation/${id}`)
      .pipe(
        tap(res => this._requestUpdate$.next()),
        tap(res => this._actions$.next("delete"))
      )
  }

  add(installationCode: string, description: string, imei: string){
    return this.http.post<Installation>(`${this.url}/installation/add-installation`, {installationCode, description, imei})
      .pipe(
        tap(res => {
          this._filters$.next(this._filters$.value);
          this._requestUpdate$.next();
        }),
        tap(res => this._actions$.next("add"))
      )
  }

  edit(id: number, installation: iInstallation){
    const data = omitBy(installation, isNil);
    return this.http.patch<{message: string}>(`${this.url}/installation/${id}`, data)
      .pipe(
        tap(res => {
          this._filters$.next(this._filters$.value);
          this._requestUpdate$.next();
        })
      )
  }
}
