import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { AuthComponent } from './pages/auth/auth.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from "@angular/common/http";
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { WeatherComponent } from './pages/widgets/weather/weather.component';
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/app.reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { CustomRouterStateSerializer } from "./utils/CustomRouterStateSerializer";
import { AppEffect } from "./store/app.effect";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavBarComponent,
    DashboardComponent,
    SettingsComponent,
    ReportsComponent,
    AuthComponent,
    NotificationsComponent,
    CalendarComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forRoot(reducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot({serializer: CustomRouterStateSerializer}),
    EffectsModule.forRoot([AppEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
