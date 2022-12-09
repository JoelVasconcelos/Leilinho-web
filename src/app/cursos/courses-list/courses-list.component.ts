import { Course } from './../course';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  dataSource = new MatTableDataSource<Course>()
  readonly displayedColumns: string[] = ['nome', 'professor', 'descricao', 'inicio', 'fim', 'turno'];


  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.listFromCourses().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    },
      error => this.courseService.listFromCoursesContingency().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      }));

  }


}
