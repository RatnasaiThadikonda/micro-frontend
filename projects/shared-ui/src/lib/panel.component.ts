import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-panel',
  standalone: true,
  imports: [NgIf],
  template: `
    <section class="rounded-lg border border-slate-200 bg-white p-5 shadow-panel">
      <div *ngIf="title || description" class="mb-5">
        <h3 *ngIf="title" class="text-lg font-bold text-slate-950">{{ title }}</h3>
        <p *ngIf="description" class="mt-1 text-sm text-slate-500">{{ description }}</p>
      </div>

      <ng-content />
    </section>
  `
})
export class PanelComponent {
  @Input() title = '';
  @Input() description = '';
}
