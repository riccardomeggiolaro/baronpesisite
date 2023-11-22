import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService, User } from 'src/app/services/auth.service';
import { Card, CardsService } from 'src/app/services/cards.service';
import { InstallationsService } from 'src/app/services/installations.service';
import { SnackbarsService } from 'src/app/services/snackbars.service';
import { UsersService } from 'src/app/services/users.service';
import { admin } from 'src/utils/global';
import { HttpErrorResponse } from '@angular/common/http';
import { toInteger, toNumber } from 'lodash';
import { Subject, catchError, takeUntil, throwError } from 'rxjs';
import { Card as iCard } from '../../../services/cards.service';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent {
  editForm!: FormGroup;

  subjects$ = this.subjectsSrv.subjects$;
  installations$ = this.installationsSrv.installations$;

  accessLevels!: number[];

  private destroyed$ = new Subject<void>();

  hide = true;

  constructor(
    private snackbarsSrv: SnackbarsService,
    private fb: FormBuilder,
    private cardsSrv: CardsService,
    public dialogRef: MatDialogRef<EditCardComponent>,
    private installationsSrv: InstallationsService,
    private subjectsSrv: SubjectsService,
    private authSrv: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: Card,
  ) {
    this.editForm = this.fb.group({
      cardCode: [data.cardCode, {validators: Validators.required, min: 6, max: 30}],
      vehicle: [data.vehicle, {validators: Validators.required, min: 4, max: 20}],
      plate: [data.plate, {validators: Validators.required, min: 6, max: 20}],
      idSubject: [data.subjectId?.id, {validators: Validators.required}],
      idInstallation: [data.installationId?.id]
    })
  }

  ngOnInit(): void {
    this.isSuperAdmin();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  edit(){
    if(this.editForm.valid){
      const { cardCode, vehicle, plate, idSubject, idInstallation } = this.editForm.value;
      this.cardsSrv.edit(this.data.id!, {cardCode: (cardCode === this.data.cardCode ? null : cardCode), vehicle: vehicle!, plate: plate!, subjectId: (idSubject !== null ? toNumber(idSubject) : null), installationId: (idInstallation !== null ? toNumber(idInstallation) : null)})
        .pipe(
          catchError(err => throwError(err))
        )
        .subscribe(
          (value) => {
            this.snackbarsSrv.openSnackBar("Carta modificata!", "green");
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

  private isSuperAdmin() {
    this.authSrv.currentUser$
    .pipe(
      takeUntil(this.destroyed$)
    )
    .subscribe(value => {
      if(!value){
        this.authSrv.fetchUser().subscribe(value => {
          this.toggleRequired(value.accessLevel);
        })
      }else{
        this.toggleRequired(value.accessLevel);
      }
    })
  }

  private toggleRequired(accessLevel: number) {
    const idInstallation = this.editForm.get('idInstallation');
    const cardCode = this.editForm.get('cardCode');

    if (idInstallation && cardCode) {
      if (accessLevel >= admin) {
        idInstallation.setValidators(Validators.required); // Aggiungi Validators.required
        cardCode?.setValidators(Validators.required);
      } else {
        idInstallation.clearValidators(); // Rimuovi Validators.required
        cardCode?.clearValidators();
      }

      idInstallation.updateValueAndValidity();
      cardCode.updateValueAndValidity();
    }
  }

}
