import { PracaComponent } from './components/praca/praca.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { NovoCartaoComponent } from './components/usuario/novo-cartao/novo-cartao.component';
import { LeilinhoComponent } from './leilinho.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
    {
        path: '', component: LeilinhoComponent,
        children: [
          { path: 'home', component: ProdutoComponent },
          { path: 'usuario', component: UsuarioComponent },
          { path: 'novocartao', component: NovoCartaoComponent },
          { path: 'produto', component: ProdutoComponent },     
          { path: 'praca', component: PracaComponent },
          {
            path: 'praca/:id',
            component: PracaComponent,
          },
        ]
        
      },
    ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeilinhoRoutingModule { }
