import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { apiServiceInstance } from '@projectmgt/sharedstate';
import { onEventInstance, emitEventInstance } from '@projectmgt/sharedstate';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  projects: any[] = [];
  tasks: any[] = [];
  team: any[] = [];

  constructor() {}

  ngOnInit() {
    onEventInstance('updateData', (event: any) => {
      console.log('Data updated', event.detail);
      this.projects = event.detail.projects;
      this.tasks = event.detail.tasks;
      this.team = event.detail.team;
    });

    apiServiceInstance.getProjects().then((data: any) => {
      this.projects = data;
    });
    apiServiceInstance.getTasks().then((data: any) => {
      this.tasks = data;
    });
    apiServiceInstance.getTeam().then((data: any) => {
      this.team = data;
    });
  }

  updateData = () => {
    const data = {
      projects: this.projects,
      tasks: this.tasks,
      team: this.team,
    };
    emitEventInstance('updateData', data);
  };
}
