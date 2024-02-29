import { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
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
      <motion.p
      initial={{ opacity: 0, y:30 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
       className="apod__heading text-4xl mb-12 text-white font-semibold text-center">
        Astronomy Picture Of The Day
      </motion.p>
      <motion.aside 
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      whileInView={{ opacity: 1, y: 0 }}
        className="apod__content">
        {nasaApod && (
          <ApodItem
            date={nasaApod?.date}
            explanation={nasaApod?.explanation}
            title={nasaApod?.title}
            url={nasaApod?.url}
          />
        )}
      </motion.aside>
    </div>
  );
};

export default Apod;
