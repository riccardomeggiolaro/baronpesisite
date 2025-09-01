import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { toInteger, toNumber } from 'lodash';
import { catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { admin } from 'src/utils/global';
import { User as iUser } from 'src/app/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackbarsService } from 'src/app/services/snackbars.service';
import { InstallationsService } from 'src/app/services/installations.service';

export interface User {
  username: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addForm = this.fb.group({
    username: ['', {validators: Validators.required, min: 8, max: 50}],
    password: ['', {validators: Validators.required, min: 8, max: 20}],
    accessLevel: ['', {validators: Validators.required}],
    installationId: ['']
  })

  accessLevels!: number[];
  installations$ = this.installationsSrv.installations$;
  user!: iUser | null;

  hide = true;

  constructor(
    private snackbarsSrv: SnackbarsService,
    private fb: FormBuilder,
    private usersSrv: UsersService,
    public dialogRef: MatDialogRef<AddUserComponent>,
    private installationsSrv: InstallationsService,
    private authSrv: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) {
  }

  ngOnInit(): void {
    this.user = this.authSrv.getUser();
    this.accessLevels = this.array(this.user?.accessLevel!);
    if(this.accessLevels.length === 1){
      this.addForm.setValue({username: '', password: '', accessLevel: '1', installationId: ''});
    }
  }

  array(value: number): number[]{
    if(value < 1) return [];
    return Array.from({ length: value - 1 }, (_, i) => i + 1);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  add(){
    if(this.addForm.valid){
      let _installationId = null;
      const { username, password, accessLevel, installationId } = this.addForm.value;
      if(installationId) _installationId = toInteger(installationId);
      this.usersSrv.add({username: username!, password: password!, accessLevel: toInteger(accessLevel!), installationId: _installationId})
        .pipe(
          catchError(err => throwError(err))
        )
        .subscribe(
          (value: User) => {
            this.snackbarsSrv.openSnackBar("Utente aggiunto!", "green");
            this.dialogRef.close();
          },
          (error: HttpErrorResponse) => {
            let message = "";
            if(error.status === 400) message = error.error.message;
            else message = "Errore generico, per favore riprova più tardi";
            this.snackbarsSrv.openSnackBar(message, "red");
          }
        )
    }
  }

  isAdmin(accessLevel: string | null | undefined): boolean {
    this.toggleRequired(toNumber(accessLevel));
    if(accessLevel){
      const value = toNumber(accessLevel) >= admin;
      return value;
    }
    return true;
  }

  toggleRequired(accessLevel: number) {
    const myFieldControl = this.addForm.get('installationId');

    if (myFieldControl) {
      if (accessLevel >= admin) {
        myFieldControl.clearValidators(); // Rimuovi Validators.required
      } else {
        myFieldControl.setValidators(Validators.required); // Aggiungi Validators.required
      }

      myFieldControl.updateValueAndValidity();
    }
  }
}