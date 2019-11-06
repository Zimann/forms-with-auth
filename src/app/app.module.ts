import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material';
import {FormActionTextsComponent} from './forms/form-action-texts/form-action-texts.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { SignUpFormComponent } from './forms/sign-up-form/sign-up-form.component';
import { HomeComponent } from './home/home.component';
import { ProfileSettingsComponent } from './home/profile-settings/profile-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    FormActionTextsComponent,
    LoginFormComponent,
    SignUpFormComponent,
    HomeComponent,
    ProfileSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
