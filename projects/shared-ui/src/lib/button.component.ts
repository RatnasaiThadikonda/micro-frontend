import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

export type UiButtonTone = 'primary' | 'secondary' | 'danger' | 'ghost';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
      class="inline-flex min-h-10 items-center justify-center rounded-lg px-4 py-2 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      [type]="type"
      [disabled]="disabled"
      [ngClass]="toneClass"
    >
      <ng-content />
    </button>
  `
})
export class ButtonComponent {
  @Input() tone: UiButtonTone = 'primary';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;

  get toneClass(): string {
    const tones: Record<UiButtonTone, string> = {
      primary: 'bg-cyan-600 text-white hover:bg-cyan-700',
      secondary: 'bg-slate-900 text-white hover:bg-slate-800',
      danger: 'bg-rose-600 text-white hover:bg-rose-700',
      ghost: 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50'
    };

    return tones[this.tone];
  }
}
