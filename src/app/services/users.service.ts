import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject, catchError, combineLatest, map, of, switchMap, tap, throwError } from 'rxjs';
import { User } from './auth.service';
import { isNil, omitBy } from 'lodash';
import { environment } from 'src/environments/environment';
import { Installation } from './installations.service';
import { admin } from 'src/utils/global';

export interface UserFilter {
  username?: string | null;
  idInstallation?: number | null;
}

export interface iUser {
  username?: string | null;
  password?: string | null;
  able?: boolean | null;
  accessLevel?: number | null;
  lastAccess?: Date | null;
  installationId?: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = environment.apiUrl;

  private _filters$ = new BehaviorSubject<UserFilter | null>(null);
  filters$ = this._filters$.asObservable();
  private _requestUpdate$ = new ReplaySubject<void>();
  private _actions$ = new BehaviorSubject<"add" | "delete" | "filter" | "change">("filter");
  actions$ = this._actions$.asObservable();

  users$ = combineLatest([
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
        console.log("Ricerca")
        const q = omitBy(filters, isNil);
        return this.http.get<User[]>(`${this.url}/api/user/list`, {params: q})
          .pipe(
            catchError(err => of([]))
          )
      }
    )
  )

  constructor(private http: HttpClient) {
    this._requestUpdate$.next();
  }

  list(filters: UserFilter) {
    this._filters$.next(filters);
    this._actions$.next("filter");
  }

  delete(username: string) {
    return this.http.delete<{message: string}>(`${this.url}/api/user/${username}`)
      .pipe(
        tap(res => this._requestUpdate$.next()),
        tap(res => this._actions$.next("delete"))
      )
  }

  disable(username: string, able: boolean){
    return this.http.patch<{message: string}>(`${this.url}/api/user/${username}`, {able})
      .pipe(
        tap(res => this._requestUpdate$.next()),
        tap(res => this._actions$.next("change"))
      )
  }

  add(username: string, password: string, accessLevel: number, idInstallation: number | null){
    return this.http.post<User>(`${this.url}/api/auth/signin`, {username, password, accessLevel, idInstallation})
      .pipe(
        tap(res => this._requestUpdate$.next()),
        tap(res => this._actions$.next("add"))
      )
  }

  edit(user: string, iuser: iUser){
    const data = omitBy(iuser, isNil);
    if((data["accessLevel"] >= admin)) data["installationId"] = null;
    return this.http.patch<{message: string}>(`${this.url}api/user/${user}`, data)
      .pipe(
        tap(res => this._requestUpdate$.next()),
        tap(res => this._actions$.next("change"))
      )
  }
}