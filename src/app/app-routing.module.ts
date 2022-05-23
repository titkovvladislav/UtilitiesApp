import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./pages/main/main.component";
import { AuthComponent } from "./pages/auth/auth.component";
import { AuthGuard } from "./guards/auth.guard";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { ReportsComponent } from "./pages/reports/reports.component";
import { NotificationsComponent } from "./pages/notifications/notifications.component";
import { CalendarComponent } from "./pages/calendar/calendar.component";

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard], children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'settings', component: SettingsComponent },
    ] },
  { path: 'login', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
