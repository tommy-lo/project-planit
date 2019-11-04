import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { DataBindingComponent } from './app'; //app.ts above
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
