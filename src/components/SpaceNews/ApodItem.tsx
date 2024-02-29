import { useEffect, useState } from "react";

type Apod = {
  date: string;
  explanation: string;
  media_type?: string;
  service_version?: string;
  title: string;
  url: string;
};

const ApodItem = ({ date, explanation, title, url }: Apod) => {
  const [shortenedVersion, setShortenedVersion] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setShortenedVersion(
      explanation
        .split("")
        .filter((_, idx) =>  isVisible ? idx < explanation.split("").length : idx <  250)
        .join("")
    );
  }, [explanation, isVisible]);
  return (
    <div className="text-white text-center font-medium text-xl">
      <pre className="mb-2">{date}</pre>
      <p className="mb-4">{title}</p>
      <embed className="w-full object-cover rounded-lg shadow-2xl h-96 mb-4" src={url} type="" />
      <p>
        {shortenedVersion.length > 0 && shortenedVersion}
        <br />
        <span
          onClick={() => setIsVisible((prev) => !prev)}
          className="mt-3 block cursor-pointer text-md text-[#777]"
        >
         {isVisible ? " Click here to hide" : " Click here to see more"}
        </span>
      </p>
    </div>
  );
};

export default ApodItem;
