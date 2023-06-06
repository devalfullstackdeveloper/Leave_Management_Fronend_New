import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { EmployeeComponent } from './employee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';

const routes: Routes = [{
  path: '', component: EmployeeComponent, children: [
    { path: 'view', component: ListemployeeComponent },
    { path: 'add', component: AddEditEmployeeComponent },
    { path: 'edit', component: AddEditEmployeeComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
