import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormActionTextsComponent} from './forms/form-action-texts/form-action-texts.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { SignUpFormComponent } from './forms/sign-up-form/sign-up-form.component';
import { HomeComponent } from './home/home.component';
import { ProfileSettingsComponent } from './home/profile-settings/profile-settings.component';
import { ProfileSlideComponent } from './home/profile-slide/profile-slide.component';
import {MaterialModule} from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    FormActionTextsComponent,
    LoginFormComponent,
    SignUpFormComponent,
    HomeComponent,
    ProfileSettingsComponent,
    ProfileSlideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
