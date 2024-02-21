const Hero = () => {
  return (
    <section className="pt-[72px] bg-fixed" id="hero">
      <div className="container relative z-10 bg flex flex-col gap-2 justify-center items-center h-[calc(100vh-72px)] mx-auto px-4">
        <h1 className="hero__title text-center text-4xl font-bold  items-center gap-2 text-white">
          Embark on a Cosmic Journey with 
          <span className="font-secondary ms-2">
            Space
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">
              One
            </span>
          </span>
        </h1>
        <h2 className="hero__description text-center mt-3 md:mt-5 md:max-w-3xl text-2xl text-white font-semibold">Discover the Wonders of the <span className="text-transparent bg-clip-text bg-gradient-to-r font-bold from-cyan-600 via-cyan-400 to-cyan-200">Universe</span>, Engage with Fellow <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-600 to-teal-400 font-bold
">Space Enthusiasts</span>, and Stay Updated on the Latest Celestial Adventures.</h2>
      </div>
    </section>
  );
};

export default Hero;
