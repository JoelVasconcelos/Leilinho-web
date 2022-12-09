import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

const tableModule = [MatTableModule,MatIconModule,MatButtonModule, MatSortModule, MatPaginatorModule]

@NgModule({  
  imports: [
    CommonModule
  ],
  exports: [tableModule]
})
export class TableMaterialModule { }
