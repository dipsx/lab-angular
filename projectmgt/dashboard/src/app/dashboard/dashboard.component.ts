import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedStateService } from '../shared-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit, OnDestroy {
  projects: any[] = [];
  tasks: any[] = [];
  teams: any[] = [];
  private subscription: Subscription | undefined;

  constructor(private sharedStateService: SharedStateService) {}

  ngOnInit() {
    // Subscribe to the shared state
    this.subscription = this.sharedStateService
      .getStateObservable()
      .subscribe((state) => {
        if (state && state.dashboard) {
          this.projects = state.dashboard.projects;
          this.tasks = state.dashboard.tasks;
          this.teams = state.dashboard.teams;
        }
      });
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
