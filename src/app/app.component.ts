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
      <app-http-test></app-http-test>
      <div class="pipes">
        <h2>Date Pipe</h2>
        <div>
          {{date | date:'short'}}
        </div>
        <h2>Number Pipe</h2>
        <div>
          {{ 4.5 | number:'1.2-2'}}
        </div>
        <h2>Currency Pipe</h2>
        <div>
          {{ 15.99 | currency:'VND':true:'1.4-4' }}
        </div>
        <h2>Stateful Pipe</h2>
        <div>
          {{ randomData | async }}
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
  date = new Date();
  randomData = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Random data!'), 1000);
  });
  public selectedContact = {};

  onSelect(contact) {
    this.selectedContact = contact;
  }
}
