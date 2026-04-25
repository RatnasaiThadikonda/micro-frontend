import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

export type UiMetricTone = 'cyan' | 'emerald' | 'violet' | 'amber' | 'rose';

@Component({
  selector: 'ui-metric-card',
  standalone: true,
  imports: [NgClass, NgIf],
  template: `
    <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div class="mb-4 h-1.5 w-12 rounded-full border" [ngClass]="accentClass"></div>
      <strong class="block text-3xl font-bold text-slate-950">{{ value }}</strong>
      <span class="mt-1 block text-sm font-semibold text-slate-600">{{ label }}</span>
      <p *ngIf="helper" class="mt-3 text-sm text-slate-500">{{ helper }}</p>
    </article>
  `
})
export class MetricCardComponent {
  @Input({ required: true }) label = '';
  @Input({ required: true }) value = '';
  @Input() helper = '';
  @Input() tone: UiMetricTone = 'cyan';

  get accentClass(): string {
    const tones: Record<UiMetricTone, string> = {
      cyan: 'border-cyan-200 bg-cyan-50 text-cyan-700',
      emerald: 'border-emerald-200 bg-emerald-50 text-emerald-700',
      violet: 'border-violet-200 bg-violet-50 text-violet-700',
      amber: 'border-amber-200 bg-amber-50 text-amber-700',
      rose: 'border-rose-200 bg-rose-50 text-rose-700'
    };

    return tones[this.tone];
  }
}
