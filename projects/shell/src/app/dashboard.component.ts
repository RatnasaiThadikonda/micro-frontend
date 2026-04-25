import { Component } from '@angular/core';
import {
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
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DataTableComponent,
    MetricCardComponent,
    PageHeaderComponent,
    PanelComponent,
    StatusBadgeComponent,
    ToolbarComponent
  ],
  template: `
    <ui-panel>
      <ui-page-header
        kicker="Operations overview"
        title="Micro-frontend control center"
        description="Use this shell as the production host: it owns navigation, runtime remote composition, and operational status across teams."
        statusLabel="Healthy"
        statusTone="success"
      />

      <div class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <ui-metric-card value="4" label="Remote apps" helper="Orders, catalog, customers, billing" tone="cyan" />
        <ui-metric-card value="99.9%" label="Shell uptime" helper="Target SLO" tone="emerald" />
        <ui-metric-card value="12 ms" label="Event latency" helper="Realtime target" tone="violet" />
        <ui-metric-card value="0" label="Open incidents" helper="Current environment" tone="amber" />
      </div>

      <div class="mt-6">
        <ui-toolbar title="Runtime registry" description="These remotes are resolved through the shell federation manifest.">
          <ui-status-badge label="Native Federation" tone="info" />
          <ui-status-badge label="Source shared-ui" tone="neutral" />
        </ui-toolbar>
      </div>

      <div class="mt-6">
        <ui-data-table [columns]="columns" [rows]="rows" />
      </div>
    </ui-panel>
  `
})
export class DashboardComponent {
  readonly columns: UiTableColumn[] = [
    { key: 'app', label: 'Application' },
    { key: 'type', label: 'Type' },
    { key: 'port', label: 'Port' },
    { key: 'owner', label: 'Owner' }
  ];

  readonly rows: UiTableRow[] = [
    { app: 'shell', type: 'Host', port: 4200, owner: 'Platform' },
    { app: 'orders', type: 'Remote', port: 4201, owner: 'Fulfillment' },
    { app: 'catalog', type: 'Remote', port: 4202, owner: 'Commerce' },
    { app: 'customers', type: 'Remote', port: 4203, owner: 'CRM' },
    { app: 'billing', type: 'Remote', port: 4204, owner: 'Finance' }
  ];
}
