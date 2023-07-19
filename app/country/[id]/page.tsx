import { useStore } from "@/app/(store)/store";
import Lst from "../../../components/List/List";
import Tiles from "@/components/Tiles/Tiles";

const getNews = async ({ id }: any) => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${id}&apiKey=b1c4ac6fc9a84967b2c3c7092e03db3a`,
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
  console.log("Komponent Country mówi, ze:", typeof articles);
  console.log(articles.length);

  if (articles.length === 0) return null;

  return (
    <div className="content-center px-20 m-20">
      Choosen country is: {params.id}
      <div>
        <Lst articles={articles} />
        <Tiles articles={articles} />
      </div>
    </div>
  );
};

export default Country;
