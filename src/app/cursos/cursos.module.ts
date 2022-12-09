import { NewCourseComponent } from './new-course/new-course.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CursosComponent } from './cursos.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule, RouterModule,
    MatToolbarModule, MatIconModule, MatGridListModule, MatCardModule, MatButtonModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatTableModule, MatSelectModule, ReactiveFormsModule, HttpClientModule,MatCardModule, MatSidenavModule, MatToolbarModule, MatListModule
  ],
  declarations: [CursosComponent,CoursesListComponent,NewCourseComponent],
  exports: [CursosComponent]
})
export class CursosModule { }
