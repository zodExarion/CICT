import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AccountFacultyComponent } from './pages/admin/account-faculty/account-faculty.component';
import { AccountAttendanceCheckerComponent } from './pages/admin/account-attendance-checker/account-attendance-checker.component';
import { AttendanceRecordComponent } from './pages/admin/attendance-record/attendance-record.component';
import { FacultyScheduleComponent } from './pages/admin/faculty-schedule/faculty-schedule.component';
import { KeyInventoryComponent } from './pages/admin/key-inventory/key-inventory.component';
import { KeyHistoryComponent } from './pages/admin/key-history/key-history.component';
import { ScheduleAttendanceComponent } from './pages/checker/schedule-attendance/schedule-attendance.component';
import { CheckerKeyInventoryComponent } from './pages/checker/checker-key-inventory/checker-key-inventory.component';
import { LayoutCheckerComponent } from './components/layout-checker/layout-checker.component';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }
    ]

  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'account-faculty', component: AccountFacultyComponent }
    ]

  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'account-attendance-checker', component: AccountAttendanceCheckerComponent }
    ]

  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'attendance-record', component: AttendanceRecordComponent }
    ]

  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'faculty-schedule', component: FacultyScheduleComponent }
    ]

  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'key-inventory', component: KeyInventoryComponent }
    ]

  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'key-history', component: KeyHistoryComponent }
    ]

  },
  {
    path: 'checker',
    component: LayoutCheckerComponent,
    children: [
      { path: 'schedule-attendance', component: ScheduleAttendanceComponent }
    ]

  },
  {
    path: 'checker',
    component: LayoutCheckerComponent,
    children: [
      { path: 'checker-key-inventory', component: CheckerKeyInventoryComponent }
    ]

  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
