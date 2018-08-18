import {Component, OnInit} from '@angular/core';
import {ArticleSummaryQueryCondition, ArticleSummaryService} from '../../service/article-summary.service';
import {ArticleSummary} from '../../vo/article-summary';
import {ArticleSummaryCard} from '../../vo/ui/article-summary-card';

@Component({
  selector: 'nwen-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mostRecentArticleSummaryCards: ArticleSummaryCard[];
  mostPopularArticleSummaryCard: ArticleSummaryCard;

  private static wrapArticleSummaryToCard(summary: ArticleSummary): ArticleSummaryCard {
    const result = new ArticleSummaryCard();
    result.summary = summary;
    return result;
  }

  constructor(private articleSummaryService: ArticleSummaryService) {
    this.mostRecentArticleSummaryCards = null;
    this.mostPopularArticleSummaryCard = null;
  }

  ngOnInit() {
    const mostRecentArticleSummariesQueryCondition = new ArticleSummaryQueryCondition();
    mostRecentArticleSummariesQueryCondition.resultNumber = 6;
    const mostRecentArticleSummaries = this.articleSummaryService.query(mostRecentArticleSummariesQueryCondition);
    this.mostRecentArticleSummaryCards = mostRecentArticleSummaries.map(summary =>
      HomeComponent.wrapArticleSummaryToCard(summary)
    );
    const mostPopularArticleSummariesQueryCondition = new ArticleSummaryQueryCondition();
    mostPopularArticleSummariesQueryCondition.resultNumber = 1;
    const mostPopularArticleSummaries = this.articleSummaryService.query(mostPopularArticleSummariesQueryCondition);
    this.mostPopularArticleSummaryCard = mostPopularArticleSummaries.map(summary => {
      const result = HomeComponent.wrapArticleSummaryToCard(summary);
      result.useCoverImageFilter = false;
      return result;
    })[0];
  }
}
