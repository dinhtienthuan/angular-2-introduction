import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <nav>
        <a [routerLink]="['contacts']">Contacts</a>
        <a [routerLink]="['new-contacts']">New Contacts</a>
      </nav>
    </header>
    <div class="main">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  public selectedContact = {};

  onSelect(contact) {
    this.selectedContact = contact;
  }
}
