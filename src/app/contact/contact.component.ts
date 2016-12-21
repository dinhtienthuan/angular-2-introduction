import { Component, OnInit, Input } from '@angular/core';

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
    <button>Create new contact from this contact</button>
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
  @Input() public contact = {};

  constructor() { }

  ngOnInit() {
  }

}
