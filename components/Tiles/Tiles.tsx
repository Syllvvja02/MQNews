"use client";

import { useStore } from "@/app/(store)/store";
import { Article, ArticlesList } from "@/types/types";
// import Tile from "./Tile";

const Tiles = (articles: ArticlesList) => {
  const arr = useStore((store) => store.arr);
  const setAmount = useStore((store) => store.setAmount);

  const news = articles.articles;
  setAmount(news.length);

  if (arr) return null;
  return (
    <div>
      <div className="grid grid-cols-5">
        {news.map(({ title, publishedAt }: Article) => (
          <div key={title}>
            <div className="relative m-4 p-2 border-2 border-violet-500 rounded-md h-56 w-56">
              <div>{title}</div>
              <div className="absolute bottom-1 right-1">
                {publishedAt.slice(0, 10)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tiles;
