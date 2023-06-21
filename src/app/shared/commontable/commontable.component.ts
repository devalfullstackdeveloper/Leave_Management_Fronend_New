import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { Injectable } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-commontable',
  templateUrl: './commontable.component.html',
  styleUrls: ['./commontable.component.scss']
})
export class CommontableComponent implements OnInit {

  constructor() { }

  @Input() dataSource:any;
  @Input() columns:any
  displayedColumns:any;
  tableData:any=[]
  ngOnInit(): void {
    console.log("columns" , this.columns)
    console.log("columns" , this.dataSource)
    this.tableData = new MatTableDataSource(this.dataSource);
    this.displayedColumns = this.columns.map((c:any) => c.columnDef);
  }
  
}
