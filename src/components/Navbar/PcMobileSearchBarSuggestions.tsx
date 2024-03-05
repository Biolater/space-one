import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useSearchBarContext } from "../SearchBarContext";
import axios from "axios";
import CardActionArea from "@mui/material/CardActionArea";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
export default function PcMobileSearchBarSuggestions() {
  const [suggestions, setSuggestions] = useState<object[]>([]);
  const [noResult, setNoResult] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { searchQuery } = useSearchBarContext();
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [isEnabledLayer, setIsEnabledLayer] = useState<boolean>(false);
  if (searchQuery.length > 0) {
    setTimeout(() => {
      setIsEnabled(true);
      setIsEnabledLayer(true);
    }, 100);
  } else {
    setTimeout(() => {
      setIsEnabled(false);
      setTimeout(() => {
        setIsEnabledLayer(false);
      }, 100);
    }, 100);
  }
  useEffect(() => {
    setNoResult(false);
    let timeOut: NodeJS.Timeout;
    const endPoint = `https://images-api.nasa.gov/search?q=${searchQuery}`;
    const fetchData = async () => {
      try {
        const response = await (
          await axios.get(endPoint)
        ).data.collection.items;
        console.log(response);
        setSuggestions(response);
        if (response.length === 0) {
          setNoResult(true);
        } else {
          setNoResult(false);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (searchQuery.length > 0) {
      setLoading(true);
      timeOut = setTimeout(async () => {
        await fetchData();
      }, 500);
    } else {
      setSuggestions([]);
      setNoResult(false);
      setLoading(false);
    }
    return () => clearTimeout(timeOut);
  }, [searchQuery]);
  return (
    <div
      className={`layer   transition-all fixed top-0 w-full h-screen ${
        isEnabledLayer ? "backdrop-blur-sm z-20" : "-z-20"
      }`}
    >
      <div
        className={`search__results  top-[72px] w-full flex items-center  fixed  z-20 ${
          isEnabled ? `h-[440px]` : "h-0"
        } bg-primary`}
      >
        <div className="container px-4 mx-auto">
          {loading && (
            <p
              className={`text-white transition-opacity duration-300 ${
                isEnabled ? "opacity-100" : "opacity-0"
              } text-5xl`}
            >
              Loading...
            </p>
          )}
          {noResult && (
            <p
              className={`text-white transition-opacity duration-300 ${
                isEnabled ? "opacity-100" : "opacity-0"
              } text-5xl`}
            >
              No results found
            </p>
          )}
          {suggestions.length > 0 && !loading && (
            <Swiper slidesPerView={3} spaceBetween={20}>
              {suggestions.map((suggestion: any, index: number) => (
                <SwiperSlide key={index}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          sx={{ fontFamily: "Montserrat", fontWeight: 700 }}
                          gutterBottom
                          variant="body1"
                          component="div"
                        >
                          {suggestion.data[0].title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}
