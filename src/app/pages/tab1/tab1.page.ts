import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { ArticlesResponse, Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  articles: Article[] = [];

  constructor(
    private readonly articlesService: ArticlesService,
  ) { }

  ngOnInit() {
    this.articlesService.getArticles().subscribe((res: ArticlesResponse) => {
      this.articles = res.articles;
    });
  }
}
