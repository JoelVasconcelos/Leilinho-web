import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const formsMaterial = [FormsModule, ReactiveFormsModule, MatIconModule, MatButtonModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatCardModule]

@NgModule({  
  imports: [
    CommonModule
  ],

  exports: [
    formsMaterial
  ]

})
export class FormsMaterialModule { }
