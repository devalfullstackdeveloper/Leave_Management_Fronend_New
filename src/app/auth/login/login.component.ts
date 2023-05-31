import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpService} from '../../services/http.service';
import { Router } from '@angular/router';
import {NotificationService} from '../../services/notification.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  errMsg = '';
  showPassword: boolean = false
  hide : boolean = true
  constructor(
    private fb: FormBuilder,
    private apiservice: HttpService,
    private router: Router,
    private notify: NotificationService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      // reg_role: ['']
    });
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }

  showHidePassword(){
    this.showPassword = !this.showPassword
  }
  submit() {
    console.log("abcd",this.loginForm)
    this.submitted = true;
    if (this.loginForm.invalid) {
    ;
      
      return;
    } else {
      this.apiservice.getSignin(this.loginForm.value).subscribe(res => {
        if (res.status === 200) {
          // this.notify.showSuccess(res.message)
          this.router.navigate(['/dashboard']);
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.role)
          localStorage.setItem('employeeID', res.id)
          this.apiservice.viewCheck().subscribe(res => {
            localStorage.setItem('form12bbID', res?.data[0]?.form12bb_show)
            window.location.reload()
          })
        } else {
          // this.notify.showError(res.message)
        }
      }, err => {
        // this.notify.showError(err?.error?.message)
        this.errMsg = err?.error?.message
        const errors = err?.error?.error
        for (const key in errors) {
          if (errors[key]?.length) {
            this.loginForm.get(key)?.setErrors({ invalid: errors[key] })
          }
        }
      });
    }

  }

}
