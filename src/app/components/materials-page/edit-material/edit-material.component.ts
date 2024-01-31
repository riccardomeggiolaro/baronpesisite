import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { catchError, throwError } from 'rxjs';
import { Material, MaterialsService } from 'src/app/services/materials.service';
import { SnackbarsService } from 'src/app/services/snackbars.service';

@Component({
  selector: 'app-edit-material',
  templateUrl: './edit-material.component.html',
  styleUrls: ['./edit-material.component.css']
})
export class EditMaterialComponent {
  editForm!: FormGroup;

  constructor(
    private snackbarSrv: SnackbarsService,
    private fb: FormBuilder,
    private materialsSrv: MaterialsService,
    public dialogRef: MatDialogRef<EditMaterialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Material,
  ) {
    this.editForm = this.fb.group({
      description: [data.description, {validators: Validators.required, min: 8, max: 50}]
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  edit(){
    if(this.editForm.valid){
      const material = {
        description: this.editForm.value.description === this.data.description ? null : this.editForm.value.description
      };
      this.materialsSrv.edit(this.data.id, material)
        .pipe(
          catchError(err => throwError(err))
        )
        .subscribe(
          (value) => {
            this.snackbarSrv.openSnackBar("Materiale modificato!", "green");
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
