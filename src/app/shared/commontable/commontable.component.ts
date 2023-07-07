import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  @Output() messageEvent = new EventEmitter<string>()
  tableData:any=[]
  ngOnInit(): void {
    console.log("columns" , this.columns)
    console.log("columns" , this.dataSource)
    this.tableData = new MatTableDataSource(this.dataSource);
    this.displayedColumns = this.columns.map((c:any) => c.columnDef);
    console.log("this.displayedColumns" , this.displayedColumns)
  }
  
  performAction(row: any) {
    console.log('Performing action for row:', row);
  }

  sendMessage(row:any, View:any) {
    let payload:any={
      row,View
    }
    this.messageEvent.emit(payload)
  }
}
