import { FC } from "react";

const NewsCard: FC<{ img: string, title: string, description: string, link: string }> = ({ img, title, description, link }) => {
  return (
    <div className="news__card  shadow-[rgba(0, 0, 0, 0.24), 0px 3px 8px;]">
      <div className="card__image max-w-full">
        <img
          className="max-w-full w-full rounded-ss-2xl rounded-se-2xl"
          src={img}
        />
      </div>
      <div className="card__body bg-white rounded-es-2xl rounded-ee-2xl px-3 py-6  text-black text-center">
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
