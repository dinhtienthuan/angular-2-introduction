import { Component, OnInit } from '@angular/core';
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-contact',
  template: `
    <div>
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" #firstName>
    </div>
    <div>
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" #lastName>
    </div>
    <div>
      <label for="phone">Phone Number:</label>
      <input type="text" id="phone" #phone>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="text" id="email" #email>
    </div>
    <button (click)="onAddContact(firstName.value, lastName.value, phone.value, email.value)">Create Contact</button>
  `,
  styles: [`
    label {
      display: inline-block;
      width: 140px;
    }

    input {
      width: 250px;
    }
  `]
})
export class NewContactComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
  }

  onAddContact(firstName: string, lastName: string, phone: string, email: string) {
    let contact: Contact = {firstName: firstName, lastName: lastName, phone: phone, email: email};
    this.contactService.insertContact(contact);
    this.router.navigate(['/contacts']).catch(error => console.log(error));
  }
}