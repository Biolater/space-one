import { FC } from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

type Social = {
  id: string;
  logo: JSX.Element;
  link: string;
};
const socials: Social[] = [
  {
    id: "icon1",
    logo: <FaGithub />,
    link: "https://github.com/Biolater",
  },
  {
    id: "icon2",
    logo: <FaLinkedin />,
    link: "https://www.linkedin.com/in/murad-yusubov-1518b1271/",
  },
  {
    id: "icon3",
    logo: <FaYoutube />,
    link: "https://www.youtube.com/channel/UC3_emsrXJoTSJBpTg7EezXg",
  },
];
const Footer: FC = () => {
  return (
    <footer id="footer" className="py-16">
      <div className="container py-3  text-white px-4 mx-auto">
        <a
          href="/"
          className="navbar-brand font-semibold tracking-wider font-secondary text-base cursor-pointer"
        >
          Space
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">
            One
          </span>
        </a>
        <div className="footer__items mt-4">
         <div className="footer__item">
            <ul>
              <li className="font-semibold text-lg mb-2">Help us to make Space Better</li>
              <li>We are group of people who constantly in try for connecting people together who has passion for space.</li>
            </ul>
          </div>
          <div className="footer__item">
            <ul className="flex flex-col gap-2 items-start" >
              <li className="font-semibold text-lg mb-2">Quick Links</li>
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">News</li>
              <li className="cursor-pointer">Articles</li>
              <li className="cursor-pointer">Forums</li>
            </ul>
          </div>
          <div className="footer__item">
            <ul className="flex flex-col gap-2 items-start">
              <li className="font-semibold text-lg mb-2">Useful Links</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Contact</li>
              <li className="cursor-pointer">Login</li>
              <li className="cursor-pointer">Sign up</li>
            </ul>
          </div>
          <div className="footer__item">
            <ul className="flex flex-col gap-2 items-start">
              <li className="font-semibold text-lg mb-2">Explore</li>
              <li className="cursor-pointer">Categories</li>
              <li className="cursor-pointer">Popular Tags</li>
              <li className="cursor-pointer">Recent Articles</li>
              <li className="cursor-pointer">Newsletter</li>
            </ul>
          </div>
          <div className="footer__item">
            <ul className="flex flex-col gap-2 items-start">
              <li className="font-semibold text-lg mb-2">Connect With Us</li>
              <li className="cursor-pointer">Follow on Social Media</li>
              <li className="cursor-pointer">Feedback</li>
              <li className="cursor-pointer">Support Center</li>
              <li className="cursor-pointer">Job Opportunities</li>
            </ul>
          </div>
        </div>
        <div className="footer__socials mt-6 mb-4 py-3">
          <p className="font-semibold text-center mb-2">Socials</p>
          <div className="flex gap-4 items-center justify-center">
            {socials.map((social: Social) => (
              <a
                target="_blank"
                className="text-4xl"
                href={social.link}
                key={social.id}
              >
                {social.logo}
              </a>
            ))}
          </div>
        </div>
        <div className="copyright text-center">
          <p>&copy; 2024 SpaceOne</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
