import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngenciesComponent } from './angencies.component';

const routes: Routes = [{ path: '', component: AngenciesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngenciesRoutingModule { }
