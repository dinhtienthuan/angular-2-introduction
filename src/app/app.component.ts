import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="parent">
    <h1>Parent</h1>
    <p>Value entered in child component: </p>
    <input type="text" #parentInput (keyup)="0"><br>
    <button>Click me</button>
    <div class="child">
      <child [parentValue]="parentInput.value"></child>
    </div>
  </div>
  `
})
export class AppComponent {

}
