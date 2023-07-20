"use client";

import { useStore } from "@/app/(store)/store";

const Lst = (articles: any) => {
  const arr = useStore((store) => store.arr);
  if (!arr) return null;
  if (articles.length === 0) return null;
  const news = articles.articles;
  return (
    <div>
      <ul className="list-outside ml-10">
        {news.map(({ title }: any) => (
          <li key={title} className="py-2">
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lst;
