import { Component, OnInit } from '@angular/core';
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-new-contact',
  template: `
    <form #contactForm="ngForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" [(ngModel)]="newContact.firstName" required>
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" [(ngModel)]="newContact.lastName" required>
      </div>
      <div>
        <label for="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" [(ngModel)]="newContact.phone" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" [(ngModel)]="newContact.email" required>
      </div>
      <button type="submit">Create Contact</button>
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
  newContact: Contact = {};

  constructor(private contactService: ContactService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   this.activatedRoute.queryParams.subscribe((params: Params) => {
     this.newContact.firstName = params['firstName'];
     this.newContact.lastName = params['lastName'];
   });
  }

  onAddContact(firstName: string, lastName: string, phone: string, email: string) {
    let contact: Contact = {firstName: firstName, lastName: lastName, phone: phone, email: email};
    this.contactService.insertContact(contact);
    this.router.navigate(['/contacts'])
      .catch(error => console.log(error));
  }

  onSubmit() {

  }
}
