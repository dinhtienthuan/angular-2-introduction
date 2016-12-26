import { ContactService } from './contact.service';
import { Component, OnInit } from '@angular/core';

import { Contact } from './contact';
@Component({
  selector: 'app-contact-list',
  template: `
    <ul>
      <li
        *ngFor="let contact of contacts"
        (click)="onSelect(contact)"
        [class.clicked]="selectedContact === contact">
        {{contact.firstName}} {{contact.lastName | uppercase}}
      </li>
    </ul>
    <app-contact *ngIf="selectedContact !== null" [contact]="selectedContact"></app-contact>
  `,
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactService]
})
export class ContactListComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  public contacts: Contact[];

  public selectedContact: Contact = null;

  onSelect(contact) {
    this.selectedContact = contact;
  }

  getContacts() {
    this.contactService.getContacts().then((contacts: Contact[]) => this.contacts = contacts);
  }
}
