import axios from "axios";
import { FC, useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Apod from "./Apod";
const apiKey: string = import.meta.env.VITE_GNEWS_API_KEY as string;

type NewsItem = {
  title: string;
  description: string;
  url: string;
  image: string;
};

const SpaceNews: FC = () => {
  const [news, setNews] = useState<Array<NewsItem>>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://gnews.io/api/v4/search?q=space+exploration&lang=en&max=5&apikey=${apiKey}`
        );
        const articles: NewsItem[] = response.data.articles;
        setNews(articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiKey]);

  return (
    <section id="news">
      <div
        className={`container px-4 mx-auto py-16 ${
          loading && "flex flex-col items-center"
        }`}
      >
        <h1 className="news__heading text-4xl mb-12 text-white font-semibold text-center">
          Learn more about space
        </h1>
        {loading && (
          <div className="rays flex items-center after:w-40 after:h-40 justify-center"></div>
        )}
        {!loading && (
          <>
            <div className="news flex flex-col gap-6">
              {news.map((item, idx) => (
                <NewsCard
                  key={idx}
                  title={item.title}
                  description={item.description}
                  img={item.image}
                  link={item.url}
                />
              ))}
            </div>
            <Apod />
          </>
        )}
      </div>
    </section>
  );
};

export default SpaceNews;
