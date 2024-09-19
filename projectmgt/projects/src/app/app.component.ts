import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedStateService } from './shared-state.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import necessary modules here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  projects: any[] = [];
  newProject: any = {};

  private subscription: Subscription | undefined;

  constructor(private sharedStateService: SharedStateService) {}

  ngOnInit() {
    this.subscription = this.sharedStateService
      .getStateObservable()
      .subscribe((state) => {
        if (state?.projects) {
          this.projects = state.projects;
        }
      });
  }

  addProject() {
    if (this.newProject.name && this.newProject.description) {
      this.projects.push(this.newProject);
      this.sharedStateService.setState('projects', this.projects);
      this.newProject = {}; // Reset form
    } else {
      console.log('Form is invalid');
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
