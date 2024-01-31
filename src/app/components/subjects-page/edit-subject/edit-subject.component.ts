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
      telephoneNumber: [data.telephoneNumber, Validators.maxLength(11)],
      CFPIVA: [data.CFPIVA, Validators.maxLength(30)],
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  edit(){
    if(this.editForm.valid){
      const subject = {
        socialReason: this.editForm.value.socialReason === this.data.socialReason ? null : this.editForm.value.socialReason,
        telephoneNumber: this.editForm.value.telephoneNumber ? toNumber(this.editForm.value.telephoneNumber) : null,
        CFPIVA: this.editForm.value.CFPIVA ? this.editForm.value.CFPIVA : null
      };
      this.subjectsSrv.edit(this.data.id, subject)
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
