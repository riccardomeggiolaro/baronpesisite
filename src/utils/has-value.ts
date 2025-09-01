import { FormGroup } from '@angular/forms';

export function hasValueInOptionalFields(form: FormGroup): boolean {
  for (const controlName in form.controls) {
    const control = form.controls[controlName];

    if (control instanceof FormGroup) {
      // Se il controllo è un gruppo (ad esempio, un gruppo di campi opzionali), chiamiamo ricorsivamente la funzione.
      if (hasValueInOptionalFields(control)) {
        return true;
      }
    } else {
      // Se il controllo è un campo singolo, verifichiamo se ha un valore.
      if (control.value !== null && control.value !== undefined && control.value !== '') {
        return true;
      }
    }
  }

  return false;
}