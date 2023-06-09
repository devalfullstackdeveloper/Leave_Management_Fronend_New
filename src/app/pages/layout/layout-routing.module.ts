import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { EmployeeModule } from '../employee/employee.module';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'employee', loadChildren: () => EmployeeModule },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
