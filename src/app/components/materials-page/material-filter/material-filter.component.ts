import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { omitBy } from 'lodash';
import { Subject, debounceTime, filter, map, takeUntil } from 'rxjs';
import { MaterialFilter, MaterialsService } from 'src/app/services/materials.service';
import { AddMaterialComponent } from '../add-material/add-material.component';
import { hasValueInOptionalFields } from 'src/utils/has-value';

@Component({
  selector: 'app-material-filter',
  templateUrl: './material-filter.component.html',
  styleUrls: ['./material-filter.component.css']
})
export class MaterialFilterComponent {
  filtersForm = this.fb.group({
    description: this.fb.control<string|null>('')
  });


  private destroyed$ = new Subject<void>()

  constructor(private fb: FormBuilder,
              public dialog: MatDialog,
              private materialsSrv: MaterialsService,
              private router: Router) {}

  ngOnInit(): void {
    this.materialsSrv.filters$.subscribe(value => {
      this.filtersForm.patchValue(value || {description: ''}, {emitEvent: false});
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
      const v = value as MaterialFilter;
      this.router.navigate([], {queryParams: v});
    });
  }
  
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  deleteFilters(){
    this.filtersForm.patchValue({description: ''})
  }

  openDialog(): void {
    this.dialog.open(AddMaterialComponent, {
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
