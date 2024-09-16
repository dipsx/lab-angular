import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private projectsSubject = new BehaviorSubject<any[]>([
    { id: 1, name: 'Task 1' },
  ]);
  public projects$: Observable<any[]> = this.projectsSubject.asObservable();

  private teamSubject = new BehaviorSubject<any[]>([
    { id: 1, name: 'John Doe' },
  ]);
  public team$: Observable<any[]> = this.teamSubject.asObservable();

  private tasksSubject = new BehaviorSubject<any[]>([
    { id: 1, name: 'Project 1' },
  ]);
  public tasks$: Observable<any[]> = this.tasksSubject.asObservable();

  constructor() {
    if (!window.sharedData) {
      window.sharedData = {
        projectsSubject: this.projectsSubject,
        teamSubject: this.teamSubject,
        tasksSubject: this.tasksSubject,
      };
    }
  }

  public setProjects(projects: any[]) {
    this.projectsSubject.next(projects);
  }

  public setTeam(team: any[]) {
    this.teamSubject.next(team);
  }

  public setTasks(tasks: any[]) {
    this.tasksSubject.next(tasks);
  }
}
