import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  projects: any[] = [{ name: 'Project1' }, { name: 'Project2' }];
  tasks: any[] = [{ name: 'Task1' }, { name: 'Task2' }];
  team: any[] = [{ name: 'Team1' }, { name: 'Team2' }];

  constructor() { }

  ngOnInit() {
    console.log('Dashboard component initialized');
  }
}
