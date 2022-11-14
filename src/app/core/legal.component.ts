import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal',
  template: `
    <p>© Copyright 2022 
      <a [routerLink]="['/','about']"> 💻 About us </a>
      <a [routerLink]="['/', 'contact']"> 📞 Get in contact</a>
    </p>
  `,
  styles: [
  ]
})
export class LegalComponent implements OnInit {

  // aboutUrl="/about";
  constructor() { }

  ngOnInit(): void {
  }

}
