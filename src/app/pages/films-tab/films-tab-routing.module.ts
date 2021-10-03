import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsTabPage } from './films-tab.page';

const routes: Routes = [
  {
    path: '',
    component: FilmsTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmTabPageRoutingModule {}
