import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsComponent} from './forms/forms.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: 'authentication', component: FormsComponent},
  {
    path: '',
    redirectTo: '/authentication',
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
