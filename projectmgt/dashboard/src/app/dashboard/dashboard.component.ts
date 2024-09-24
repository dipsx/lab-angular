import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { sharedStateService } from "@projectmgt/sharedstate";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
})
export class DashboardComponent implements OnInit {
  sharedState: any = {};

  constructor() { }

  ngOnInit() {
    this.sharedState = sharedStateService.getState("dashboard");
  }

  updateSharedState(key: string, value: any) {
    sharedStateService.setState("dashboard", { ...this.sharedState, [key]: value });
  };

}
