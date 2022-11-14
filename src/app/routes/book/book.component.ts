import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  template: `
    <h3>Make a booking for trip:</h3>
    <h2>{{ tripId }}</h2>
  `,
  styles: [
  ]
})
export class BookComponent {

  tripId="";

  constructor(route: ActivatedRoute) {
    this.tripId= route.snapshot.paramMap.get("idTrip") || '';
  }

}
