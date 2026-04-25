import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-toolbar',
  standalone: true,
  template: `
    <div class="flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 md:flex-row md:items-center md:justify-between">
      <div>
        <h3 class="text-sm font-extrabold text-slate-900">{{ title }}</h3>
        <p class="mt-1 text-sm text-slate-500">{{ description }}</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <ng-content />
      </div>
    </div>
  `
})
export class ToolbarComponent {
  @Input({ required: true }) title = '';
  @Input() description = '';
}
