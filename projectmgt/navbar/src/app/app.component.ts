import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedDataService } from './shared-data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  projectCount: number = 0;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    console.log('Navigation component initialized');

    this.sharedDataService.projects$.subscribe(
      (projects) => (this.projectCount = projects.length)
    );
  }
}
