"use client";

import { useStore } from "@/app/(store)/store";
import { MdArticle } from "react-icons/md";

import { useState } from "react";

import Modal from "../Modal/Modal";

const Lst = (articles: any) => {
  const [show, setShow] = useState(true);

  const arr = useStore((store) => store.arr);
  const setAmount = useStore((store) => store.setAmount);

  const news = articles.articles;
  setAmount(news.length);
  console.log(news.length);

  const s = show ? "hidden" : "";
  const sT = () => {
    setShow(!show);
  };

  if (!arr) return null;
  if (news === 0) return null;

  return (
    <div>
      <ul className="list-outside ml-10">
        {news.map(({ title, author }: any) => (
          <li key={title} className="py-2 flex items-center" onClick={sT}>
            <span className="mr-4">
              <MdArticle size={15} />
            </span>
            {title}
          </li>
        ))}
      </ul>
      {/* <div className={`${s}`}>
        <Modal title="Anyway" author="Gal Anonim" />
      </div> */}
    </div>
  );
};

export default Lst;
