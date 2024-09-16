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
    console.log('Dashboard component initialized');
    this.sharedDataService.projects$.subscribe(
      (projects) => (this.projects = projects)
    );
    this.sharedDataService.tasks$.subscribe((tasks) => (this.tasks = tasks));
    this.sharedDataService.team$.subscribe((team) => (this.team = team));
  }
}
