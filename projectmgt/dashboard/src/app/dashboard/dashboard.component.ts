import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  projects: any[] = [];
  tasks: any[] = [];
  team: any[] = [];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    console.log('DashboardComponent initialized');
    this.sharedDataService.projects$.subscribe(
      (projects) => (this.projects = projects)
    );
    this.sharedDataService.tasks$.subscribe((tasks) => (this.tasks = tasks));
    this.sharedDataService.team$.subscribe((team) => (this.team = team));
  }
}
