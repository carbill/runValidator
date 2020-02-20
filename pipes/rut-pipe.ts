import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'rutPipe'
})
export class RutPipe implements PipeTransform {
  constructor(
  ) {
  }

  transform(value: any): string {
    const actual = value.replace(/^0+/, '');
    let rut;
    const noPoints = actual.replace(/\./g, '');
    const actualClean = noPoints.replace(/-/g, '');
    if (actualClean !== '' && actualClean.length > 1) {
      const initial = actualClean.substring(0, actualClean.length - 1);
      rut = '';
      let i = 0;
      let j = 1;
      for (i = initial.length - 1; i >= 0; i--) {
        const char = initial.charAt(i);
        rut = char + rut;
        if (j % 3 === 0 && j <= initial.length - 1) {
          rut = '.' + rut;
        }
        j++;
      }
      const dv = actualClean.substring(actualClean.length - 1);
      rut = rut + '-' + dv;
    }
    return rut;
  }
}
