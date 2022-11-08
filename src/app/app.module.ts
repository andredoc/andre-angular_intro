import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgenciesComponent } from './routes/home/agencies.component';
import { TripsComponent } from './routes/home/trips.component';
import { LinkComponent } from './core/link.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './routes/home/home.module';
import { AboutModule } from './routes/about/about.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
