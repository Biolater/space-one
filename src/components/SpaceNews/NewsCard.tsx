import { FC } from "react";

const NewsCard: FC<{ img: string, title: string, description: string, link: string }> = ({ img, title, description, link }) => {
  return (
    <div className="news__card lg:max-w-4xl lg:mx-auto lg:flex  shadow-[rgba(0, 0, 0, 0.24), 0px 3px 8px;]">
      <div className="card__image max-w-full lg:flex lg:max-w-80">
        <img
          className="max-w-full w-full lg:w-80 lg:max-w-[unset] rounded-ss-2xl rounded-se-2xl lg:rounded-se-none lg:object-cover  lg:rounded-s-2xl"
          src={img}
        />
      </div>
      <div className="card__body bg-white rounded-es-2xl rounded-ee-2xl lg:rounded-es-none lg:rounded-se-2xl  px-3 py-6  text-black text-center lg:text-start lg:p-6 lg:flex lg:flex-col lg:justify-center">
        <h3 className="card__title text-2xl font-semibold">
            {title}
        </h3>
        <p className="card__description font-medium text-md">
            {description}
        </p>
        <a
          target="_blank"
          href={link}
        >
          <button className="p-[3px] mt-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"></div>
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              Learn more
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
