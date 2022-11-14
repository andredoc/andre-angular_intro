import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './routes/about/about.component';
import { HomeComponent } from './routes/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: 'contact', 
    loadChildren: () => import('./routes/contact/contact.module').then(m => m.ContactModule)
  },
  { path: 'agencies',
    loadChildren: () => import('./routes/angencies/angencies.module').then(m => m.AngenciesModule) 
  },
  { path: 'book/:idTrip', 
    loadChildren: () => import('./routes/book/book.module').then(m => m.BookModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
