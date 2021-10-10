import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsTabPage } from './films-tab.page';

const routes: Routes = [
  {
    path: '',
    component: FilmsTabPage,
  },
  {
    path: 'film-detail:filmId',
    loadChildren: () => import('../film-detail/film-detail.module').then( m => m.FilmDetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmTabPageRoutingModule {}
