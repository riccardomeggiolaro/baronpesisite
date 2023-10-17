import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Installation, InstallationsService } from 'src/app/services/installations.service';
import { Inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackbarsService } from 'src/app/services/snackbars.service';

@Component({
  selector: 'app-edit-installation',
  templateUrl: './edit-installation.component.html',
  styleUrls: ['./edit-installation.component.css']
})
export class EditInstallationComponent {
  editForm!: FormGroup;

  constructor(
    private snackbarSrv: SnackbarsService,
    private fb: FormBuilder,
    private installationsSrv: InstallationsService,
    public dialogRef: MatDialogRef<EditInstallationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Installation,
  ) {
    this.editForm = this.fb.group({
      installationCode: [data.installationCode, {validators: Validators.required, min: 8, max: 50}],
      description: [data.description, {validators: Validators.required, max: 50}],
      imei: [data.imei, {validators: Validators.required, length: 15}],
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  edit(){
    if(this.editForm.valid){
      const { installationCode, description, imei } = this.editForm.value;
      this.installationsSrv.edit(this.data.id, {installationCode: (installationCode === this.data.installationCode ? null : installationCode!), description: description!, imei: imei!})
        .pipe(
          catchError(err => throwError(err))
        )
        .subscribe(
          (value) => {
            this.snackbarSrv.openSnackBar("Installazione modificata!", "green");
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
