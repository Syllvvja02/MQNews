"use client";

import { useStore } from "@/app/(store)/store";
import { MdArticle } from "react-icons/md";

const Lst = (articles: any) => {
  const arr = useStore((store) => store.arr);
  console.log(articles.lenght);
  if (!arr) return null;
  if (articles.length === 0) return null;
  const news = articles.articles;
  return (
    <div>
      <ul className="list-outside ml-10">
        {news.map(({ title, author }: any) => (
          <li key={title} className="py-2 flex items-center">
            <span>
              <MdArticle size={15} />
            </span>
            {title}
            <div className="">Im a popup of news {author}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lst;
