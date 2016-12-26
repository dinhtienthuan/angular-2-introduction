import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs';

@Injectable()
export class HttpTestService {

  constructor(private http: Http) { }

  getCurrentTime() {
    return this.http.get('http://date.jsontest.com')
      .map((response: Response) => response.json());
  }

  postJSON() {
    var json = JSON.stringify({var1: 'test', var2: 3});
    var params = 'json=' + json;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://validate.jsontest.com', params, {
      headers: headers
    })
      .map(response => response.json());
  }
}
