import { LoginService } from './services/login.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user/user';

const USUARIO = 'usuario';
const IDUSUARIO = 'id';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nome: string;
  idUsuario: string;

  user: User;
  email = '';


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {

    window.localStorage.clear();
  }

  login() {

    this.loginService.getUserByEmail(this.email).subscribe(result => {

      window.localStorage.setItem(USUARIO, result.nome);
      window.localStorage.setItem(IDUSUARIO,result.idUsuario.toString());

    })
    this.router.navigate(['leilinho/produto'])
  }

}
