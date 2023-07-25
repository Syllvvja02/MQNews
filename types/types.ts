export interface Article {
  title: string;
  author: string;
  publishedAt: string;
  close: Function;
}

export interface ArticlesList {
  articles: Article[];
}
