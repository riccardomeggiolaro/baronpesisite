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
        return this.http.get<Card[]>(`${this.url}/card/list`, {params: q})
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

  exportList( ext: "xlsx" | "csv" | "pdf") {
    const q = omitBy(this._filters$.value, isNil);
    return this.http.get(`${this.url}/card/export-list/${ext}`, {params: q, responseType: 'blob'}).subscribe((blob: Blob) => {
      var blob = new Blob([blob], {type: `application/${ext}`})
      var blobURL = URL.createObjectURL(blob);
      if(ext === "pdf"){
        window.open(blobURL, "sss");
      }else{
        let a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = blobURL;
        let date = new Date().toLocaleDateString()
        let time = new Date().toLocaleTimeString()
        a.download = `carte-${date}-${time}.${ext}`;
        a.click();
        window.URL.revokeObjectURL(blobURL);
        a.remove();
      }
    })
  }

  edit(id: number, card: editCard){
    return this.http.patch<{message: string}>(`${this.url}/card/${id}`, card)
      .pipe(
        tap(res => this._requestUpdate$.next())
      )
  }
}
