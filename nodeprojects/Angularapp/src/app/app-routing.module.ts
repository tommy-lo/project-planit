import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { PfiltersComponent } from './pfilters/pfilters.component';
import { BasicFiltersComponent } from './basicfilters/basicfilters.component';
import { StartpageComponent } from './startpage/startpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { DirectionsComponent } from './directions/directions.component';


const routes: Routes = [
  {path: '', redirectTo: '/startpage', pathMatch: 'full'},

  {path: 'distances/:mode/:user', component: BasicFiltersComponent},
  {path: 'directions/:distance/:location/:Olongitude/:Olatitude/:budget/:start/:end/:parks/:museums/:restaurants/:movies/:shop/:zoo/:bar/:sports/:user/:longitude/:latitude/:index/:mode', component: DirectionsComponent},
  {path: 'test/:distance/:location/:longitude/:latitude/:budget/:start/:end/:parks/:museums/:restaurants/:movies/:shop/:zoo/:bar/:sports/:user/:mode', component: TestComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'pfilters/:distance/:location/:longitude/:latitude/:budget/:start/:end/:user/:mode', component: PfiltersComponent},

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
export const routingComponents = [TestComponent, PageNotFoundComponent, SignupComponent, SigninComponent, PfiltersComponent,
  BasicFiltersComponent, StartpageComponent, UserpageComponent, DirectionsComponent]
