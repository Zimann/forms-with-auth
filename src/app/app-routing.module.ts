import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsComponent} from './forms/forms.component';
import {HomeComponent} from './home/home.component';

const redirectRoute = localStorage.getItem('requestMomentDate') ? '/home' : '/authentication';


const appRoutes: Routes = [
  {path: 'authentication', component: FormsComponent},
  {
    path: '',
    redirectTo: redirectRoute,
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent},
  {
    path: 'home',
    redirectTo: redirectRoute,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
