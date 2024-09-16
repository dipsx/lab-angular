import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  distinctUntilChanged,
  Observable,
  skip,
  Subject,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private projectsSubject = new BehaviorSubject<any[]>([]);
  public projects$: Observable<any[]> = this.projectsSubject.asObservable();

  private teamsSubject = new BehaviorSubject<any[]>([]);
  public teams$: Observable<any[]> = this.teamsSubject.asObservable();

  private tasksSubject = new BehaviorSubject<any[]>([]);
  public tasks$: Observable<any[]> = this.tasksSubject.asObservable();

  constructor() {
    this.waitForSharedData()
      .then(() => {
        window.sharedData.projectsSubject.subscribe((data) => {
          this.projectsSubject.next(data);
        });
        window.sharedData.teamsSubject.subscribe((data) =>
          this.teamsSubject.next(data)
        );
        window.sharedData.tasksSubject.subscribe((data) =>
          this.tasksSubject.next(data)
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  private waitForSharedData(): Promise<void> {
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        if (window.sharedData) {
          clearInterval(interval);
          resolve();
        }
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        reject(new Error('sharedData not found within timeout'));
      }, 5000);
    });
  }
}
