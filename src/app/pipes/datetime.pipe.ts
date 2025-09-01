import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetime'
})
export class DatetimePipe implements PipeTransform {
  transform(value: Date): string | null {
    if(value) {
      const date = new Date(value);
      var giorno = date.getDate();
      var mese = date.getMonth() + 1; // I mesi partono da zero, quindi aggiungi 1
      var anno = date.getFullYear();
      var ore = date.getHours();
      var minuti = date.getMinutes();
      // Formatta la stringa con le informazioni ottenute
      var stringaFormattata = giorno + '/' + mese + '/' + anno + ' ' + ore + ':' + minuti;  
      return stringaFormattata;
    }
    return null;
  }
}
