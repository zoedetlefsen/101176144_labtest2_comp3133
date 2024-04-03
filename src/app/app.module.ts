import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import to use HttpClient
import { AppRoutingModule } from './app-routing.module'; // Your routing module

import { AppComponent } from './app.component';
// Import your components:
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
// Import your service:
import { SpacexService } from './spacex.service';

@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissionfilterComponent,
    MissiondetailsComponent
    // Add any other components you have here
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Include HttpClientModule here
    AppRoutingModule // Include it in your imports array
  ],
  providers: [
    SpacexService // Add your services to the providers array
    // Add any other services you have here
  ],
  bootstrap: [AppComponent] // Bootstrap the AppComponent
})
export class AppModule { }
