import { Subject } from 'rxjs';

declare global {
  interface Window {
    sharedData: {
      projectsSubject: Subject<any[]>;
      teamSubject: Subject<any[]>;
      tasksSubject: Subject<any[]>;
    };
  }
}
