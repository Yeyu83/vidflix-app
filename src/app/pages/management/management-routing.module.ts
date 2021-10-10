import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementPage } from './management.page';

const routes: Routes = [
  {
    path: '',
    component: ManagementPage,
    children: [
      {
        path: 'management-films',
        loadChildren: () => import('./tabs/management-films/management-films.module').then(m => m.ManagementFilmsPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./tabs/account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: '',
        redirectTo: '/management/management-films',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/management/management-films',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ManagementPageRoutingModule {}
