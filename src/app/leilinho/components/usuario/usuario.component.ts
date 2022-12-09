import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  numero: string;
  proprietario: string;
  validade: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, numero: '5519 0512 6027 6155', proprietario: 'Caio Raimundo Leandro Bernardes', validade: '01/05/2024'},
  {position: 2, numero: '5309 1205 0103 7793', proprietario: 'Renato Leonardo Raul da Paz', validade: '31/10/2024'},
  {position: 3, numero: '5144 7365 1819 4779', proprietario: 'Kauê Nicolas Pedro Henrique da Silva', validade: '31/08/2023'},
  {position: 4, numero: '5255 3348 2425 4514', proprietario: 'Nicolas Murilo Samuel Silveira', validade: '31/08/2023'},
  {position: 5, numero: '4916 3147 7769 7608', proprietario: 'Victor Caio Benício Pereira', validade: '31/03/2024'},
];

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  displayedColumns: string[] = ['position', 'numero', 'proprietario', 'vencimento'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
