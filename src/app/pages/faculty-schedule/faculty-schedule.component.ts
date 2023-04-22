import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty-schedule',
  templateUrl: './faculty-schedule.component.html',
  styleUrls: ['./faculty-schedule.component.css']
})
export class FacultyScheduleComponent {
  isPasswordVisible = false;

  togglePasswordVisibility() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    this.isPasswordVisible = !this.isPasswordVisible;
    passwordInput.type = this.isPasswordVisible ? 'text' : 'password';
  }
}
