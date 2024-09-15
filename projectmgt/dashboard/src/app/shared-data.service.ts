// custom-event.service.ts
import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService implements OnDestroy {
  private eventName = 'shared-data-event';

  constructor() {
    window.addEventListener(this.eventName, (event: Event) =>
      this.handleEvent(event as CustomEvent)
    );
  }

  public dispatchEvent(data: any): void {
    const event = new CustomEvent(this.eventName, { detail: data });
    window.dispatchEvent(event);
  }

  private handleEvent = (event: CustomEvent) => {
    const receivedData = event.detail;
  };

  ngOnDestroy(): void {
    window.removeEventListener(
      this.eventName,
      this.handleEvent as EventListener
    );
  }
}
