import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-header [title]="title"></app-header>
    <main>
      <app-agencies></app-agencies>
      <app-trips></app-trips>
      <router-outlet></router-outlet>
    </main>
    <app-footer [title]="title"></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  title = "🚀 Astro Bookings";
}
