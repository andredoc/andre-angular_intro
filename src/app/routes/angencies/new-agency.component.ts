import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-agency',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <fieldset>
        <label>Name:</label>
        <input type="text" placeholder="Your name" formControlName="name"/>
        <label>Range:</label>
        <input type="text" placeholder=" The agency operational range" formControlName="range"/>
        <label>Status:</label>
        <input type="text" placeholder="status" formControlName="status"/>
      </fieldset>
      <button type="submit">Save agency</button>
    </form>
  `,
  styles: [
  ]
})
export class NewAgencyComponent implements OnInit {

  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { 
    this.form = formBuilder.group({
      name: "",
      range: "Planetary",
      status: "Pending"    
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.formBuilder;
    console.log("guardando", this.form.value);
  }

}
