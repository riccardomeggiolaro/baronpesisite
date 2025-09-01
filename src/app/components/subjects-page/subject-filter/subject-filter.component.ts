import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { omitBy, toNumber } from 'lodash';
import { Subject, debounceTime, filter, map, takeUntil } from 'rxjs';
import { SubjectFilter, SubjectsService } from 'src/app/services/subjects.service';
import { AddSubjectComponent } from '../add-subject/add-subject.component';
import { hasValueInOptionalFields } from 'src/utils/has-value';
import { InstallationsService } from 'src/app/services/installations.service';

@Component({
  selector: 'app-subject-filter',
  templateUrl: './subject-filter.component.html',
  styleUrls: ['./subject-filter.component.css']
})
export class SubjectFilterComponent {
  filtersForm = this.fb.group({
    socialReason: this.fb.control<string|null>(''),
    telephoneNumber: this.fb.control<number|null>(null),
    CFPIVA: this.fb.control<string|null>(''),
    installationId: this.fb.control<number|null>(null)
  });

  installations$ =this.installationsSrv.installations$;

  private destroyed$ = new Subject<void>()

  constructor(private fb: FormBuilder,
              public dialog: MatDialog,
              private subjectsSrv: SubjectsService,
              private router: Router,
              private installationsSrv: InstallationsService) {}

  ngOnInit(): void {
    this.subjectsSrv.filters$.subscribe(value => {
      this.filtersForm.patchValue(value || {socialReason: '', telephoneNumber: null, CFPIVA: '', installationId: null}, {emitEvent: false});
      if(this.filtersForm.value.installationId){
        let installationId = toNumber(this.filtersForm.value.installationId);
        this.filtersForm.get('installationId')?.setValue(installationId);
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
      const v = value as SubjectFilter;
      this.router.navigate([], {queryParams: v});
    });
  }
  
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  deleteFilters(){
    this.filtersForm.patchValue({socialReason: '', telephoneNumber: null, CFPIVA: '', installationId: null})
  }

  openDialog(): void {
    this.dialog.open(AddSubjectComponent, {
      data: {username: null}
    });
  }

  hasValue() {
    if (hasValueInOptionalFields(this.filtersForm)) {
      return false;
    } else {
      return true;
    }
  }
}
