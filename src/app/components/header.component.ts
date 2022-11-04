import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h1>{{ title }}</h1>
    </header>
  `,
  styles: [
  ]
})
export class HeaderComponent {
  @Input() title = "";
}