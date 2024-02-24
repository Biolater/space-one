import axios from "axios";
import { FC, useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const apiKey = import.meta.env.VITE_GNEWS_API_KEY as string;

type NewsItem = {
  title: string;
  description: string;
  url: string;
  image: string;
};

const SpaceNews: FC = () => {
  const [news, setNews] = useState<Array<NewsItem>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://gnews.io/api/v4/search?q=space+exploration&lang=en&max=5&apikey=${apiKey}`
        );

        const articles: NewsItem[] = response.data.articles;
         
        setNews(articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    console.log(news);
    fetchData();
  }, [apiKey]); 

  return (
    <section id="news">
      <div className="container px-4 mx-auto py-16">
        <h1 className="news__heading text-4xl mb-12 text-white font-semibold text-center">
          Learn more about space
        </h1>
        <div className="news flex flex-col gap-6">
          {/* Map through the news array and render NewsCard components */}
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
      </div>
    </section>
  );
};

export default SpaceNews;
