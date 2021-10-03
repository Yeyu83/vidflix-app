import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmGenresTabPage } from './film-genres-tab.page';

const routes: Routes = [
  {
    path: '',
    component: FilmGenresTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmGenresTabPageRoutingModule {}
