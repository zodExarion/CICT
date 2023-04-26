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
import { AdminHeaderDropdownComponent } from './pages/admin/admin-header-dropdown/admin-header-dropdown.component';
import { CheckerHeaderDropdownComponent } from './pages/checker/checker-header-dropdown/checker-header-dropdown.component';
import { FacultyHeaderDropdownComponent } from './pages/faculty/faculty-header-dropdown/faculty-header-dropdown.component';
import { AttendanceSummaryComponent } from './pages/faculty/attendance-summary/attendance-summary.component';
import { KeyInventoryBoardComponent } from './pages/faculty/key-inventory-board/key-inventory-board.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },

  {
    path: '',
    component: CheckerHeaderDropdownComponent,
    outlet: "checker-header-dropdown"
  },
  {
    path: '',
    component: AdminHeaderDropdownComponent,
    outlet: "faculty-header-dropdown"
  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', component: AdminHeaderDropdownComponent, outlet: "header-dropdown" }
    ]

  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'account-faculty', component: AccountFacultyComponent },
      { path: '', component: AdminHeaderDropdownComponent, outlet: "header-dropdown" }
    ]

  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'account-attendance-checker', component: AccountAttendanceCheckerComponent },
      { path: '', component: AdminHeaderDropdownComponent, outlet: "header-dropdown" }
    ]

  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'attendance-record', component: AttendanceRecordComponent },
      { path: '', component: AdminHeaderDropdownComponent, outlet: "header-dropdown" }
    ]

  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'faculty-schedule', component: FacultyScheduleComponent },
      { path: '', component: AdminHeaderDropdownComponent, outlet: "header-dropdown" }
    ]

  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'key-inventory', component: KeyInventoryComponent },
      { path: '', component: AdminHeaderDropdownComponent, outlet: "header-dropdown" }
    ]

  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'key-history', component: KeyHistoryComponent },
      { path: '', component: AdminHeaderDropdownComponent, outlet: "header-dropdown" }
    ]

  },
  {
    path: 'checker',
    component: LayoutCheckerComponent,
    children: [
      { path: 'schedule-attendance', component: ScheduleAttendanceComponent },
      { path: '', component: CheckerHeaderDropdownComponent, outlet: "header-dropdown" }
    ]

  },
  {
    path: 'checker',
    component: LayoutCheckerComponent,
    children: [
      { path: 'checker-key-inventory', component: CheckerKeyInventoryComponent },
      { path: '', component: CheckerHeaderDropdownComponent, outlet: "header-dropdown" }
    ]

  },
  {
    path: 'faculty',
    component: LayoutCheckerComponent,
    children: [
      { path: 'attendance-summary', component: AttendanceSummaryComponent },
      { path: '', component: FacultyHeaderDropdownComponent, outlet: "header-dropdown" }
    ]

  },
  {
    path: 'faculty',
    component: LayoutCheckerComponent,
    children: [
      { path: 'key-inventory-board', component: KeyInventoryBoardComponent },
      { path: '', component: FacultyHeaderDropdownComponent, outlet: "header-dropdown" }
    ]

  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
