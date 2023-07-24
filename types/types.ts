export interface Article {
  title: string;
  author: string;
  publishedAt: string;
}

export interface ArticlesList {
  articles: Article[];
}
