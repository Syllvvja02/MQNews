"use client";

import { useStore } from "@/app/(store)/store";
import Tile from "./Tile";

const Tiles = (articles: any) => {
  const arr = useStore((store) => store.arr);
  const news = articles.articles;
  if (arr) return null;
  return (
    <div>
      Tiles
      <div className="grid grid-cols-5">
        {news.map(({ title }: any) => (
          <div key={title}>
            <Tile title={title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tiles;
