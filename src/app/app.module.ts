import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AccountFacultyComponent } from './pages/account-faculty/account-faculty.component';
import { AccountAttendanceCheckerComponent } from './pages/account-attendance-checker/account-attendance-checker.component';
import { AttendanceRecordComponent } from './pages/attendance-record/attendance-record.component';
import { FacultyScheduleComponent } from './pages/faculty-schedule/faculty-schedule.component';
import { KeyInventoryComponent } from './pages/key-inventory/key-inventory.component';
import { KeyHistoryComponent } from './pages/key-history/key-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    SidebarComponent,
    LayoutComponent,
    AccountFacultyComponent,
    AccountAttendanceCheckerComponent,
    AttendanceRecordComponent,
    FacultyScheduleComponent,
    KeyInventoryComponent,
    KeyHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
