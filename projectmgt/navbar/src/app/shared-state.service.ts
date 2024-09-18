import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Mock data
const projects = [
  {
    id: 1,
    name: 'Project Alpha',
    description: 'Description of Project Alpha',
    date: '2023-01-01',
  },
  {
    id: 2,
    name: 'Project Beta',
    description: 'Description of Project Beta',
    date: '2023-02-01',
  },
];

const tasks = [
  { id: 1, projectId: 1, name: 'Design Mockups', status: 'Completed' },
  { id: 2, projectId: 2, name: 'API Integration', status: 'In Progress' },
];

const teams = [
  { id: 1, name: 'Team Alpha', members: ['John Doe', 'Jane Smith'] },
  { id: 2, name: 'Team Beta', members: ['Alice Johnson', 'Bob Brown'] },
];

const dashboardState = {
  totalProjects: projects.length,
  totalTasks: tasks.length,
  totalTeamMembers: teams.length,
  projects: projects,
  tasks: tasks,
  teams: teams,
};

@Injectable({
  providedIn: 'root',
})
export class SharedStateService {
  private stateSubject: BehaviorSubject<any>;
  window: any = window;

  constructor() {
    if (!this.window.sharedState$) {
      this.stateSubject = new BehaviorSubject<any>({
        dashboard: dashboardState,
      });
      this.window.sharedState$ = this.stateSubject;
    } else {
      this.stateSubject = this.window.sharedState$;
      this.stateSubject.next({
        ...this.stateSubject.value,
        dashboard: dashboardState,
      });
    }
  }

  getState(key: string) {
    return this.stateSubject.value[key];
  }

  getStateObservable() {
    return this.stateSubject.asObservable();
  }

  setState(key: string, value: any) {
    this.stateSubject.next({ ...this.stateSubject.value, [key]: value });
  }
}
