import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { ArticlesResponse, Article } from '../../interfaces/interfaces';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public articles: Article[] = [];

  constructor(
    private readonly articlesService: ArticlesService,
  ) { }

  ngOnInit() {
    this.getArticles();
  }

  public getArticles(): void {
    this.articlesService.getArticles().subscribe((res: ArticlesResponse) => {
      console.log(res);
      this.articles = [...this.articles, ...res.articles];
      this.infiniteScroll.complete();
      if (!res.articles.length) {
        this.infiniteScroll.disabled = true;
      }
    });
  }
}
