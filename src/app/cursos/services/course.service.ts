import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Course } from '../course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  API = 'http://25.3.41.244:';
  port1 = '8090';
  port2 = '8091';


  constructor(private http: HttpClient) { }

  listFromCourses() {
    return this.http
      .get<Course[]>(this.API + this.port1 + '/courses')
  }

  create(course: any) {
    return this.http.post(this.API + this.port1 + '/courses', course).pipe(take(1));
  }

  listFromCoursesContingency() {
    return this.http
      .get<Course[]>(this.API + this.port2 + '/courses')
  }

  createContingency(course: any) {
    return this.http.post(this.API + this.port2 + '/courses', course).pipe(take(1));
  }


}
