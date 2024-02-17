import { FC, ReactNode, useState, useEffect } from "react";
// @ts-ignore
import { HamburgerIcon, SearchIcon, CloseIcon } from "../../utils/Svg";

const Navbar: FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState<boolean>(false);
  const handleSearchMenuToggle: () => void = () => {
    setIsSearchMenuOpen((prev) => !prev);
    setIsMobileNavOpen(false);
  };
  const handleMobileNavToggle: () => void = () => {
    setIsMobileNavOpen((prev) => !prev);
    setIsSearchMenuOpen(false);
  };
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileNavOpen]);
  return (
    <header
      className={`text-white relative ${
        !isMobileNavOpen ? "overflow-hidden" : ""
      }`}
    >
      <nav className="navbar">
        <div className="container flex items-center justify-between mx-auto px-4 py-5">
          <button
            onClick={handleMobileNavToggle}
            className="navbar__toggleButton flex flex-col gap-2 cursor-pointer"
          >
            <HamburgerIcon isClicked={isMobileNavOpen} />
          </button>
          <a
            href="/"
            className="navbar-brand font-secondary text-base cursor-pointer"
          >
            SpaceOne
          </a>
          <ul
            className={`mobile__navbarNav transition-opacity duration-300 ${
              isMobileNavOpen
                ? "opacity-1 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            } flex-col gap-4 w-full flex left-0 px-4 absolute top-20`}
          >
            <NavbarItem>Home</NavbarItem>
            <NavbarItem>News</NavbarItem>
            <NavbarItem>Articles</NavbarItem>
            <NavbarItem>Forums</NavbarItem>
            <NavbarItem>About Us</NavbarItem>
            <NavbarItem>Contact</NavbarItem>
            <NavbarItem>Login</NavbarItem>
            <NavbarItem>Sign Up</NavbarItem>
          </ul>
          <div onClick={handleSearchMenuToggle} className="navbar__search flex">
            <button className="search-icon">
              <SearchIcon />
            </button>
          </div>
          <div
            className={`search__menu absolute gap-4 duration-500 flex items-center px-4 py-5 bg-primary w-full transition-all ${
              isSearchMenuOpen ? "right-0" : "right-screenvw"
            }`}
          >
            <button className="search-icon">
              <SearchIcon />
            </button>
            <input
              className="w-full bg-transparent outline-none"
              placeholder="Explore the Space"
              type="text"
              name=""
              id=""
            />
            <button onClick={handleSearchMenuToggle} className="search-icon">
              <CloseIcon />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

interface NavbarItemProps {
  children: ReactNode;
}

const NavbarItem: FC<NavbarItemProps> = ({ children }) => (
  <li className="nav-item py-2 font-secondary">
    <a href="#" className="nav-link hover:border-b hover:border-dashed">
      {children}
    </a>
  </li>
);

export default Navbar;
