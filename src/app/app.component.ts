import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>{{ title }}</h1>
    <h3>We work with {{ activeAgenciesCounter }} agencies</h3>
    <ul>
      <ng-container *ngFor="let agency of agencies">
        <li *ngIf="agency.status === 'Active'">
          <span>{{ agency.name | uppercase }}</span>
          <span *ngIf="agency.range === 'Interplanetary'">🪐</span>
          <span *ngIf="agency.range === 'Orbital'">🌍</span>
        </li>
      </ng-container>
    </ul>
    <h3>Offering {{ trips.length }} trips</h3>
    <ul>
      <ng-container *ngFor="let trip of trips">
        <li class="{{ trip.status | lowercase }}">
          {{ trip.destination }}
        </li>
      </ng-container>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      .confirmed {
        color: green;
      }
      .waiting {
        color: orange;
      }
    `,
  ],
})
export class AppComponent {
  title = "Astro Bookings";
  agencies = [
    { name: "Space X", range: "Interplanetary", status: "Active" },
    { name: "Blue Origin", range: "Orbital", status: "Active" },
    { name: "Virgin Galactic", range: "Orbital", status: "Pending" },
  ];
  trips = [
    {
      id: "space-y-moon-1",
      agencyId: "space-y",
      agencyTripCode: "moon",
      destination: "The Moon",
      places: 14,
      startDate: "2023-02-01",
      endDate: "2023-03-01",
      flightPrice: 1200000,
      stayingNightPrice: 10000,
      kind: "WithStay",
      status: "Confirmed",
      extraLuggagePricePerKilo: 2000,
      premiumFoodPrice: 0,
    },
    {
      id: "space-y-mars-2",
      agencyId: "space-y",
      agencyTripCode: "mars",
      destination: "Mars",
      places: 8,
      startDate: "2024-01-01",
      endDate: "2024-05-01",
      flightPrice: 8400000,
      stayingNightPrice: 10000,
      kind: "WithStay",
      status: "Confirmed",
      extraLuggagePricePerKilo: 50000,
      premiumFoodPrice: 0,
    },
    {
      id: "green-origin-low-orbit-3",
      agencyId: "green-origin",
      agencyTripCode: "low-orbit",
      destination: "Low Orbit",
      places: 0,
      startDate: "2022-04-01",
      endDate: "2022-04-01",
      flightPrice: 320000,
      stayingNightPrice: 0,
      kind: "TripOnly",
      status: "Waiting",
      extraLuggagePricePerKilo: 0,
      premiumFoodPrice: 1000,
    },
    {
      id: "green-origin-iss-4",
      agencyId: "green-origin",
      agencyTripCode: "iss",
      destination: "ISS",
      places: 6,
      startDate: "2022-06-01",
      endDate: "2022-06-01",
      flightPrice: 800000,
      stayingNightPrice: 0,
      kind: "TripOnly",
      status: "Waiting",
      extraLuggagePricePerKilo: 0,
      premiumFoodPrice: 1000,
    },
  ];
  activeAgenciesCounter = this.agencies.filter(
    (agency) => agency.status === "Active"
  ).length;
}
//testing some changes