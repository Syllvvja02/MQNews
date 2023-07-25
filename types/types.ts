export interface Article {
  title: string;
  author: string;
  publishedAt: string;
}

export interface ArticlesList {
  articles: Article[];
}

export interface ModalData {
  title: string;
  author: string;
  publishedAt: string;
  close: Function;
}
