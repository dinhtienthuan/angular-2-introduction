import { Component, OnInit } from '@angular/core';
import {HttpTestService} from "./http-test.service";

@Component({
  selector: 'app-http-test',
  template: `
    <button (click)="onTestGet()">Test GET Request</button>
    <p>Output: {{getData}}</p>
    <button (click)="onTestPost()">Test POST Request</button>
    <p>Output: {{postData}}</p>
  `,
  styles: []
})
export class HttpTestComponent implements OnInit {

  getData: string;
  postData: string;

  constructor(private httpService: HttpTestService) { }

  ngOnInit() {
  }

  onTestGet() {
    this.httpService.getCurrentTime()
      .subscribe(
        data => this.getData = JSON.stringify(data),
        error => alert(error),
        () => console.log("Finished!")
      );
  }

  onTestPost() {
    this.httpService.postJSON()
      .subscribe(
        data => this.postData = JSON.stringify(data),
        error => alert(error),
        () => console.log("Finished!")
      );
  }

}
