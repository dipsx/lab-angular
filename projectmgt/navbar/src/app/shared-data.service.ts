// custom-event.service.ts
import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService implements OnDestroy {
  private eventName = 'shared-data-event';

  public data: any = { projects: [], tasks: [], team: [] };

  constructor() {
    this.dispatchEvent({ projects: [1, 2, 3], tasks: [], team: [] });

    window.addEventListener(this.eventName, (event: Event) =>
      this.handleEvent(event as CustomEvent)
    );

    const existingData = (window as any).sharedData;
    if (existingData !== undefined) {
      this.data = existingData;
      console.log('Data from sharedData:', this.data);
    }
  }

  public dispatchEvent(data: any): void {
    const event = new CustomEvent(this.eventName, { detail: data });
    window.dispatchEvent(event);
    (window as any).sharedData = data;
  }

  private handleEvent = (event: CustomEvent) => {
    const receivedData = event.detail;
    console.log('Received data:', receivedData);
    this.data = receivedData;
  };

  ngOnDestroy(): void {
    window.removeEventListener(
      this.eventName,
      this.handleEvent as EventListener
    );
  }
}
