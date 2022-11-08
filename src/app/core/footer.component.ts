import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <h6>
        <app-link 
          [caption]="title" 
          [url]="repoUrl" 
          title="https://github.com/andredoc/andre-angular_intro"
        ></app-link>
        <app-author></app-author>
      </h6>
      <app-legal></app-legal>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  @Input() title= "";
  repoUrl = "https://github.com/andredoc/andre-angular_intro";
}
