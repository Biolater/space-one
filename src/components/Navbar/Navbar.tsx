import { FC, ReactNode, useState, useEffect } from "react";
// @ts-ignore
import { HamburgerIcon, SearchIcon, CloseIcon } from "../../utils/Svg";
import { useNavigate } from "react-router";

// Navbar Component
const Navbar: FC = () => {
  const navigate = useNavigate();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState<boolean>(false);

  const handleSearchMenuToggle = () => {
    setIsSearchMenuOpen((prev) => !prev);
    setIsMobileNavOpen(false);
  };

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen((prev) => !prev);
    setIsSearchMenuOpen(false);
  };

  useEffect(() => {
    let currentWidth = window.innerWidth;
    const handleResize = () => {
      if (currentWidth > 1023) {
        setIsMobileNavOpen(false);
      }
      currentWidth = window.innerWidth;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    document.body.style.overflow = isMobileNavOpen ? "hidden" : "auto";
  }, [isMobileNavOpen]);

  return (
    <header
      className={`text-white fixed w-full ${
        !isMobileNavOpen ? "overflow-hidden" : ""
      }`}
    >
      <nav className="navbar relative">
        <div className="container flex items-center justify-between mx-auto px-4 py-5">
          {/* Mobile Navigation Toggle Button */}
          <button
            onClick={handleMobileNavToggle}
            className="navbar__toggleButton lg:hidden flex flex-col gap-2 cursor-pointer"
            title="Toggle Navigation Menu"
          >
            <HamburgerIcon isClicked={isMobileNavOpen} />
          </button>

          {/* Logo */}
          <a
            href="/"
            className="navbar-brand font-semibold tracking-wider font-secondary text-base cursor-pointer"
          >
            SpaceOne
          </a>

          {/* Mobile Navigation */}
          <ul
            className={`mobile__navbarNav left-1/2 -translate-x-1/2 container mx-auto transition-opacity duration-300 ${
              isMobileNavOpen
                ? "opacity-1 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            } flex-col gap-4 w-full flex left-0 px-4 absolute top-20`}
          >
            <NavbarItem>Home</NavbarItem>
            <NavbarItem onClick={handleMobileNavToggle}>News</NavbarItem>
            <NavbarItem onClick={handleMobileNavToggle}>Articles</NavbarItem>
            <NavbarItem onClick={handleMobileNavToggle}>Forums</NavbarItem>
            <NavbarItem onClick={handleMobileNavToggle}>About Us</NavbarItem>
            <NavbarItem onClick={handleMobileNavToggle}>Contact</NavbarItem>
            <NavbarItem
              onClick={() => {
                navigate("/login") 
                setIsMobileNavOpen(false);
              }}
            >
              Login
            </NavbarItem>
            <NavbarItem
              onClick={() => {
                navigate("/signup") 
                setIsMobileNavOpen(false);
              }}
            >
              Sign Up
            </NavbarItem>
          </ul>

          {/* Desktop Navigation */}
          <ul className="navbar-nav hidden lg:flex gap-3">
            <NavbarItem>Home</NavbarItem>
            <NavbarItem>News</NavbarItem>
            <NavbarItem>Articles</NavbarItem>
            <NavbarItem>Forums</NavbarItem>
            <NavbarItem>About Us</NavbarItem>
            <NavbarItem>Contact</NavbarItem>
          </ul>

          {/* Auth Section */}
          <div className="navbar__auth hidden lg:flex items-center list-none gap-3">
            <input
              placeholder="Search"
              type="text"
              className="h-8 focus:outline-cyan-600 w-40 px-3 outline-none border-2 rounded border-gray-700 bg-transparent"
              name=""
              id="search-input"
            />
            <NavbarItem onClick={() => navigate("/login")}>Login</NavbarItem>
            <NavbarItem onClick={() => navigate("/signup")}>Sign Up</NavbarItem>
          </div>

          {/* Search Icon for Mobile */}
          <div
            onClick={handleSearchMenuToggle}
            className="navbar__search lg:hidden flex"
          >
            <button title="Search for something" className="search-icon">
              <SearchIcon />
            </button>
          </div>

          {/* Search Menu for Mobile */}
          <div
            className={`search__menu lg:hidden absolute gap-4 duration-500 flex items-center px-4 py-5 bg-primary w-full transition-all ${
              isSearchMenuOpen ? "right-0" : "right-screenvw"
            }`}
          >
            <button title="Search" className="search-icon">
              <SearchIcon />
            </button>
            <input
              className="w-full bg-transparent focus:outline-cyan-600 outline-none"
              placeholder="Explore the Space"
              type="text"
              name=""
              id="SearchInput"
            />
            <button
              title="Close Search Menu"
              onClick={handleSearchMenuToggle}
              className="search-icon lg:hidden"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

// NavbarItem Component
interface NavbarItemProps {
  children: ReactNode;
  onClick?: () => void;
}

const NavbarItem: FC<NavbarItemProps> = ({ children, onClick }) => (
  <li className="nav-item py-2 font-primary">
    <a onClick={onClick} className="nav-link cursor-pointer hover:border-b hover:border-dashed">
      {children}
    </a>
  </li>
);


export default Navbar;
