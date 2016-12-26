import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>Child</h2>
    <p>Value entered in parent component: {{parentValue}}</p>
    <input type="text"><br>
    <button>Click me</button>
  `,
  styles: []
})
export class ChildComponent implements OnInit {
  @Input() parentValue: string;

  constructor() { }

  ngOnInit() {
  }

}
