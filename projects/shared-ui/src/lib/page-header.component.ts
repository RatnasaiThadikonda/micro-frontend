import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

import { StatusBadgeComponent, UiBadgeTone } from './status-badge.component';

@Component({
  selector: 'ui-page-header',
  standalone: true,
  imports: [NgIf, StatusBadgeComponent],
  template: `
    <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
      <div>
        <p class="mb-1 text-xs font-extrabold uppercase tracking-wider text-slate-500">{{ kicker }}</p>
        <h2 class="text-2xl font-bold text-slate-950">{{ title }}</h2>
        <p *ngIf="description" class="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{{ description }}</p>
      </div>

      <ui-status-badge *ngIf="statusLabel" [label]="statusLabel" [tone]="statusTone" />
    </div>
  `
})
export class PageHeaderComponent {
  @Input({ required: true }) kicker = '';
  @Input({ required: true }) title = '';
  @Input() description = '';
  @Input() statusLabel = '';
  @Input() statusTone: UiBadgeTone = 'neutral';
}
