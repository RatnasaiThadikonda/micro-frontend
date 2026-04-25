import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

export type UiBadgeTone = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

@Component({
  selector: 'ui-status-badge',
  standalone: true,
  imports: [NgClass],
  template: `
    <span class="inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-bold ring-1" [ngClass]="toneClass">
      {{ label }}
    </span>
  `
})
export class StatusBadgeComponent {
  @Input({ required: true }) label = '';
  @Input() tone: UiBadgeTone = 'neutral';

  get toneClass(): string {
    const tones: Record<UiBadgeTone, string> = {
      success: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
      warning: 'bg-amber-50 text-amber-700 ring-amber-200',
      danger: 'bg-rose-50 text-rose-700 ring-rose-200',
      info: 'bg-blue-50 text-blue-700 ring-blue-200',
      neutral: 'bg-slate-100 text-slate-700 ring-slate-200'
    };

    return tones[this.tone];
  }
}
