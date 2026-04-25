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
  title = 'customers';

  readonly columns: UiTableColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'segment', label: 'Segment' },
    { key: 'city', label: 'City' }
  ];

  readonly rows: UiTableRow[] = [
    { name: 'Aarav Textiles', segment: 'Enterprise', city: 'Bengaluru' },
    { name: 'Northwind Retail', segment: 'SMB', city: 'Pune' },
    { name: 'Bluebird Stores', segment: 'Marketplace', city: 'Hyderabad' }
  ];

  readonly activities = [
    'Aarav Textiles upgraded to enterprise',
    'Northwind Retail contact consent refreshed',
    'Customer risk score model completed'
  ];
}
