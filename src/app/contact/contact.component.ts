import { Component, OnInit, Input } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import {Contact} from "./contact";

@Component({
  selector: 'app-contact',
  template: `
    <div>
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" [(ngModel)]="contact.firstName">
    </div>
    <div>
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" [(ngModel)]="contact.lastName">
    </div>
    <div>
      <label for="phone">Phone Number:</label>
      <input type="text" id="phone" [(ngModel)]="contact.phone">
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="text" id="email" [(ngModel)]="contact.email">
    </div>
    <button (click)="onCreateNew()">Create new contact from this contact</button>
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
export class ContactComponent implements OnInit {
  @Input() public contact: Contact = null;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreateNew() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        firstName: this.contact.firstName,
        lastName: this.contact.lastName
      }
    };
    this.router.navigate(['/new-contacts'], navigationExtras)
      .catch(error => console.log(error));
  }
}
