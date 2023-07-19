const getNews = async ({ id }: any, setNews: Function) => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${id}&apiKey=b1c4ac6fc9a84967b2c3c7092e03db3a`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (res.ok) {
    console.log(res.json());
  }
  const news = await res.json();
  console.log(res.json());
  setNews(news);

  return res.json();
};

export default getNews;
