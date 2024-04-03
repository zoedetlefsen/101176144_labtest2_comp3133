import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module'; 

import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { SpacexService } from './spacex.service';

@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissionfilterComponent,
    MissiondetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule 
  ],
  providers: [
    SpacexService 
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
