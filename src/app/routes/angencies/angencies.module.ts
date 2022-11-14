import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngenciesRoutingModule } from './angencies-routing.module';
import { AngenciesComponent } from './angencies.component';
import { NewAgencyComponent } from './new-agency.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AngenciesComponent,
    NewAgencyComponent
  ],
  imports: [
    CommonModule,
    AngenciesRoutingModule,
    ReactiveFormsModule
  ]
})
export class AngenciesModule { }
