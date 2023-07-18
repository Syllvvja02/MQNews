import { useStore } from "@/app/(store)/store";

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
  const arr = useStore((store) => store.arr);

  const articles = news.articles;
  return (
    <div className="content-center px-20 m-20">
      Choosen country is: {params.id}
      <div>
        <ul>
          {articles
            ? articles.map(({ title }: any) => <li key={title}>{title}</li>)
            : null}
        </ul>
      </div>
    </div>
  );
};

export default Country;