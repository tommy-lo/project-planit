import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
=======
import { NgModule,  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
>>>>>>> 573485ffcfb918b48c39f842e0f77f998b50fcde
//import { DataBindingComponent } from './app'; //app.ts above
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
<<<<<<< HEAD
import { TestComponent } from './test/test.component';
=======
import { PfiltersComponent } from './pfilters/pfilters.component';
>>>>>>> 573485ffcfb918b48c39f842e0f77f998b50fcde


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
<<<<<<< HEAD
    TestComponent
=======
    PfiltersComponent
>>>>>>> 573485ffcfb918b48c39f842e0f77f998b50fcde
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
