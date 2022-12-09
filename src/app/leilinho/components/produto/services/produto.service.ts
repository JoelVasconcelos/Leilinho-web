import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  API = 'http://25.3.41.244:';
  port1 = '8099';
  port2 = '8091';

  constructor(private http: HttpClient) { }

  listFromProducts() {
    return this.http
    .get<Produto[]>(this.API + this.port1 + '/produto')
  }

  create(produto: any) {
    return this.http.post(this.API + this.port1 + '/produto', produto).pipe(take(1));
  }

  getProductById(idProduto : number): Observable<Produto> {
    const apiUrl = `${this.API}${this.port1}/produto/${idProduto}`;
    console.log("redirecionando para: " + apiUrl);
    return this.http.get<Produto>(apiUrl);

  }
  
  listFromCoursesContingency() {
    return this.http
      .get<Produto[]>(this.API + this.port2 + '/produto')
  }
  
  createContingency(produto: any) {
    return this.http.post(this.API + this.port2 + '/produto', produto).pipe(take(1));
  }


}
