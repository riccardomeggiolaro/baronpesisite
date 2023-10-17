import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { toNumber } from 'lodash';
import { catchError, throwError } from 'rxjs';
import { SnackbarsService } from 'src/app/services/snackbars.service';
import { Subject, SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent {
  editForm!: FormGroup;

  constructor(
    private snackbarSrv: SnackbarsService,
    private fb: FormBuilder,
    private subjectsSrv: SubjectsService,
    public dialogRef: MatDialogRef<EditSubjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Subject,
  ) {
    this.editForm = this.fb.group({
      socialReason: [data.socialReason, {validators: Validators.required, min: 8, max: 50}],
      telephoneNumber: [data.telephoneNumber, {validators: Validators.required, min: 6, max: 11}],
      CFPIVA: [data.CFPIVA, {validators: Validators.required, min: 15, max: 30}],
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  edit(){
    if(this.editForm.valid){
      const { socialReason, telephoneNumber, CFPIVA } = this.editForm.value;
      this.subjectsSrv.edit(this.data.id, {socialReason: (socialReason! === this.data.socialReason ? null : socialReason), telephoneNumber: toNumber(telephoneNumber!), CFPIVA: CFPIVA!})
        .pipe(
          catchError(err => throwError(err))
        )
        .subscribe(
          (value) => {
            this.snackbarSrv.openSnackBar("Soggetto modificato!", "green");
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
