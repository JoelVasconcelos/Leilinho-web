import { CursosModule } from './cursos/cursos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeModule } from './core/home/home.module';
import { LoginModule } from './core/login/login.module';
import { LeilinhoModule } from './leilinho/leilinho.module';

import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,    
    BrowserAnimationsModule,
    RouterModule,
    LoginModule,
    LeilinhoModule,
    HomeModule,
    MatDividerModule,
    CursosModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
