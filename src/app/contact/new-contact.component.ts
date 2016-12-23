import { Component, OnInit } from '@angular/core';
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {FormGroup, FormBuilder, Validators, NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-contact',
  template: `
    <form [formGroup]="contactForm" (ngSubmit)="onSubmit(contactForm)">
      <div>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" [formControl]="contactForm.controls['firstName']" formControlName="firstName" >
        <span *ngIf="!contactForm.controls.firstName.valid">Not valid</span>
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" [formControl]="contactForm.controls['lastName']">
        <span *ngIf="!contactForm.controls['lastName'].valid">Not valid</span>
      </div>
      <div>
        <label for="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" [formControl]="contactForm.controls['phone']">
        <span *ngIf="!contactForm.controls['phone'].valid">Not valid</span>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" [formControl]="contactForm.controls['email']">
        <span *ngIf="!contactForm.controls['email'].valid">Not valid</span>
      </div>
      <button type="submit" [disabled]="!contactForm.valid">Create Contact</button>
    </form>
  `,
  styles: [`
    label {
      display: inline-block;
      width: 140px;
    }

    input {
      width: 250px;
    }
    
    input.ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class NewContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private contactService: ContactService, private router: Router,
              private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    let lastName: string = '';
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      lastName = params['lastName'];
    });

    this.contactForm = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': [lastName, Validators.required],
      'phone': ['', Validators.required],
      'email': ['', Validators.required]
    });
  }

  onSubmit(form: NgForm) {
    this.contactService.insertContact(form.value);
    this.router.navigate(['/contacts'])
      .catch(error => console.log(error));
  }
}
