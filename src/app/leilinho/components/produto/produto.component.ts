import { HttpClientModule } from '@angular/common/http';
import { Produto } from './models/produto';
import { ProdutoService } from './services/produto.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[] = [];

  dataSource = new MatTableDataSource<Produto>()
  readonly displayedColumns: string[] = ['imagem','nome', 'valor', 'acoes'];

  constructor(
    private produtoservice: ProdutoService,
    private http: HttpClientModule
  ) { }

  ngOnInit() {
    this.produtoservice.listFromProducts().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
      console.log(response)
    })
  }

}


