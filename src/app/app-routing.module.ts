import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardModule } from './lms-pages/dashboard/dashboard.module';
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'dashboard', loadChildren: () => DashboardModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
