import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonSegment } from '@ionic/angular';
import { Article } from 'src/app/interfaces/interfaces';
import { ArticlesService } from '../../services/articles.service';
import { ArticlesResponse } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit {
  @ViewChild(IonSegment) segment: IonSegment;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public articles: Article[] = [];

  private selectedCategory: string;

  private readonly categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ];

  constructor(
    private readonly articlesService: ArticlesService
  ) { }

  ngAfterViewInit() {
    this.selectedCategory = this.categories[0];
    this.segment.value = this.selectedCategory;
    this.getArticlesByCategory();
  }

  public onSegmentChange(evt: CustomEvent) {
    this.articles = [];
    this.articlesService.resetPage();
    this.selectedCategory = evt.detail.value;
    this.getArticlesByCategory();
  }

  private getArticlesByCategory(): void {
    this.articlesService.getArticlesByCategory(this.selectedCategory).subscribe((res: ArticlesResponse) => {
      this.articles = [...this.articles, ...res.articles];
      this.infiniteScroll.complete();
      if (!res.articles.length) {
        this.infiniteScroll.disabled = true;
      }
    });
  }
}
