import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommontableComponent } from './commontable/commontable.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {CdkTableModule} from '@angular/cdk/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    CommontableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    CdkTableModule,
    MatFormFieldModule,
    MatSortModule
  ],
  exports: [
    CommontableComponent,
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    CdkTableModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule
  ]
})
export class SharedModule { }
