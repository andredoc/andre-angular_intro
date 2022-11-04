import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>{{ title }}</h1>
    <app-agencies></app-agencies>
    <app-trips></app-trips>
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
}
