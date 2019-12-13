import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsComponent} from './forms/forms.component';
import {HomeComponent} from './home/home.component';

let redirectRoute;

if (Object.keys(localStorage).length === 0) {
  redirectRoute = '/authentication';
} else {
  redirectRoute = '/home';
}

const appRoutes: Routes = [
  {path: 'authentication', component: FormsComponent},
  {
    path: '',
    redirectTo: redirectRoute,
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
