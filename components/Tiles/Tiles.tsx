"use client";

import { useStore } from "@/app/(store)/store";
import { Article, ArticlesList } from "@/types/types";

import { useState } from "react";

import Modal from "../Modal/Modal";

const Tiles = (articles: ArticlesList) => {
  const [show, setShow] = useState<boolean>(true);
  const [data, setData] = useState<Article>({
    title: "",
    author: "",
    publishedAt: "",
  });

  const arr = useStore((store) => store.arr);
  const setAmount = useStore((store) => store.setAmount);

  const news = articles.articles;
  setAmount(news.length);

  const s = show ? "hidden" : "";

  const sT = ({ title, author, publishedAt }: Article) => {
    setShow(!show);
    setData({
      title: title,
      author: author,
      publishedAt: publishedAt,
    });
  };
  const cls = () => {
    setShow(true);
  };

  if (arr) return null;
  return (
    <div>
      <div className="grid grid-cols-5">
        {news.map(({ title, author, publishedAt }: Article) => (
          <div
            key={title}
            onClick={() =>
              sT({
                title: title,
                author: author,
                publishedAt: publishedAt,
              })
            }
          >
            <div className="relative m-4 p-2 border-2 border-violet-500 rounded-md h-56 w-56">
              <div>{title}</div>
              <div className="absolute bottom-1 right-1">
                {publishedAt.slice(0, 10)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`${s}`}>
        <Modal
          title={data.title}
          author={data.author}
          publishedAt={data.publishedAt}
          close={cls}
        />
      </div>
    </div>
  );
};

export default Tiles;
