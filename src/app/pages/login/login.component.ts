import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form={
    email : null,
    password : null
  }
  
  loggedIn = false;
  user: any;

  constructor(private http: HttpClient) {}

  ngOnInit():void {
    // Check if the user is already logged in
    
  }

  submitLogin():void {
    console.log(this.form);
}
}
