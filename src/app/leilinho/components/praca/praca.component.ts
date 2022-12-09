import { PracaService } from './services/praca.service';
import { Praca } from './models/praca';
import { Produto } from './../produto/models/produto';
import { ProdutoService } from './../produto/services/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface PeriodicElement {
  nome: string;
  valor: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { valor: '10.00', nome: 'Pratik Skaggs' },
  { valor: '9.00', nome: 'Uehudah Hack' },
  { valor: '8.00', nome: 'Edison Drye' },
  { valor: '7.00', nome: 'Mihoko Scholl' },
  { valor: '6.00', nome: 'Ajani Harding' },
];

type Order = {
  idProduto: number;

}

@Component({
  selector: 'app-praca',
  templateUrl: './praca.component.html',
  styleUrls: ['./praca.component.css']
})
export class PracaComponent implements OnInit {

  public time: number = 60;
  public contador: any;
  produtoId: number = 0;
  usuario: any = window.localStorage.getItem('id');
  produto: Produto;




  displayedColumns: string[] = ['valor', 'nome'];
  dataSource = ELEMENT_DATA;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private pracaService: PracaService
  ) { }

  ngOnInit() {
    this.produtoId = this.route.snapshot.params['id'];
    this.produtoService.getProductById(this.produtoId).subscribe((result) => {
      this.produto = result

    })
  }

  start() {
    this.produto.valor = this.produto.valor + 1.00;
    this.orderSend();
    this.stop();

    if (this.contador == undefined) {
      this.contador = setInterval(() => {
        this.time -= 1
        if (this.time == 10) {
          this.start();
        }
      }, 1000)
    }
  }

  orderSend() {
    let order = new Praca();
    order.valor = this.produto.valor;
    order.idUsuario = parseInt(this.usuario);
    order.idProduto = this.produto.idProduto;
    this.pracaService.postOrder(JSON.stringify(order)).subscribe(
      sucess => console.log('sucesso'),
      error => this.pracaService.postOrderC(JSON.stringify(order))     
    );
    console.log(order);
   
  }

  stop() {
    clearInterval(this.contador);
    this.time = 60;
    this.contador = null;
  }

}
