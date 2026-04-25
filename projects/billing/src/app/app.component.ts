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
  title = 'billing';

  readonly columns: UiTableColumn[] = [
    { key: 'invoice', label: 'Invoice' },
    { key: 'account', label: 'Account' },
    { key: 'state', label: 'State' },
    { key: 'amount', label: 'Amount' }
  ];

  readonly rows: UiTableRow[] = [
    { invoice: 'INV-7001', account: 'Aarav Textiles', state: 'Paid', amount: 'INR 1,840' },
    { invoice: 'INV-7002', account: 'Northwind Retail', state: 'Due', amount: 'INR 920' },
    { invoice: 'INV-7003', account: 'Bluebird Stores', state: 'Processing', amount: 'INR 2,760' }
  ];

  readonly activities = [
    'INV-7001 payment captured',
    'INV-7002 retry workflow scheduled',
    'Settlement batch reconciliation completed'
  ];
}
