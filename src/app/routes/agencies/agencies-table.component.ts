import { Component, Input, OnInit } from '@angular/core';
import { Agency } from 'src/app/models/agency.interface';

@Component({
  selector: 'app-agencies-table',
  template: `
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Range</th>
          <th>Status</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let agency of agenciesList">
          <td>{{ agency.name }}</td>
          <td>{{ agency.range }}</td>
          <td>{{ agency.status }}</td>
          <td>🗑</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
  ]
})
export class AgenciesTableComponent implements OnInit {

  @Input() agenciesList: Agency[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
