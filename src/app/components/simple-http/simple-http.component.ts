import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

// https://stackoverflow.com/questions/40256658/getting-an-object-array-from-an-angularjs-2-service

@Component({
  selector: 'app-simple-http',
  template: `
    <h2>Basic Request</h2>
    <button type="button" (click)="makeRequest()">Make Request</button>
    <div *ngIf="loading">loading...</div>
    <pre>{{data | json}}</pre>
  `
})
export class SimpleHttpComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  makeRequest(): void {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }

}