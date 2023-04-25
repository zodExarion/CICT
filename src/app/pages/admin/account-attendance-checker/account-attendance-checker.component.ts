import { Component } from '@angular/core';

@Component({
  selector: 'app-account-attendance-checker',
  templateUrl: './account-attendance-checker.component.html',
  styleUrls: ['./account-attendance-checker.component.css']
})
export class AccountAttendanceCheckerComponent {
  isPasswordVisible = false;

  togglePasswordVisibility() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    this.isPasswordVisible = !this.isPasswordVisible;
    passwordInput.type = this.isPasswordVisible ? 'text' : 'password';
  }
}
