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
  // const arr = useStore((store: StoreApi<unknown>) => store.arr);
  const news = await getNews(params);

  const articles = news.articles;
  return (
    <div>
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
