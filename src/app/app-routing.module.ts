import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoComponent } from './components/go/go.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RecentlyAddedComponent } from './components/recently-added/recently-added.component';


const routes: Routes = [

  { path: 'go', component: GoComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', component: RecentlyAddedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
