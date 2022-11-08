import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  template: `
    <em>
      made by 
      <app-link 
        [caption]="author" 
        [url]="authorUrl"
      ></app-link>
    </em>

  `,
  styles: [
  ]
})
export class AuthorComponent implements OnInit {
  author = "Andre Documet";
  authorUrl = "https://www.linkedin.com/in/andre-documet/";
  
  constructor() { }

  ngOnInit(): void {
  }

}
