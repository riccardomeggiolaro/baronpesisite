import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isNil, omitBy } from 'lodash';
import { BehaviorSubject, ReplaySubject, catchError, combineLatest, of, switchMap, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Material {
  id: number;
  description: string;
}

export interface MaterialFilter {
  description?: string | null;
}

export interface iMaterial {
  description?: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {
  private url = environment.apiUrl;

  private _filters$ = new BehaviorSubject<MaterialFilter | null>(null);
  filters$ = this._filters$.asObservable();
  private _requestUpdate$ = new ReplaySubject<void>();
  private _actions$ = new BehaviorSubject<"add" | "delete" | "filter" | "change">("filter");
  actions$ = this._actions$.asObservable();

  materials$ = combineLatest([
    this._requestUpdate$,
    this.filters$
  ]).pipe(
    catchError(err => {
      console.log(err);
      throwError(err);
      return []
    }),
    switchMap(
      ([_, filters]) => {
        const q = omitBy(filters, isNil);
        return this.http.get<Material[]>(`${this.url}/api/material/list`, {params: q})
          .pipe(
            catchError(err => of([]))
          )
      }
    )
  )

  constructor(private http: HttpClient) { 
    this._requestUpdate$.next();
  }

  list(filters: MaterialFilter) {
    this._filters$.next(filters);
    this._actions$.next("filter");
  }

  delete(id: number) {
    return this.http.delete<{message: string}>(`${this.url}/api/material/${id}`)
      .pipe(
        tap(res => this._requestUpdate$.next()),
        tap(res => this._actions$.next("delete"))
      )
  }

  add(material: iMaterial){
    const data = omitBy(material, isNil);
    return this.http.post<Material>(`${this.url}/api/material/add-material`, data)
      .pipe(
        tap(res => this._requestUpdate$.next()),
        tap(res => this._actions$.next("add"))
      )
  }

  edit(id: number, material: iMaterial){
    if(material.description === null){
      delete material.description;
    }
    return this.http.patch<{message: string}>(`${this.url}/api/material/${id}`, material)
      .pipe(
        tap(res => this._requestUpdate$.next()),
        tap(res => this._actions$.next("change"))
      )
  }
}
