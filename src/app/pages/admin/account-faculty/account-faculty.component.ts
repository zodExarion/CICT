import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendService } from '../../../services/backend.service'
import { data } from 'jquery';

@Component({
  selector: 'app-account-faculty',
  templateUrl: './account-faculty.component.html',
  styleUrls: ['./account-faculty.component.css']
})
export class AccountFacultyComponent implements OnInit {
  public form={
    email : null,
    firstName : null,
    middleName : null,
    lastName : null,
    employeeId : null,
    contactNumber : null,
    courseProgram : null,
    password : null
  }

constructor(private backend:BackendService){}
  public error!: any[];
ngOnInit():void{
 
}

submitRegFaculty() {
    // console.log(this.form);
    return this.backend.register(this.form).subscribe(
      data=>console.log(data),
      error=>this.handleError(error)
    );
}
handleError(error:any){
this.error = error.error.erros;
}
  isPasswordVisible = false;

  togglePasswordVisibility() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    this.isPasswordVisible = !this.isPasswordVisible;
    passwordInput.type = this.isPasswordVisible ? 'text' : 'password';
  }
}
