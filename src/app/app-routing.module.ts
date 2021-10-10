import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'film-detail/:filmId',
    loadChildren: () => import('./pages/film-detail/film-detail.module').then( m => m.FilmDetailPageModule)
  },
  {
    path: 'management',
    loadChildren: () => import('./pages/management/management.module').then( m => m.ManagementPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
