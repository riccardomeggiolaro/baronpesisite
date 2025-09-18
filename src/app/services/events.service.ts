import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, catchError, combineLatest, of, switchMap, tap, throwError } from 'rxjs';
import { isNil, omitBy } from 'lodash';
import { HttpClient } from '@angular/common/http';
import { Card } from './cards.service';
import { Installation } from './installations.service';
import { environment } from 'src/environments/environment';
import { Material } from './materials.service';
import { Subject } from './subjects.service';

export interface EventFilter {
  dtMin?: Date | null;
  dtMax?: Date | null;
  numberCard?: string | null;
  plate?: string | null;
  material?: string | null;
  socialReason?: string | null;
  installationId?: number | null;
}

export interface Event {
  dt_create: Date;
  progressive: number;
  note1: string;
  note2: number;
  weight1: number;
  pid1: string;
  weight2: number;
  pid2: string;
  netWeight: number;
  materialId?: Material | number | null;
  subjectId?: Subject | number | null;
  cardCode?: Card | string | null;
  rowId: number;
  installationId?: Installation | number | null;
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private url = environment.apiUrl;

  private _filters$ = new BehaviorSubject<EventFilter | null>(null);
  filters$ = this._filters$.asObservable();
  private _requestUpdate$ = new ReplaySubject<void>();
  private _actions$ = new BehaviorSubject<"add" | "delete" | "filter">("filter");
  actions$ = this._actions$.asObservable();

  events$ = combineLatest([
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
        return this.http.get<Event[]>(`${this.url}/event/list`, {params: q})
          .pipe(
            catchError(err => of([]))
          )
      }
    )
  )

  constructor(private http: HttpClient) {
    this._requestUpdate$.next();
  }

  list(filters: EventFilter) {
    console.log(filters)
    this._filters$.next(filters);
    this._actions$.next("filter");
  }

  exportList( ext: "xlsx" | "csv" | "pdf") {
    const q = omitBy(this._filters$.value, isNil);
    return this.http.get(`${this.url}/event/export-list/${ext}`, {params: q, responseType: 'blob'}).subscribe((blob: Blob) => {
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
        a.download = `eventi-${date}-${time}.${ext}`;
        a.click();
        window.URL.revokeObjectURL(blobURL);
        a.remove();
      }
    })
  }

  delete(id: number) {
    return this.http.delete<{message: string}>(`${this.url}/event/${id}`)
      .pipe(
        tap(res => this._requestUpdate$.next()),
        tap(res => this._actions$.next("delete"))
      )
  }
}
