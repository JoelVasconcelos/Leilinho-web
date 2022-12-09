import { TableMaterialModule } from '../shared/app-material/table-material/table-material.module';
import { TitleComponent } from './../shared/title/title.component';
import { PracaComponent } from './components/praca/praca.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { NovoCartaoComponent } from './components/usuario/novo-cartao/novo-cartao.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LeilinhoRoutingModule } from './leilinho-routing.module';

import { FormsMaterialModule } from '../shared/app-material/forms-material/forms-material.module';
import { LeilinhoComponent } from './leilinho.component';



@NgModule({
  imports: [
    CommonModule,
    LeilinhoRoutingModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    FormsMaterialModule,
    TableMaterialModule
  ],
  declarations: [
    LeilinhoComponent,
    UsuarioComponent,
    NovoCartaoComponent,
    ProdutoComponent,
    TitleComponent,
    PracaComponent
  ],
  exports: [LeilinhoComponent]

})
export class LeilinhoModule { }
