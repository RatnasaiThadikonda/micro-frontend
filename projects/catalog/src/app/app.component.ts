import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {
  ButtonComponent,
  DataTableComponent,
  MetricCardComponent,
  PageHeaderComponent,
  PanelComponent,
  StatusBadgeComponent,
  ToolbarComponent,
  UiTableColumn,
  UiTableRow
} from 'shared-ui';

@Component({
  selector: 'app-root',
  imports: [
    ButtonComponent,
    DataTableComponent,
    MetricCardComponent,
    NgFor,
    PageHeaderComponent,
    PanelComponent,
    StatusBadgeComponent,
    ToolbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'catalog';

  readonly columns: UiTableColumn[] = [
    { key: 'sku', label: 'SKU' },
    { key: 'name', label: 'Name' },
    { key: 'stock', label: 'Stock' },
    { key: 'price', label: 'Price' }
  ];

  readonly rows: UiTableRow[] = [
    { sku: 'SKU-220', name: 'Starter API Kit', stock: 42, price: 'INR 1,499' },
    { sku: 'SKU-431', name: 'Event Bus Pack', stock: 18, price: 'INR 2,299' },
    { sku: 'SKU-618', name: 'Observability Bundle', stock: 9, price: 'INR 3,199' }
  ];

  readonly activities = [
    'SKU-618 crossed low-stock threshold',
    'Starter API Kit price rule synced',
    'Three catalog cache entries invalidated'
  ];
}
