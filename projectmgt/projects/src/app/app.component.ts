import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { sharedStateService } from '@projectmgt/sharedstate';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import necessary modules here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  projects: any[] = [];
  newProject: any = {};
  sharedState: any;

  constructor() {}

  ngOnInit() {
    this.sharedState = sharedStateService.getState('dashboard') || {
      projects: [],
    };
    this.projects = this.sharedState.projects;
    this.newProject = {};
  }

  addProject() {
    if (this.newProject.name && this.newProject.description) {
      this.projects.push(this.newProject);
      this.updateSharedState('projects', this.projects);
      this.newProject = {}; // Reset form
    } else {
      console.log('Form is invalid');
    }
  }

  updateSharedState = (key: string, value: any) => {
    sharedStateService.setState('dashboard', {
      ...this.sharedState,
      [key]: value,
    });
  };
}



