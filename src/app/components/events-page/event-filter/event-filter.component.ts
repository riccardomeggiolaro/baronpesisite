import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { omitBy, toNumber } from 'lodash';
import { Subject, debounceTime, filter, map, takeUntil } from 'rxjs';
import { EventFilter, EventsService } from 'src/app/services/events.service';
import { InstallationsService } from 'src/app/services/installations.service';
import { hasValueInOptionalFields } from 'src/utils/has-value';

@Component({
  selector: 'app-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.css']
})
export class EventFilterComponent {
  filtersForm = this.fb.group({
    dtMin: this.fb.control<Date|null>(null),
    dtMax: this.fb.control<Date|null>(null),
    numberCard: this.fb.control<string|null>(''),
    plate: this.fb.control<string|null>(''),
    materialDescription: this.fb.control<string|null>(''),
    socialReason: this.fb.control<string|null>(''),
    installationId: this.fb.control<number|null>(null)
  });

  installations$ =this.installationsSrv.installations$;

  private destroyed$ = new Subject<void>()

  constructor(private fb: FormBuilder,
              public dialog: MatDialog,
              private eventsSrv: EventsService,
              private router: Router,
              private installationsSrv: InstallationsService) {}

  ngOnInit(): void {
    this.eventsSrv.filters$.subscribe(value => {
      this.filtersForm.patchValue(value || {dtMin: null, dtMax: null, numberCard: '', plate: '', materialDescription: '', socialReason: '', installationId: null}, {emitEvent: false});
      if(this.filtersForm.value.installationId){
        let installationId = toNumber(this.filtersForm.value.installationId);
        this.filtersForm.get('installationId')?.setValue(installationId);
      }
      if(this.filtersForm.value.dtMin){
        let dtMin = new Date(this.filtersForm.value.dtMin);
        this.filtersForm.get('dtMin')?.setValue(dtMin);
      }
      if(this.filtersForm.value.dtMax){
        let dtMax = new Date(this.filtersForm.value.dtMax);
        this.filtersForm.get('dtMax')?.setValue(dtMax);
      }
      this.filtersForm.markAsPristine();
    })
    this.filtersForm.valueChanges
    .pipe(
      takeUntil(this.destroyed$),
      filter(_ => this.filtersForm.valid),
      map(value => omitBy(value, val => val === '')),
      debounceTime(200)
    )
    .subscribe(value => {
      const v = value as EventFilter;
      console.log(v)
      v.dtMax?.setHours(23);
      v.dtMax?.setMinutes(59);
      this.router.navigate([], {queryParams: v});
    });
  }
  
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  deleteFilters(){
    this.filtersForm.patchValue({dtMin: null, dtMax: null, numberCard: '', plate: '', materialDescription: '', socialReason: '', installationId: null})
  }

  hasValue() {
    if (hasValueInOptionalFields(this.filtersForm)) {
      return false;
    } else {
      return true;
    }
  }
}
