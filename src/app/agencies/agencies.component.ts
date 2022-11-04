import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agencies',
  template: `
  <h3>We work with {{ activeAgenciesCounter }} agencies</h3>
    <ul>
      <ng-container *ngFor="let agency of agencies">
        <li *ngIf="agency.status === 'Active'">
          <span>{{ agency.name | uppercase }}</span>
          <span *ngIf="agency.range === 'Interplanetary'">🪐</span>
          <span *ngIf="agency.range === 'Orbital'">🌍</span>
        </li>
      </ng-container>
    </ul>
  `,
  styles: [
  ]
})
export class AgenciesComponent {
  agencies = [
    { name: "Space X", range: "Interplanetary", status: "Active" },
    { name: "Blue Origin", range: "Orbital", status: "Active" },
    { name: "Virgin Galactic", range: "Orbital", status: "Pending" },
  ];

  activeAgenciesCounter = this.agencies.filter(
    (agency) => agency.status === "Active"
  ).length;
}
