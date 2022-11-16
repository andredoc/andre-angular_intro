import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() { }

  mustShowError(form:FormGroup, formControlName: string) {
    const control = form.get(formControlName);
    if (!control) return false;
    return control.invalid && (control.dirty || control.touched);
  }
}
