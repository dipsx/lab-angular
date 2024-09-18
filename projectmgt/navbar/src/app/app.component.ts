import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedStateService } from './shared-state.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  projectCount: number = 0;

  constructor(private sharedStateService: SharedStateService) { }

  ngOnInit(): void {
    console.log('Navigation component initialized');
    this.sharedStateService.getStateObservable().subscribe((data) => {
      if (data.dashboard) {
        this.projectCount = data.dashboard.projects.length;
      }
    });
  }
}
