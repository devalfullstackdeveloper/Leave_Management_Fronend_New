import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { SharedModule } from './shared/shared.module';
import { MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { AuthenticateInterceptor } from './authenticate.interceptor';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetpasswordComponent,
    ForgetpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    SharedModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule ,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthenticateInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
