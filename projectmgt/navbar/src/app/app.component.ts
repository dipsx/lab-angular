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

    // every 100ms get value from shared state service
    // and update the project count

    setInterval(() => {
      this.projectCount = this.sharedDataService.data.projects.length;
    }, 1000);

    // this.sharedStateService.projects$.subscribe((projects) => {
    //   this.projectCount = projects.length;
    // });
  }
}
