import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, User, User as iUser } from 'src/app/services/auth.service';
import { SnackbarsService } from 'src/app/services/snackbars.service';
import { UsersService } from 'src/app/services/users.service';
import { InstallationsService } from 'src/app/services/installations.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { toInteger, toNumber } from 'lodash';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { admin } from 'src/utils/global';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  editForm!: FormGroup;

  accessLevels!: number[];
  installations$ = this.installationsSrv.installations$;
  user!: iUser | null;

  hide = true;

  constructor(
    private snackbarsSrv: SnackbarsService,
    private fb: FormBuilder,
    private usersSrv: UsersService,
    public dialogRef: MatDialogRef<EditUserComponent>,
    private installationsSrv: InstallationsService,
    private authSrv: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) {
    this.editForm = this.fb.group({
      username: [data.username, {validators: Validators.required, min: 8, max: 50}],
      password: [null, {min: 8, max: 20}],
      accessLevel: [data.accessLevel],
      idInstallation: [data.installationId?.id],
      able: [Boolean(data.able)]
    })
  }

  ngOnInit(): void {
    this.user = this.authSrv.getUser();
    this.accessLevels = this.array(this.user?.accessLevel!);
    if(this.accessLevels.length === 1){
      this.editForm.setValue({username: '', password: '', accessLevel: '1', idInstallation: ''});
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
    if(this.editForm.valid){
      const { username, password, accessLevel, idInstallation, able } = this.editForm.value;
      this.usersSrv.edit(this.data.username, {username: (username === this.data.username ? null : username), password: (password! === '' ? null : password), accessLevel: toInteger(accessLevel!), installationId: (idInstallation ? toNumber(idInstallation) : null), able: able})
        .pipe(
          catchError(err => throwError(err))
        )
        .subscribe(
          (value) => {
            this.snackbarsSrv.openSnackBar("Utente modificato!", "green");
            this.dialogRef.close();
          },
          (error: HttpErrorResponse) => {
            let message = "";
            if(error.status === 400) message = error.error.message;
            else message = "Errore generico, per favore riprova più tardi";
            console.log(error);
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
    const myFieldControl = this.editForm.get('idInstallation');

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
