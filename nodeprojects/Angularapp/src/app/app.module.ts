import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { DataBindingComponent } from './app'; //app.ts above
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { PfiltersComponent } from './pfilters/pfilters.component';
import { AgmCoreModule } from '@agm/core'            // @agm/core
import { AgmDirectionModule } from 'agm-direction'   // agm-direction
import { DirectionsComponent } from './directions/directions.component';
import { StartpageComponent } from './startpage/startpage.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    TestComponent,
    PfiltersComponent,
    DirectionsComponent,
    StartpageComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyDFTKbcSXEN22pUx3zfaabEOGyy7oOZtmI',
    }),
    AgmDirectionModule     // agm-direction
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

