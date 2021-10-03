import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'films',
        loadChildren: () => import('../films-tab/films-tab.module').then(m => m.FilmsTabPageModule)
      },
      {
        path: 'film-genres',
        loadChildren: () => import('../film-genres-tab/film-genres-tab.module').then(m => m.FilmGenresTabPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/films',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/films',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
