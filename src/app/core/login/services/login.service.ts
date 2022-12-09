import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../user/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  API = 'http://25.3.41.244:';
  port1 = '8099';
  port2 = '8091';

  constructor(private http: HttpClient) { }

  getUserByEmail(email: string): Observable<User> {
    const apiUrl = `${this.API}${this.port1}/usuario/${email}`
    console.log("redirecionando para: " + apiUrl);
    return this.http.get<User>(apiUrl);
  }

}
