import { CursosComponent } from './cursos/cursos.component';
import { LeilinhoComponent } from './leilinho/leilinho.component';
import { LeilinhoModule } from './leilinho/leilinho.module';
import { RadarComercialComponent } from './radar-comercial/radar-comercial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [  
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'leilinho', loadChildren: () => import("src/app/leilinho/leilinho.module").then(m => m.LeilinhoModule) },
  { path: 'radar', component: RadarComercialComponent},
  { path: 'cursos', component: CursosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
