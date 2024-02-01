import { Injectable } from '@angular/core';
import { isNil, omitBy } from 'lodash';
import { BehaviorSubject, ReplaySubject, catchError, combineLatest, of, switchMap, tap, throwError } from 'rxjs';
import { Subject } from './subjects.service';
import { Installation } from './installations.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Material } from './materials.service';

export interface CardFilter {
  numberCard?: string | null;
  plate?: string | null;
  materialDescription?: string | null;
  socialReason?: string | null;
  installationId?: number | null;
}

export interface Card {
  id: number;
  cardCode: string;
  numberCard: string;
  vehicle?: string | null;
  plate?: string | null;
  materialId?: Material | null;
  tare?: number | null;
  subjectId?: Subject | null;
  installationId: Installation;
}

export interface editCard {
  vehicle?: string | null;
  plate?: string | null;
  materialId?: number | null;
  tare?: number | null;
  note?: string | null;
  subjectId?: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private url = environment.apiUrl;

  private _filters$ = new BehaviorSubject<CardFilter | null>(null);
  filters$ = this._filters$.asObservable();
  private _requestUpdate$ = new ReplaySubject<void>();
  private _actions$ = new BehaviorSubject<"add" | "delete" | "filter">("filter");
  actions$ = this._actions$.asObservable();

  cards$ = combineLatest([
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
        return this.http.get<Card[]>(`${this.url}/api/card/list`, {params: q})
          .pipe(
            catchError(err => of([]))
          )
      }
    )
  )

  constructor(private http: HttpClient) {
    this._requestUpdate$.next();
  }

  list(filters: CardFilter) {
    this._filters$.next(filters);
    this._actions$.next("filter");
  }

  edit(id: number, card: editCard){
    return this.http.patch<{message: string}>(`${this.url}/api/card/${id}`, card)
      .pipe(
        tap(res => this._requestUpdate$.next())
      )
  }
}
