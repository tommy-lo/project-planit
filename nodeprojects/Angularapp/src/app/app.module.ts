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
import { UserpageComponent } from './userpage/userpage.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DataService } from './data.service';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    TestComponent,
    PfiltersComponent,
    DirectionsComponent,

    StartpageComponent,
    UserpageComponent,

    SigninComponent,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyBKdw28YUW0SsH2wCZDgTHbz9mkzSv5kFQ',
    }),
    AgmDirectionModule     // agm-direction
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

