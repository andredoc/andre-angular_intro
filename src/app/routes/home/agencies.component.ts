import { Component } from '@angular/core';
import { Agency } from '../../models/agency.interface';
import { ApiService } from 'src/app/service/api.service';

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
  agencies: Agency[] = []; 
  activeAgenciesCounter = 0;

  constructor(private api: ApiService) {
    this.loadAgencies();
  }

  loadAgencies() {
    this.api.getAgencies()
      .subscribe((agencies) => {
          this.agencies = agencies;
          this.activeAgenciesCounter =  this.getActivateAgenciesCounter();
        });
    console.log("agencies 💨💨💨" + this.agencies.length)
  }

  getActivateAgenciesCounter() {
    return this.agencies.filter(
      (agency) => agency.status === "Active"
    ).length;
  }

}
