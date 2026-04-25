import { Component } from '@angular/core';
import { ButtonComponent, PageHeaderComponent, PanelComponent, StatusBadgeComponent } from 'shared-ui';

@Component({
  selector: 'app-remote-unavailable',
  standalone: true,
  imports: [ButtonComponent, PageHeaderComponent, PanelComponent, StatusBadgeComponent],
  template: `
    <ui-panel>
      <ui-page-header
        kicker="Remote unavailable"
        title="This micro-frontend could not be loaded"
        description="Start the matching remote dev server, then refresh the shell. In production this fallback protects the shell when one remote is offline."
        statusLabel="Degraded"
        statusTone="danger"
      />

      <div class="mt-6 rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
        Check that the remote entry in <strong>projects/shell/public/federation.manifest.json</strong> is reachable.
      </div>

      <div class="mt-6 flex flex-wrap gap-2">
        <ui-button tone="secondary" (click)="refresh()">Refresh shell</ui-button>
        <ui-status-badge label="Shell still running" tone="success" />
      </div>
    </ui-panel>
  `
})
export class RemoteUnavailableComponent {
  refresh(): void {
    window.location.reload();
  }
}
