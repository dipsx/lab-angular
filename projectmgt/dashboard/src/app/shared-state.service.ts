import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {
  private stateSubject: BehaviorSubject<any>;
  window: any = window;

  constructor() {
    if (!this.window.sharedState$) {
      this.stateSubject = new BehaviorSubject<any>({});
      this.window.sharedState$ = this.stateSubject;
    } else {
      this.stateSubject = this.window.sharedState$;
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
