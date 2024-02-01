import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Card, CardsService, editCard } from 'src/app/services/cards.service';
import { InstallationsService } from 'src/app/services/installations.service';
import { SnackbarsService } from 'src/app/services/snackbars.service';
import { HttpErrorResponse } from '@angular/common/http';
import { toNumber } from 'lodash';
import { Subject, catchError, throwError } from 'rxjs';
import { SubjectsService } from 'src/app/services/subjects.service';
import { MaterialsService } from 'src/app/services/materials.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent {
  editForm!: FormGroup;

  materials$ = this.materialsSrv.materials$;
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
    private materialsSrv: MaterialsService,
    @Inject(MAT_DIALOG_DATA) public data: Card,
  ) {
    this.editForm = this.fb.group({
      vehicle: [data.vehicle, Validators.maxLength(20)],
      plate: [data.plate, Validators.maxLength(20)],
      materialId: [data.materialId?.id],
      subjectId: [data.subjectId?.id]
    })
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
      const { vehicle, plate, materialId, subjectId } = this.editForm.value;
      const card: editCard = {
        vehicle: vehicle ? vehicle : null,
        plate: plate ? plate : null,
        materialId: materialId ? toNumber(materialId) : null,
        subjectId: subjectId !== null ? toNumber(subjectId) : null
      }
      this.cardsSrv.edit(this.data.id!, card)
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
            this.snackbarsSrv.openSnackBar(message, "red");
          }
        )
    }
  }
}
