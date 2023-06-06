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
  imageUrl = "http://103.204.189.43:3001/profile/files-1678952634427.jpg";
  imageUrl1 = "http://103.204.189.43:3001";
  dataSource: any = []
  columns = [
    { columnDef: 'emp_code', header: 'Emp Code', cell: (element: any) => `${element.emp_code}`, sort: (element: any) => `${element.emp_code}` },
    // { columnDef: 'image', header: '', cell: (element: any) => `<img [src]='http://103.204.189.43:3001/api${element.profile_img}'>`},
    // { columnDef: 'full_name', header: 'Employee Name', 
    // cell:(element: any) => `<img src="${element.profile_img}" alt="${element.full_name}" /> ${element.full_name}` },
    {columnDef: 'image', header: 'Image', cell: (element: any) => `${this.imageUrl1}${element.profile_img}` },
    { columnDef: 'full_name', header: 'Employee Name', cell: (element: any) => `${element.full_name}` },
    { columnDef: 'phone_no', header: 'Mobile Number', cell: (element: any) => `${element.phone_no}` },
    { columnDef: 'email', header: 'Email', cell: (element: any) => `${element.email}` },
    { columnDef: 'designation', header: 'Designation', cell: (element: any) => `${element.designation}` },
    { columnDef: 'date_of_joining', header: 'Date of Joining', cell: (element: any) => `${element.date_of_joining}`},
    // { columnDef: 'type',   header: 'Department', cell: (element: any) => `${element.type}`   },
    // { columnDef: 'actions',   header: 'Action', cell: (element: any) => `${element.actions}`   },

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
