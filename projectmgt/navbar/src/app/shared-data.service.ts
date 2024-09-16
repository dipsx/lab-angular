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

  private teamsSubject = new BehaviorSubject<any[]>([
    { id: 1, name: 'John Doe' },
  ]);
  public teams$: Observable<any[]> = this.teamsSubject.asObservable();

  private tasksSubject = new BehaviorSubject<any[]>([
    { id: 1, name: 'Project 1' },
  ]);
  public tasks$: Observable<any[]> = this.tasksSubject.asObservable();

  constructor() {
    if (!window.sharedData) {
      window.sharedData = {
        projectsSubject: this.projectsSubject,
        teamsSubject: this.teamsSubject,
        tasksSubject: this.tasksSubject,
      };
    }
  }

  public setProjects(projects: any[]) {
    this.projectsSubject.next(projects);
  }

  public setTeams(teams: any[]) {
    this.teamsSubject.next(teams);
  }

  public setTasks(tasks: any[]) {
    this.tasksSubject.next(tasks);
  }
}
