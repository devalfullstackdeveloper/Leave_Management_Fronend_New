import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';
import { LayoutModule } from './pages/layout/layout.module';
import { AuthGuard } from './shared/guard/auth.guard';


const routes: Routes = [
  { path: '', redirectTo:'layout', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'layout', canActivate: [AuthGuard], loadChildren: () => LayoutModule },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
