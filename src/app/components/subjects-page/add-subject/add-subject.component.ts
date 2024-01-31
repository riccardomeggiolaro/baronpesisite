import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { toNumber } from 'lodash';
import { Subject, catchError, throwError } from 'rxjs';
import { SnackbarsService } from 'src/app/services/snackbars.service';
import { Subject as iSubject, SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {
  addForm = this.fb.group({
    socialReason: ['', {validators: Validators.required, max: 50}],
    telephoneNumber: ['', Validators.maxLength(20)],
    CFPIVA: ['', Validators.maxLength(30)]
  })

  private destroyed$ = new Subject<void>();

  constructor(
    private snackbarSrv: SnackbarsService,
    private fb: FormBuilder,
    private subjectsSrv: SubjectsService,
    public dialogRef: MatDialogRef<AddSubjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: iSubject,
  ) {}

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  add(){
    if(this.addForm.valid){
      const subject = {
        socialReason: this.addForm.value.socialReason,
        telephoneNumber: this.addForm.value.telephoneNumber ? toNumber(this.addForm.value.telephoneNumber) : null,
        CFPIVA: this.addForm.value.CFPIVA ? this.addForm.value.CFPIVA : null
      };
      this.subjectsSrv.add(subject)
        .pipe(
          catchError(err => throwError(err))
        )
        .subscribe(
          (value: iSubject) => {
            this.snackbarSrv.openSnackBar("Soggetto aggiunto!", "green");
            this.dialogRef.close();
          },
          (error: HttpErrorResponse) => {
            let message = "";
            if(error.status === 400) message = error.error.message;
            else message = "Errore generico, per favore riprova più tardi";
            console.log(error);
            this.snackbarSrv.openSnackBar(message, "red");
          }
        )
    }
  }
}
