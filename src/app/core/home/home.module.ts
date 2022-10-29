import { LeilinhoModule } from './../../leilinho/leilinho.module';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { RadarComercialModule } from 'src/app/radar-comercial/radar-comercial.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    RadarComercialModule,
    LeilinhoModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }