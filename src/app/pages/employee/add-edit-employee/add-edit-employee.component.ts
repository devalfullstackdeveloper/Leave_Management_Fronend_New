import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormArray } from '@angular/forms';
import * as moment from 'moment';

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
  showCompanyDeatilsForm : boolean = false;
  isSubmitted: boolean = false;
  isSubmitted1: boolean = false;
  isSubmitted2 : boolean = false;
  isSubmitted3  : boolean = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup : FormGroup;
  universityData : any;
  schoolData : any ;
  companyData : any 
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      first_name: ['', Validators.required],
      middle_name: ['', Validators.required],
      last_name: ['', Validators.required],
      contact_no: ['', Validators.required, Validators.pattern(/^\d{10}$/)],
      alternative_no: ['', Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)],
      personal_email_id: ['', Validators.required, Validators.email],
      address: ['', Validators.required],
      adhar_card_number: ['', Validators.required, Validators.minLength(14)],
      pan_card_number: ['', Validators.required],
      account_number: ['', Validators.required],
      date_of_birth: ['', Validators.required,],
      gender: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zip_code: ['', Validators.required]
    });

    this.secondFormGroup = this.fb.group({
      employee_code: ['', Validators.required],
      role: ['', Validators.required],
      reporting_person: ['', Validators.required],
      domain: ['', Validators.required],
      sub_domain: ['', Validators.required],
      date_of_joining: ['', Validators.required],
      professional_email: ['', Validators.required, Validators.email],
      Password: ['', Validators.required],
      confirm_password: ['', Validators.required],

    });

    this.thirdFormGroup = this.fb.group({
      collage_name : [''],
      University : [''],
      degree : [''],
      marks_percentage_grade : [''],
      date_of_Joining : [''],
      school_name : [''],
      board : [''],
      school_degree : [''],
      school_marks_percentage_grade : [''],
      school_date_of_Joining : ['']
    });

    this.fourthFormGroup = this.fb.group({
      company_name : [''],
      position : [''],
      start_date : [''],
      end_date : ['']
    })
    
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

  get fourthFormControl(){
    return this.fourthFormGroup.controls;
  }


  goToSecondPage() {
    this.isSubmitted = true;
    if (this.firstFormGroup.invalid) {
      return;
    }
  }

  goToThirdPage() {
    this.isSubmitted1 = true;
    if (this.secondFormGroup.invalid) {
      return;
    }
  }

  goToFourthPage() {
    this.isSubmitted2 = true;
    if (this.thirdFormGroup.invalid) {
      return;
    }
  }

  saveUniversityData(){
    let data = this.thirdFormGroup.value
    this.universityData = data
  }

  saveSchoolData(){
    let data = this.thirdFormGroup.value
    this.schoolData = data
  }

  saveCompanyData(){
    let data = this.fourthFormGroup.value
    this.companyData = data
  }

  convertDateToLocal(date: any) {
    if (date) {
      return moment(date).local().format('DD MMMM YYYY');
    } else {
      return null;
    }
  }
}
