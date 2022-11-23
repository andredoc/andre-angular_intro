import { Component, OnInit } from "@angular/core";
import { Agency } from "src/app/models/agency.interface";
import { ApiService } from "src/app/service/api.service";

@Component({
  selector: "app-agencies",
  template: `
    <h2> My agencies </h2>
    <app-agencies-table [agenciesList]="agenciesData"></app-agencies-table>
    <app-new-agency (saveAgency)="onSaveAgency($event)"></app-new-agency>
  `,
  styles: [],
})
export class AgenciesComponent implements OnInit {
  agenciesData: Agency[] = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAgencies$().subscribe((agenciesResponse) => {
      this.agenciesData = agenciesResponse;
    });
  }

  onSaveAgency(newAgency: Agency) {
    this.api.postAgency$(newAgency).subscribe((agencyResponse) => {
      // this.agenciesData = [...this.agenciesData, ...agencyResponse];
      this.api.getAgencies$().subscribe((agenciesResponse) => {
        this.agenciesData = agenciesResponse;
      });
    });
  }

}