import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../auth/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  resetPasswordForm!
  : FormGroup; 
  submitted = false;
  errMsg = '';
  hidePassword: boolean = true;
  hidePassword1: boolean = true ;
  hidePassword2: boolean = true ;
  constructor(
    private fb: FormBuilder,
    private apiservice: HttpService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group(
      {
        email : ['',[Validators.required ,Validators.email]],
        oldPassword : ['',[Validators.required , Validators.minLength(8)]],
        newPassword : ['',[Validators.required,Validators.minLength(8)]],
        confirm_password : ['',[Validators.required,Validators.minLength(8)]]
      },
      {
        validator: this.passwordMatchValidator(
          'newPassword',
          'confirm_password'
        ),
      }
    )
  }

  passwordMatchValidator(key: string, confirmationKey: string) {
    return (group: FormGroup) => {
      const input = group.controls[key];
      const confirmationInput = group.controls[confirmationKey];
      const err =
        Object.keys({ ...confirmationInput.errors }).length === 0
          ? true
          : false;
      return confirmationInput.setErrors(
        input.value !== confirmationInput.value
          ? err
            ? { notEquivalent: true }
            : { ...confirmationInput.errors, notEquivalent: true }
          : err
          ? null
          : { ...confirmationInput.errors }
      );
    };
  }

  get resetPasswordFormControl() {
    return this.resetPasswordForm.controls;
  }

  submitResetPassword() {
    this.submitted = true;
    if (this.resetPasswordForm.invalid) {
      return;
    } else {
      let payload = {
        email: this?.resetPasswordForm?.value?.email,
        oldPassword: this?.resetPasswordForm?.value?.oldPassword,
        newPassword: this?.resetPasswordForm?.value?.newPassword,
      };
      this.apiservice.resetPassword(payload).subscribe(res => {
        if (res.status === 200) {
          // this.notify.showSuccess(res.message)
          this.router.navigate(['/'])
        } else {
          // this.notify.showError(res.message)
        }
      },err => {
        this.errMsg = err?.error?.message
        // this.notify.showError(this.errMsg)
        if(this.errMsg == 'Old password does not match'){
        this.resetPasswordForm.get('oldPassword')?.setErrors({ invalid: this.errMsg })
        }
        const errors = err?.error?.error
        for (const key in errors) {
          if (errors[key]?.length) {
            this.resetPasswordForm.get(key)?.setErrors({ invalid: errors[key] })
          }
        }
      })
    }
  }
}
