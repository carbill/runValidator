import { AbstractControl, ValidationErrors } from '@angular/forms';

export function rutValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value === null) {
      return null;
    }
    let value = control.value.replace(/^0+/, '')
    value = value.replace(/\./g, '');
    value = value.replace(/-/g, '');
    const body = value.slice(0, -1);
    let dv = value.slice(-1).toUpperCase();
    if (body.length < 7) {
      return {rutValidator: false};
    }
    let sum = 0;
    let multiple = 2;
    for (let i = 1; i <= body.length; i++) {
      const index = multiple * value.charAt(body.length - i);
      sum = sum + index;
      if (multiple < 7) {
        multiple = multiple + 1;
      } else {
        multiple = 2;
      }

    }
    const dvExpected = 11 - (sum % 11);
    dv = (dv === 'K') ? 10 : dv;
    dv = (dv === 0) ? 11 : dv;
    if (dvExpected != dv) {
      return {rutValidator: false};
    }
    return null;
  }
