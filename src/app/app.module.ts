import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgenciesComponent } from './agencies/agencies.component';
import { TripsComponent } from './trips/trips.component';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { LinkComponent } from './components/link.component';

@NgModule({
  declarations: [
    AppComponent,
    AgenciesComponent,
    TripsComponent,
    HeaderComponent,
    FooterComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
