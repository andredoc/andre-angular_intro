import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <nav>
        <ul>
          <li>
            <strong routerLink="/">{{ title }}</strong>
          </li>
        </ul>
        <ul>
          <li><a routerLink="/agencies">➡️ Agencies</a> </li>
          <li><a routerLink="/bookings">➡️ Bookings</a> </li>

        </ul>
      </nav>
    </header>
  `,
  styles: [
  ]
})
export class HeaderComponent {
  @Input() title = "";
}