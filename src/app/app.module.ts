import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoComponent } from './components/go/go.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RecentlyAddedComponent } from './components/recently-added/recently-added.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { TranslatecheckformComponent } from './components/translatecheckform/translatecheckform.component';


@NgModule({
  declarations: [
    AppComponent,
    GoComponent,
    SettingsComponent,
    RecentlyAddedComponent,
    NavigationComponent,
    TranslatecheckformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
