import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>Child</h2>
    <p>Value entered in parent component: {{parentValue}}</p>
    <input type="text" (keyup)="onChanged(childInput.value)" #childInput><br>
  `,
  styles: []
})
export class ChildComponent implements OnInit {
  @Input() parentValue: string;
  @Output() childChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChanged(value: string) {
    return this.childChanged.emit({value: value, prefix: 'child'});
  }
}
