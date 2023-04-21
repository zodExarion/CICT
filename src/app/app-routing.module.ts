import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AccountFacultyComponent } from './pages/account-faculty/account-faculty.component';
import { AccountAttendanceCheckerComponent } from './pages/account-attendance-checker/account-attendance-checker.component';
import { AttendanceRecordComponent } from './pages/attendance-record/attendance-record.component';
import { FacultyScheduleComponent } from './pages/faculty-schedule/faculty-schedule.component';
import { KeyInventoryComponent } from './pages/key-inventory/key-inventory.component';
import { KeyHistoryComponent } from './pages/key-history/key-history.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]

  },
  {
    path: 'account-faculty',
    component: LayoutComponent,
    children: [
      { path: '', component: AccountFacultyComponent }
    ]

  },
  {
    path: 'account-attendance-checker',
    component: LayoutComponent,
    children: [
      { path: '', component: AccountAttendanceCheckerComponent }
    ]

  },
  {
    path: 'attendance-record',
    component: LayoutComponent,
    children: [
      { path: '', component: AttendanceRecordComponent }
    ]

  },
  {
    path: 'faculty-schedule',
    component: LayoutComponent,
    children: [
      { path: '', component: FacultyScheduleComponent }
    ]

  },
  {
    path: 'key-inventory',
    component: LayoutComponent,
    children: [
      { path: '', component: KeyInventoryComponent }
    ]

  },
  {
    path: 'key-history',
    component: LayoutComponent,
    children: [
      { path: '', component: KeyHistoryComponent }
    ]

  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
