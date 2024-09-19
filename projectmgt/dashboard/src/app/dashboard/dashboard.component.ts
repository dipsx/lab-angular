import { Component, OnInit } from '@angular/core';
import { sharedStateService } from '@projectmgt/sharedstate';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  projects: any[] = [];
  tasks: any[] = [];
  teams: any[] = [];

  constructor() {}

  sharedState: any;
  updateSharedState = (key: string, value: any) => {
    sharedStateService.setState('dashboard', {
      ...this.sharedState,
      [key]: value,
    });
  };

  ngOnInit() {
    this.sharedState = sharedStateService.getState('dashboard');
    this.projects = this.sharedState.projects;
    this.tasks = this.sharedState.tasks;
    this.teams = this.sharedState.teams;
  }
}
