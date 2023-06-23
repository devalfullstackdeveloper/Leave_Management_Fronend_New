import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../employee/services/http.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.scss']
})
export class ListemployeeComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private apiService: HttpService,
    private router: Router,
  ) { }
  imageUrl = "http://103.204.189.43:3001";
  dataSource: any = []
  
  columns = [
    { columnDef: 'emp_code', header: 'Emp Code', cell: (element: any) => `${element.emp_code}`},
    {columnDef: 'image', header: '', cell: (element: any) => `${this.imageUrl}${element.profile_img}` },
    { columnDef: 'full_name', header: 'Employee Name', cell: (element: any) => `${element.full_name}` },
    { columnDef: 'phone_no', header: 'Mobile Number', cell: (element: any) => `${element.phone_no}` },
    { columnDef: 'email', header: 'Email', cell: (element: any) => `${element.email}` },
    { columnDef: 'designation', header: 'Designation', cell: (element: any) => `${element.designation}` },
    { columnDef: 'date_of_joining', header: 'Date of Joining', cell: (element: any) => `${element.date_of_joining}`},
  ];
  imageurl:string = this.apiService.imageUrl;

  ngOnInit(): void {
    this.getEmployeeList();
  }


  getEmployeeList() {
    console.log('imageurl ', this.imageurl)
    this.apiService.getEmployees().subscribe(
      (res => {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
    )
  }
}
