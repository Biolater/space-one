import { useState, useEffect } from "react";
import ApodItem from "./ApodItem";
import axios from "axios";
type Apod = {
  date: string;
  explanation: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};
const nasaApiKey: string = import.meta.env.VITE_NASA_API_KEY;

const Apod = () => {
  const [nasaApod, setNasaApod] = useState<Apod>();
  useEffect(() => {
    const fetchData = async () => {
      const response: Apod = (
        await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`
        )
      ).data;
      setNasaApod(response);
    };
    fetchData();

    const intervalId = setInterval(fetchData, 24 * 60 * 60 * 1000);
    return () => clearInterval(intervalId)
  }, []);
  return (
    <div className="apod mt-12  lg:max-w-4xl lg:mx-auto">
      <p className="apod__heading text-4xl mb-12 text-white font-semibold text-center">
        Astronomy Picture Of The Day
      </p>
      <aside className="apod__content">
        {nasaApod && (
          <ApodItem
            date={nasaApod?.date}
            explanation={nasaApod?.explanation}
            title={nasaApod?.title}
            url={nasaApod?.url}
          />
        )}
      </aside>
    </div>
  );
};

export default Apod;
