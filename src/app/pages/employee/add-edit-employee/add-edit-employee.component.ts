import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class AddEditEmployeeComponent implements OnInit {

  showUniversityForm: boolean = false;
  showSchoolForm: boolean = false;
  isSubmitted: boolean = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      first_name: ['', Validators.required],
      middle_name: ['',Validators.required],
      last_name: ['',Validators.required],
      contact_no: ['',Validators.required , Validators.length],
      alternative_no: ['',Validators.required ,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10)],
      personal_email_id: ['',Validators.required , Validators.email],
      address:['',Validators.required],
      adhar_card_number:['',Validators.required , Validators.minLength(14)],
      pan_card_number:['',Validators.required],
      account_number:['',Validators.required],
      date_of_birth:['',Validators.required , ],
      gender:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      country:['',Validators.required],
      zip_code:['',Validators.required]
    });

    this.secondFormGroup = this.fb.group({  
      employee_code: ['', Validators.required],
      role:['',Validators.required],
      reporting_person:['',Validators.required],
      domain:['',Validators.required],
      sub_domain:['',Validators.required],
      date_of_joining:['',Validators.required],
      professional_email:['',Validators.required],
      Password:['',Validators.required],
      confirm_password:['',Validators.required],
      
    });
    this.thirdFormGroup = this.fb.group({
      collage_Name: ['', Validators.required],
      university : ['', Validators.required],
      
    });
    console.log("this.firstFormControl" ,this.firstFormControl)
  }


  get firstFormControl() {
    return this.firstFormGroup.controls;
  }

  get SecondFormControl() {
    return this.secondFormGroup.controls;
  }

  get thirdFormControl() {
    return this.thirdFormGroup.controls;
  }

}
