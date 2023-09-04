import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './shared/components/main/main.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyMenuModule as MatMenuModule } from "@angular/material/legacy-menu";
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { AuthComponent } from './pages/auth/auth.component';
import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
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
import { CustomRouterStateSerializer } from "./shared/utils/CustomRouterStateSerializer";
import { AppEffect } from "./store/app.effect";
import { HeaderComponent } from './shared/components/header/header.component';


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
    WeatherComponent,
    HeaderComponent
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
    StoreModule.forFeature('state', reducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot({serializer: CustomRouterStateSerializer}),
    EffectsModule.forRoot([AppEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
