import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject, catchError, throwError } from 'rxjs';
import { InstallationsService } from 'src/app/services/installations.service';
import { MaterialsService, Material as iMaterial } from 'src/app/services/materials.service';
import { SnackbarsService } from 'src/app/services/snackbars.service';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent {
  addForm = this.fb.group({
    description: ['', {validators: Validators.required, max: 50}]
  })

  installations$ = this.installatiosSrv.installations$;

  private destroyed$ = new Subject<void>();

  constructor(
    private snackbarSrv: SnackbarsService,
    private fb: FormBuilder,
    private materialsSrv: MaterialsService,
    public dialogRef: MatDialogRef<AddMaterialComponent>,
    private installatiosSrv: InstallationsService,
    @Inject(MAT_DIALOG_DATA) public data: iMaterial,
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
        description: this.addForm.value.description
      };
      this.materialsSrv.add(subject)
        .pipe(
          catchError(err => throwError(err))
        )
        .subscribe(
          (value: iMaterial) => {
            this.snackbarSrv.openSnackBar("Materiale aggiunto!", "green");
            this.dialogRef.close();
          },
          (error: HttpErrorResponse) => {
            let message = "";
            if(error.status === 400) message = error.error.message;
            else message = "Errore generico, per favore riprova più tardi";
            this.snackbarSrv.openSnackBar(message, "red");
          }
        )
    }
  }
}
