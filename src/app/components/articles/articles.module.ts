import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { ArticleModule } from '../article/article.module';

@NgModule({
  declarations: [ArticlesComponent],
  imports: [
    CommonModule,
    ArticleModule,
  ],
  exports: [ArticlesComponent]
})
export class ArticlesModule { }
