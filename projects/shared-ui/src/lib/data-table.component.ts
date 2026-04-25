import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface UiTableColumn {
  key: string;
  label: string;
}

export interface UiTableRow {
  [key: string]: string | number;
}

@Component({
  selector: 'ui-data-table',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <div class="overflow-hidden rounded-lg border border-slate-200">
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse">
          <thead class="bg-slate-100">
            <tr>
              <th
                *ngFor="let column of columns; trackBy: trackColumn"
                class="whitespace-nowrap border-b border-slate-200 px-4 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-slate-500"
              >
                {{ column.label }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let row of rows; trackBy: trackRow" class="hover:bg-slate-50">
              <td
                *ngFor="let column of columns; trackBy: trackColumn"
                class="whitespace-nowrap border-b border-slate-100 px-4 py-3 text-sm text-slate-700"
              >
                {{ row[column.key] }}
              </td>
            </tr>
            <tr *ngIf="rows.length === 0">
              <td class="px-4 py-8 text-center text-sm text-slate-500" [attr.colspan]="columns.length || 1">
                {{ emptyMessage }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class DataTableComponent {
  @Input() columns: UiTableColumn[] = [];
  @Input() rows: UiTableRow[] = [];
  @Input() emptyMessage = 'No records found.';

  trackColumn(_: number, column: UiTableColumn): string {
    return column.key;
  }

  trackRow(index: number): number {
    return index;
  }
}
