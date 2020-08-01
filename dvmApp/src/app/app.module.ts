import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes'

import { PagesComponent } from './pages/pages.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';
import { NofoundpageComponent } from './shared/nofoundpage/nofoundpage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NofoundpageComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,   
    AppRoutingModule,
    APP_ROUTES
  ],
  providers: [],
  exports:[ RouterModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
