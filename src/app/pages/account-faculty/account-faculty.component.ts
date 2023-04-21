import { Component } from '@angular/core';

@Component({
  selector: 'app-account-faculty',
  templateUrl: './account-faculty.component.html',
  styleUrls: ['./account-faculty.component.css']
})
export class AccountFacultyComponent {
  isPasswordVisible = false;

  togglePasswordVisibility() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    this.isPasswordVisible = !this.isPasswordVisible;
    passwordInput.type = this.isPasswordVisible ? 'text' : 'password';
  }
}
