import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject, debounceTime, filter, map, takeUntil } from 'rxjs';
import { UserFilter, UsersService } from 'src/app/services/users.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { omitBy, toNumber } from 'lodash';
import { Router } from '@angular/router';
import { InstallationsService } from 'src/app/services/installations.service';
import { hasValueInOptionalFields } from 'src/utils/has-value';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.css'],
})
export class UserFilterComponent {
  filtersForm = this.fb.group({
    username: this.fb.control<string|null>(''),
    installationId: this.fb.control<number|null>(null)
  });

  installations$ =this.installationsSrv.installations$;

  private destroyed$ = new Subject<void>()

  constructor(private fb: FormBuilder,
              public dialog: MatDialog,
              private usersSrv: UsersService,
              private router: Router,
              private installationsSrv: InstallationsService) {}

  ngOnInit(): void {
    this.usersSrv.filters$.subscribe(value => {
      this.filtersForm.patchValue(value || {username: '', installationId: null}, {emitEvent: false});
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
      debounceTime(300)
    )
    .subscribe(value => {
      const v = value as UserFilter;
      this.router.navigate([], {queryParams: v});
    });
  }
  
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  deleteFilters(){
    this.filtersForm.patchValue({username: '', installationId: null})
  }

  openDialog(): void {
    this.dialog.open(AddUserComponent, {
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