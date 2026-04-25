import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Type } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { RemoteUnavailableComponent } from './remote-unavailable.component';

function loadRemoteComponent(remoteName: string): Promise<Type<unknown>> {
  return loadRemoteModule(remoteName, './Component')
    .then((m) => m.AppComponent as Type<unknown>)
    .catch((error) => {
      console.error(`Unable to load remote: ${remoteName}`, error);
      return RemoteUnavailableComponent;
    });
}

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'orders',
    loadComponent: () => loadRemoteComponent('orders')
  },
  {
    path: 'catalog',
    loadComponent: () => loadRemoteComponent('catalog')
  },
  {
    path: 'customers',
    loadComponent: () => loadRemoteComponent('customers')
  },
  {
    path: 'billing',
    loadComponent: () => loadRemoteComponent('billing')
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: '**',
    redirectTo: 'orders'
  }
];
