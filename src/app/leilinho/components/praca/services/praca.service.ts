import { Praca } from './../models/praca';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracaService {

  API = 'http://25.3.41.244:';
  port1 = '8099';
  port2 = '8098';

  constructor(private http: HttpClient) { }

  postOrder(praca: any) {
    return this.http.post(this.API + this.port1 + '/praca', praca).pipe(take(1));
   
  }

  postOrderC(praca: any) {
    return this.http.post(this.API + this.port2 + '/praca', praca).pipe(take(1));
   
  }
}
