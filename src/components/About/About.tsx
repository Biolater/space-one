import SpaceImg from "../../assets/spaceimg.jpg";
import { motion } from "framer-motion"; 
const About = () => {
  return (
    <section id="about">
      <div className="container px-4 py-16 mx-auto">
        <motion.h1
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        viewport={{once: true}}
        whileInView={{ opacity: 1, y: 0 }}
         className="about__heading text-4xl mb-12 text-white font-semibold text-center">
          About{" "}
          <a
            href="/"
            className="text-3xl navbar-brand font-semibold tracking-wider font-secondary cursor-pointer"
          >
            Space
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">
              One
            </span>
          </a>
        </motion.h1>
        <div className="about__wrapper lg:items-center flex flex-col lg:flex-row gap-5 md:gap-7">
          <div className="left lg:grow basis-1/2">
            <img
              src={SpaceImg}
              alt="About SpaceOne"
              className="about__img max-h-[700px] lg:max-h-full w-full object-cover mx-auto rounded-md"
            />
          </div>
          <div className="right lg:grow basis-1/2 text-center lg:text-start">
            <p className="about__title text-2xl font-semibold md:text-3xl lg:text-4xl lg:leading-[40px!important] text-white">
              Explore the Cosmos with SpaceOne.
            </p>
            <p className="about__description mt-4 text-lg text-white font-medium">
              At SpaceOne, we're not just stargazers; we're cosmic enthusiasts
              on a mission. Join us as we embark on a celestial journey,
              unveiling the mysteries of the universe through captivating
              experiences and shared wonder.
            </p>
            <div className="about__cta mt-8 l">
              <p className="text-white font-medium text-2xl mb-4">
                Ready to join the cosmic adventure?
              </p>
              <a href="/signup" className="button-link">
                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                    Sign up Now!
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
