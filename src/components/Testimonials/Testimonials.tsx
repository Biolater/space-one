import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
}

export default function Testimonials() {
  const targetRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(
    window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3
  );
  const items: TestimonialItem[] = [
    {
      quote:
        "SpaceOne opened up a cosmic portal for me, making space exploration accessible and captivating. It's an awe-inspiring journey for every enthusiast.",
      name: "AstronomyExplorer23",
      title: "Stargazer",
    },
    {
      quote:
        "As a space enthusiast, SpaceOne is my daily escape to the wonders beyond our atmosphere. The articles are informative, and the community discussions are out of this world!",
      name: "GalacticDreamer",
      title: "Astrophile",
    },
    {
      quote:
        "The mission of SpaceOne resonates with my passion for space. It's not just a platform; it's a cosmic hub connecting like-minded individuals on a celestial adventure.",
      name: "StellarSeeker",
      title: "Cosmic Voyager",
    },
    {
      quote:
        "SpaceOne doesn't just share news; it crafts cosmic narratives. Engaging content, vibrant community, and a portal to explore the universe from the comfort of your screen.",
      name: "NebulaNomad",
      title: "Space Explorer",
    },
    {
      quote:
        "Embarking on a journey with SpaceOne is like having a spaceship for the mind. It broadens perspectives, educates, and fosters a sense of wonder about the cosmos.",
      name: "AstroAdventurer",
      title: "Space Traveler",
    },
    {
      quote:
        "SpaceOne is more than a platform; it's a celestial symphony of knowledge and community. A place where curiosity takes flight, and the cosmos becomes an open book.",
      name: "GalaxyQuester",
      title: "Star Scholar",
    },
    {
      quote:
        "SpaceOne is my cosmic sanctuary, where I indulge in the mysteries of the universe. The content is stellar, and the community feels like a close-knit galaxy of friends.",
      name: "CelestialNomad",
      title: "Starship Captain",
    },
    {
      quote:
        "Exploring the cosmos has never been this immersive. SpaceOne combines insightful articles with a vibrant community, creating a space-loving haven for enthusiasts.",
      name: "OrionObserver",
      title: "Nebula Enthusiast",
    },
    {
      quote:
        "SpaceOne is my launchpad to the unknown. It blends education with inspiration, making every visit a cosmic experience. A must-visit for anyone with a passion for the stars.",
      name: "AstroPioneer",
      title: "Galactic Explorer",
    },
    {
      quote:
        "SpaceOne is my daily dose of celestial wonders. The journey it provides goes beyond the stars, fostering a sense of belonging in a universe that's as vast as it is intriguing.",
      name: "NovaNavigator",
      title: "Cosmic Nomad",
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesPerView(1);
      } else if (width < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const pagination = {
    clickable: true,
  };

  return (
    <section id="testimonials">
      <div className="container relative px-4 py-16  justify-center mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="testimonials__heading text-4xl mb-12 text-white font-semibold text-center"
        >
          Testimonials
        </motion.h1>
        <motion.div
          ref={targetRef}
          initial={{ opacity: 0}}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileInView={{ opacity: 1 }}
          className="swiper__wrapper"
        >
          <Swiper
            pagination={pagination}
            slidesPerView={slidesPerView}
            modules={[Pagination]}
            spaceBetween={20}
            loop={true}
            className="mySwiper testimonials__slider flex gap-6 static"
          >
            {items.map((item) => (
              <SwiperSlide key={Math.random() * 1000}>
                <li className="text-white p-6  bg-black rounded-2xl shadow-lg flex flex-col gap-2">
                  <p className="name">{item.name}</p>
                  <p className="title">{item.title}</p>
                  <strong className="quote">{item.quote}</strong>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
