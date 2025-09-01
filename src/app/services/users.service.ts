import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, catchError, combineLatest, of, switchMap, tap, throwError } from 'rxjs';
import { isNil, omitBy } from 'lodash';
import { environment } from 'src/environments/environment';
import { admin } from 'src/utils/global';
import { User } from './auth.service';

export interface UserFilter {
  username?: string | null;
  installationId?: number | null;
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
      throwError(err);
      return []
    }),
    switchMap(
      ([_, filters]) => {
        const q = omitBy(filters, isNil);
        return this.http.get<User[]>(`${this.url}/user/list`, {params: q})
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
    return this.http.delete<{message: string}>(`${this.url}/user/${username}`)
      .pipe(
        tap(res => this._requestUpdate$.next()),
        tap(res => this._actions$.next("delete"))
      )
  }

  disable(username: string, able: boolean){
    return this.http.patch<{message: string}>(`${this.url}/user/${username}`, {able})
      .pipe(
        tap(res => this._requestUpdate$.next()),
        tap(res => this._actions$.next("change"))
      )
  }

  add(iuser: iUser){
    const data = omitBy(iuser, isNil);
    if((data["accessLevel"] >= admin)) data["installationId"] = null;
    return this.http.post<User>(`${this.url}/auth/signin`, data)
      .pipe(
        tap(res => this._requestUpdate$.next()),
        tap(res => this._actions$.next("add"))
      )
  }

  edit(user: string, iuser: iUser){
    const data = omitBy(iuser, isNil);
    if((data["accessLevel"] >= admin)) data["installationId"] = null;
    return this.http.patch<{message: string}>(`${this.url}/user/${user}`, data)
      .pipe(
        tap(res => this._requestUpdate$.next()),
        tap(res => this._actions$.next("change"))
      )
  }
}
