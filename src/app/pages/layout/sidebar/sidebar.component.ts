import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {

  
  route: string;
  active: any = '';
  constructor(
    location: Location,
    router: Router
  ) {
    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.route = location.path();
      }
      if (this.route.search('layout/employee/view')) {
        this.active = 'employee';
      }
    })
   }

  ngOnInit(): void {
  }

}
