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
  title = 'orders';

  readonly columns: UiTableColumn[] = [
    { key: 'id', label: 'Order' },
    { key: 'customer', label: 'Customer' },
    { key: 'status', label: 'Status' },
    { key: 'total', label: 'Total' }
  ];

  readonly rows: UiTableRow[] = [
    { id: 'ORD-1001', customer: 'Aarav Textiles', status: 'Packed', total: 'INR 1,840' },
    { id: 'ORD-1002', customer: 'Northwind Retail', status: 'Pending', total: 'INR 920' },
    { id: 'ORD-1003', customer: 'Bluebird Stores', status: 'Shipped', total: 'INR 2,760' }
  ];

  readonly activities = [
    'ORD-1003 moved to shipped queue',
    'Packing SLA breached warning resolved',
    'New realtime order event received'
  ];
}
