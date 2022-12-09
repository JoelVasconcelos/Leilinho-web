import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

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
