import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-cartao',
  templateUrl: './novo-cartao.component.html',
  styleUrls: ['./novo-cartao.component.css']
})
export class NovoCartaoComponent implements OnInit {

  cardNumber: string = '';
  cardName: string = '';
  validity: string = '11/22';
  CVC: string = '';



  constructor() { }

  ngOnInit() {


  }

  mcc(v: any) {
    v = v.replace(/\D/g, "");
    return this.cardNumber = v.match(/\d{1,4}/g).join(' ');
  }


}
