import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedDataService } from './shared-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  projects: any[] = [];
  tasks: any[] = [];
  team: any[] = [];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.projects = [{ id: 1, name: 'Project Alpha' }];
    this.tasks = [{ id: 1, name: 'Task 1' }];
    this.team = [{ id: 1, name: 'John Doe' }];

    // this.sharedDataService.dispatchEvent({ projects: this.projects, tasks: this.tasks, team: this.team });
  }
}
