import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="parent">
    <h1>Parent</h1>
    <p>Value entered in child component: {{childValue}}</p>
    <input type="text" #parentInput (keyup)="0"><br>
    <div class="child">
      <app-child [parentValue]="parentInput.value" (childChanged)="childValue = $event.prefix + ' ' + $event.value"></app-child>
    </div>
  </div>
  `
})
export class AppComponent {
  childValue: string;
}
