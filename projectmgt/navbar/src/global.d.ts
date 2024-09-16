import { Subject } from 'rxjs';

declare global {
  interface Window {
    sharedData: {
      projectsSubject: Subject<any[]>;
      teamsSubject: Subject<any[]>;
      tasksSubject: Subject<any[]>;
    };
  }
}
