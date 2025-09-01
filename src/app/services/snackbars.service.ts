import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarsService {

  constructor(private snackbar: MatSnackBar) { }

  openSnackBar(message: string, color: "red" | "green") {
    this.snackbar.open(message, "Chiudi", {
      duration: 3000,
      panelClass: [color],
    });
  }
}
