import { Component, OnInit } from '@angular/core';
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-new-contact',
  template: `
    <form #contactForm (ngSubmit)="onSubmit()">
      <div>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required [(ngModel)]="newContact.firstName" #firstName>
        <span *ngIf="!firstName.checkValidity()">Not valid</span>
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required [(ngModel)]="newContact.lastName" #lastName>
        <span *ngIf="!lastName.checkValidity()">Not valid</span>
      </div>
      <div>
        <label for="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" required [(ngModel)]="newContact.phone" #phone>
        <span *ngIf="!phone.checkValidity()">Not valid</span>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" required [(ngModel)]="newContact.email" #email>
        <span *ngIf="!email.checkValidity()">Not valid</span>
      </div>
      <button type="submit" [disabled]="!contactForm.checkValidity()">Create Contact</button>
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
  newContact: Contact;

  constructor(private contactService: ContactService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   this.activatedRoute.queryParams.subscribe((params: Params) => {
     this.newContact = {
       firstName: '',
       lastName: params['lastName'],
       phone: '',
       email: ''
     };
   });
  }

  onSubmit() {
    this.contactService.insertContact(this.newContact);
    this.router.navigate(['/contacts'])
      .catch(error => console.log(error));
  }
}
