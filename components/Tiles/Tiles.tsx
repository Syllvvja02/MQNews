"use client";

import { useStore } from "@/app/(store)/store";
// import Tile from "./Tile";

const Tiles = (articles: any) => {
  const arr = useStore((store) => store.arr);
  const news = articles.articles;
  console.log("News", news[0]);
  console.log("Typeof News", typeof news);
  if (arr) return null;
  return (
    <div>
      <div className="grid grid-cols-5">
        {news.map(({ title, publishedAt }: any) => (
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
