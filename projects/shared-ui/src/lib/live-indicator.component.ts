import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

export type UiLiveState = 'connected' | 'connecting' | 'disconnected';

@Component({
  selector: 'ui-live-indicator',
  standalone: true,
  imports: [NgClass, NgIf],
  template: `
    <span class="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-bold text-slate-700 ring-1 ring-slate-200">
      <span class="relative flex h-2.5 w-2.5">
        <span
          *ngIf="state === 'connected'"
          class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70"
        ></span>
        <span class="relative inline-flex h-2.5 w-2.5 rounded-full" [ngClass]="dotClass"></span>
      </span>
      <span>{{ label }}: {{ stateLabel }}</span>
    </span>
  `
})
export class LiveIndicatorComponent {
  @Input() state: UiLiveState = 'connected';
  @Input() label = 'Live';

  get dotClass(): string {
    const states: Record<UiLiveState, string> = {
      connected: 'bg-emerald-500',
      connecting: 'bg-amber-500',
      disconnected: 'bg-rose-500'
    };

    return states[this.state];
  }

  get stateLabel(): string {
    const states: Record<UiLiveState, string> = {
      connected: 'Connected',
      connecting: 'Connecting',
      disconnected: 'Disconnected'
    };

    return states[this.state];
  }
}
