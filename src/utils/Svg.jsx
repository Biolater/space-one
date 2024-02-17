const HamburgerIcon = ({ isClicked }) => {
  return (
    <>
      <span
        className={`line relative  ${
          isClicked ? "rotate-[315deg] top-[11px]" : "top-0"
        }`}
      ></span>
      <span className={`line ${isClicked ? "opacity-0" : ""}`}></span>
      <span
        className={`line relative  ${
          isClicked ? "rotate-[-315deg] top-[-11px]" : "bottom-0"
        }`}
      ></span>
    </>
  );
};

const SearchIcon = () => {
  return (
    <svg
      width="31"
      height="32"
      viewBox="0 0 31 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3002 25.7261C19.3891 25.7261 24.3251 20.6387 24.3251 14.363C24.3251 8.0874 19.3891 3 13.3002 3C7.21138 3 2.27539 8.0874 2.27539 14.363C2.27539 20.6387 7.21138 25.7261 13.3002 25.7261Z"
        stroke="white"
        strokeWidth="4.38241"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5688 22.8853L28 29.5137"
        stroke="white"
        strokeWidth="4.38241"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="2"
        y1="-2"
        x2="35.6957"
        y2="-2"
        transform="matrix(0.711836 -0.702345 0.711837 0.702345 3.16699 28.4949)"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="2"
        y1="-2"
        x2="35.6957"
        y2="-2"
        transform="matrix(0.711837 0.702345 -0.711836 0.702345 0.833496 2.01904)"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export { HamburgerIcon, SearchIcon, CloseIcon };
