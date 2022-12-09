import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {


  formulario: any;

  constructor(
    private courseService: CourseService,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nome: [null],
      professor: [null],
      descricao: [null],
      dataInicio: [null],
      dataFim: [null],
      turno: ['Matutino']
    });

  }

  onSubmit() {
    console.log(this.formulario.value);
    this.courseService.create(this.formulario.value).subscribe(
      sucess => console.log('sucesso'),
      error => console.error(error),
      () => console.log('request OK'),
    );
    window.location.reload();
  }

}
