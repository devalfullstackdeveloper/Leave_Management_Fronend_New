import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommontableComponent } from './commontable/commontable.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {CdkTableModule} from '@angular/cdk/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu'


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
    MatSortModule,
    MatIconModule,
    MatSortModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    CommontableComponent,
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    CdkTableModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatButtonModule,
    MatMenuModule
    ]
})
export class SharedModule { }
