import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoComponent } from './components/go/go.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RecentlyAddedComponent } from './components/recently-added/recently-added.component';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    GoComponent,
    SettingsComponent,
    RecentlyAddedComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
