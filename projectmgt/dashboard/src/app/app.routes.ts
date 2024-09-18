import { Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'help', component: HelpComponent },
  { path: '**', redirectTo: '' },
];
