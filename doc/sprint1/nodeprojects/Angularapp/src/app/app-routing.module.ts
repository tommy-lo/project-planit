import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistanceComponent } from './distance/distance.component';
import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { PfiltersComponent } from './pfilters/pfilters.component';


const routes: Routes = [
  {path: '', redirectTo: '/distances', pathMatch: 'full'},
  {path: 'distances', component: DistanceComponent},
  {path: 'test/:user/:distance/:start/:end/:budget/:location', component: TestComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'pfilters', component: PfiltersComponent},

  //Have least specific on the bottom otherwise you will always get page not found
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DistanceComponent, TestComponent, PageNotFoundComponent, SignupComponent, PfiltersComponent]