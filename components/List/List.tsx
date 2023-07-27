"use client";

import { useStore } from "@/app/(store)/store";
import { MdArticle } from "react-icons/md";

import { useState } from "react";

import Modal from "../Modal/Modal";
import { Article, ArticlesList } from "@/types/types";

const Lst = (articles: ArticlesList) => {
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
    setShow(false);
    setData({
      title: title,
      author: author,
      publishedAt: publishedAt,
    });
    console.log(data);
  };
  const cls = () => {
    setShow(true);
  };

  if (!arr) return null;

  return (
    <div>
      <ul className="list-outside ml-10">
        {news.map(({ title, author, publishedAt }: Article) => (
          <li
            key={title}
            className="py-2 flex items-center"
            onClick={() =>
              sT({
                title: title,
                author: author,
                publishedAt: publishedAt,
              })
            }
          >
            <span className="mr-4">
              <MdArticle size={15} />
            </span>
            {title}
          </li>
        ))}
      </ul>

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

export default Lst;
