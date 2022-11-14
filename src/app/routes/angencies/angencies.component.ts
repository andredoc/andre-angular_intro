import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angencies',
  template: `
    <h2>My agencies</h2>
    <app-new-agency></app-new-agency>
    <table></table>
  `,
  styles: [
  ]
})
export class AngenciesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
