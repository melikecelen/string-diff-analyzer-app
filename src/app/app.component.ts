import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  responseText: string = '';
  s1: string = '';
  s2: string = '';

  constructor(private http: HttpClient) { }

  fetchResponse() {
    const url = 'http://localhost:8080/string-diff-analyzer/v1/diff';

    this.http.get<any>(url, {
      params: {
        s1: this.s1,
        s2: this.s2
      }
    }).subscribe(
      response => {
        this.responseText = response.result;
        console.log('Response:', response.result);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
