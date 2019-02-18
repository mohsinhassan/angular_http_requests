import {Component, OnInit} from '@angular/core';

import {HttpClient , HttpErrorResponse} from '@angular/common/http';
import {Error} from "tslint/lib/error";

interface UserResponse {
  login: string;
  bio: string;
  company: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nghttpclient01';

  constructor(private http: HttpClient) {


  }

  ngOnInit(): void {
    this.http.get<UserResponse>('https://jsonplaceholder.typicode.com/posts').subscribe(
        data => {
      console.log("User Login : " + data.login);
      console.log("Bio : " + data.bio);
      console.log("Company : " + data.company);

    } ,
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {

            console.log("client side Error ");
          } else {
            console.log("server side Error ");
          }
        }
    )

    const req = this.http.post('https://jsonplaceholder.typicode.com/posts' , {
      title: 'foo',
      body: 'bar',
      userId: 1
    }).subscribe ( res => { console.log(res) }
    );
  }
}
