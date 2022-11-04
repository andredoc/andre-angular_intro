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
        made by 
        <app-link 
          [caption]="author" 
          [url]="authorUrl"
        ></app-link>
      </h6>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  @Input() title= "";
  author = "Andre Documet";
  authorUrl = "https://www.linkedin.com/in/andre-documet/";
  repoUrl = "https://github.com/andredoc/andre-angular_intro";
}
