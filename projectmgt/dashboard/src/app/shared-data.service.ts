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

  private teamSubject = new BehaviorSubject<any[]>([]);
  public team$: Observable<any[]> = this.teamSubject.asObservable();

  private tasksSubject = new BehaviorSubject<any[]>([]);
  public tasks$: Observable<any[]> = this.tasksSubject.asObservable();

  constructor() {
    this.waitForSharedData()
      .then(() => {
        window.sharedData.projectsSubject.subscribe((data) => {
          this.projectsSubject.next(data);
        });
        window.sharedData.teamSubject.subscribe((data) =>
          this.teamSubject.next(data)
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
