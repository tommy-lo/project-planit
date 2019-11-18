import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistanceComponent } from './distance/distance.component';
import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { PfiltersComponent } from './pfilters/pfilters.component';
import { DirectionsComponent } from './directions/directions.component';
import { StartpageComponent } from './startpage/startpage.component';
import { UserpageComponent } from './userpage/userpage.component';


const routes: Routes = [
  {path: '', redirectTo: '/startpage', pathMatch: 'full'},
  {path: 'distances/:mode', component: DistanceComponent},
  {path: 'directions', component: DirectionsComponent},
  {path: 'test/:distance/:longitude/:latitude/:budget/:start/:end/:parks/:museums/:restaurants/:movies/:shop/:zoo/:bar/:sports', component: TestComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'pfilters/:distance/:longitude/:latitude/:budget/:start/:end', component: PfiltersComponent},
  {path: 'startpage', component: StartpageComponent},
  {path: 'userpage/:user/:display/:mode', component: UserpageComponent},


  //Have least specific on the bottom otherwise you will always get page not found
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DistanceComponent, TestComponent, PageNotFoundComponent, SignupComponent, SigninComponent, PfiltersComponent,
DirectionsComponent, StartpageComponent, UserpageComponent]