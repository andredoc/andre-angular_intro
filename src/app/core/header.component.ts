import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <a routerLink="/">{{ title }}</a>
    </header>
  `,
  styles: [
  ]
})
export class HeaderComponent {
  @Input() title = "";
}