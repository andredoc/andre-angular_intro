import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { FormsService } from "src/app/core/forms.service";
import { OptionsService } from "src/app/core/options.service";

@Component({
  selector: "app-book",
  template: `
    <h3> Make a booking for trip: </h3>
    <h2>{{ tripId }}</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <fieldset>
        <div>
          <label for="email">Customer Email:</label>
          <div *ngIf="mustShowError('customerEmail')">
            {{ form.get("customerEmail")?.errors | json }}
          </div>
          <input
            id="email"
            type="email"
            name="customerEmail"
            placeholder="Your email"
            formControlName="customerEmail"
            [attr.aria-invalid]="form.get('customerEmail')?.invalid" />
        </div>
        <div>
          <label for="gender">Gender:</label>
          <span>
            <input
              id="gender-male"
              type="radio"
              name="gender"
              value="male"
              formControlName="gender" />
            <label>👨🏼‍🦰 Masculine</label>
          </span>
          <span>
            <input
              id="gender-male"
              type="radio"
              name="gender"
              value="female"
              formControlName="gender" />
            <label>👩🏼‍🦰 Feminine</label>
          </span>
        </div>
        <div>
          <label for="seats">Seats reserved:</label>
          <input
            id="seats"
            type="number"
            name="seats"
            placeholder="How many passengers?"
            formControlName="seats"
            [attr.aria-invalid]="form.get('seats')?.invalid" />
          <div *ngIf="mustShowError('seats')">
            {{ form.get("seats")?.errors | json }}
          </div>
        </div>
        <div>
          <label for="premiumFood">Premium food:</label>
          <input
            id="premiumFood"
            type="checkbox"
            name="premiumFood"
            formControlName="premiumFood" />
        </div>
        <div>
          <label for="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            formControlName="paymentMethod"
            [attr.aria-invalid]="form.get('paymentMethod')?.invalid">
            <option
              *ngFor="let pmo of paymentMethodOptions"
              [value]="pmo.value">
              {{ pmo.label }}
            </option>
          </select>
          <div *ngIf="mustShowError('paymentMethod')">
            {{ form.get("paymentMethod")?.errors | json }}
          </div>
        </div>
        <div>
          <label for="status">Booking Status:</label>
          <span *ngFor="let so of statusOptions">
            <input
              id="status-{{ so.value }}"
              type="radio"
              name="status"
              [value]="so.value"
              formControlName="status" />
            <label>{{ so.label }}</label>
          </span>
        </div>
        <div>
          <label for="acceptedTerms">Terms Accepted:</label>
          <input
            id="acceptedTerms"
            type="checkbox"
            name="acceptedTerms"
            formControlName="acceptedTerms" />
        </div>
      </fieldset>
      <button type="submit" [disabled]="form.invalid">Make the booking</button>
    </form>
  `,
  styles: [],
})
export class BookComponent {
  tripId = "";
  trip = {
    id: this.tripId,
    name: this.tripId,
    price: 1000,
    places: 5,
  };
  form: FormGroup;
  paymentMethodOptions = this.options.paymentMethodOptions;
  statusOptions = this.options.statusOptions;

  constructor(
    route: ActivatedRoute, 
    formBuilder: FormBuilder, 
    private options: OptionsService,
    private forms: FormsService
  ) {
    this.tripId = route.snapshot.paramMap.get("idTrip") || "";
    this.form = formBuilder.group({
      tripId: this.tripId,
      customerEmail: new FormControl("", [
        Validators.required,
        Validators.email,
        Validators.minLength(8),
      ]),
      gender: "",
      seats: new FormControl(1, [
        Validators.min(1),
        Validators.max(this.trip.places),
      ]),
      premiumFood: false,
      paymentMethod: new FormControl(this.paymentMethodOptions[0].value, [
        Validators.required,
      ]),
      date: new Date().toUTCString(),
      status: this.statusOptions[0].value,
      acceptedTerms: new FormControl(false, [Validators.requiredTrue])
    });
  }

  mustShowError(formControlName: string) {
    return this.forms.mustShowError(this.form, formControlName);
  }

  onSubmit() {
    console.log("submit", this.form.value);
  }
}