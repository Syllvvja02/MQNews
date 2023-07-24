import { useStore } from "@/app/(store)/store";
import Lst from "../../../components/List/List";
import Tiles from "@/components/Tiles/Tiles";

import NEXT_API_KEY from "../../../env.locale";

const getNews = async ({ id }: any) => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${id}&apiKey=${NEXT_API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.json();
};

const Country = async ({ params }: any) => {
  const news = await getNews(params);

  const articles = news.articles;
  console.log(articles);
  useStore.setState({ amount: articles.length });

  if (articles.length === 0) return null;

  return (
    <div className="content-center m-20">
      <div>
        <Lst articles={articles} />
        <Tiles articles={articles} />
      </div>
    </div>
  );
};

export default Country;
