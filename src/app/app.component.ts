import { ContactListComponent } from './contact/contact-list.component';
import { AppModule } from './app.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <app-contact-list></app-contact-list>
  `
})
export class AppComponent {
  public selectedContact = {};

  onSelect(contact) {
    this.selectedContact = contact;
  }
}
