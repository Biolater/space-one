import { FC, ReactNode, useState, useEffect } from "react";
import { SearchBar, MobileSearchBar } from "./SearchBar";
// @ts-ignore
import { HamburgerIcon, SearchIcon, CloseIcon } from "../../utils/Svg";
import { useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
// @ts-ignore
import { auth } from "../../firebase";
import { SearchBarProvider } from "../SearchBarContext";
// Navbar Component
const Navbar: FC = () => {
  const navigate = useNavigate();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  // @ts-ignore
  const [currentUser, setCurrentUser] = useState<string>("");
  const [currentUserImage, setCurrentUserImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setCurrentUser(user?.displayName || "");
        setCurrentUserImage(
          user?.photoURL ||
            "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_1280.png"
        );
      } else {
        setIsLoggedIn(false);
        if (localStorage.getItem("justLoggedOut") === "true") {
          alert("You have been logged out");
          localStorage.removeItem("justLoggedOut");
        }
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => { 
    const handleResize = () => {
      const currentScreenWidth = window.innerWidth;
      if(currentScreenWidth > 1023) {
        setIsSearchMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); 
}, []); 

  const handleSearchMenuToggle = () => {
    setIsSearchMenuOpen((prev) => !prev);
    setIsMobileNavOpen(false);
  };

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen((prev) => !prev);
    setIsSearchMenuOpen(false);
  };

  const handleLogOut = () => {
    auth.signOut();
    localStorage.setItem("justLoggedOut", "true");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const handleResize = () => {
      let currentWidth = window.innerWidth;
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
      className={`text-white z-50 ${isSearchMenuOpen && "max-h-screen h-screen overflow-x-hidden overflow-y-auto"}  transition-all bg-primary   fixed w-full ${
        !isMobileNavOpen
          ? "overflow-hidden h-18"
          : "max-h-screen h-screen overflow-x-hidden overflow-y-auto"
      }`}
    >
      <nav className="navbar bg-primary relative">
        <div className="container h-18 flex items-center justify-between mx-auto px-4 py-5 lg:p-3">
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
            Space
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">
              One
            </span>
          </a>

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
              <SearchBarProvider>
                <SearchBar />
              </SearchBarProvider>
            {isLoading ? (
              <div className="rays flex items-center justify-center"></div>
            ) : !isLoggedIn ? (
              <>
                <NavbarItem
                  onClick={() => {
                    navigate("/login");
                    setIsMobileNavOpen(false);
                  }}
                >
                  Login
                </NavbarItem>
                <NavbarItem
                  onClick={() => {
                    navigate("/signup");
                    setIsMobileNavOpen(false);
                  }}
                >
                  Sign Up
                </NavbarItem>
              </>
            ) : (
              <>
                <NavbarItem
                  onClick={() => {
                    handleLogOut();
                    navigate("/login");
                  }}
                >
                  Logout
                </NavbarItem>
                <NavbarItem onClick={() => {
                  navigate("/dashboard");
                  setIsMobileNavOpen(false);
                }}>
                  <img
                    className="w-12 h-12 object-cover rounded-full profile-pic relative"
                    src={currentUserImage}
                    title="View account"
                    alt="user profile"
                  />
                </NavbarItem>
              </>
            )}
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
          <MobileSearchBar isSearchMenuOpen={isSearchMenuOpen} handleSearchMenuToggle={handleSearchMenuToggle} />
        </div>
      </nav>
      {/* Mobile Navigation */}
      <ul
        className={`mobile__navbarNav  py-4 lg:py-0 bg-primary container mx-auto transition-opacity duration-300 ${
          isMobileNavOpen
            ? "opacity-1 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } flex-col gap-4 w-full flex left-0 px-4 relative items-start`}
      >
        <NavbarItem>Home</NavbarItem>
        <NavbarItem onClick={handleMobileNavToggle}>News</NavbarItem>
        <NavbarItem onClick={handleMobileNavToggle}>Articles</NavbarItem>
        <NavbarItem onClick={handleMobileNavToggle}>Forums</NavbarItem>
        <NavbarItem onClick={handleMobileNavToggle}>About Us</NavbarItem>
        <NavbarItem onClick={handleMobileNavToggle}>Contact</NavbarItem>
        {!isLoggedIn ? (
          <>
            <NavbarItem
              onClick={() => {
                navigate("/login");
                setIsMobileNavOpen(false);
              }}
            >
              Login
            </NavbarItem>
            <NavbarItem
              onClick={() => {
                navigate("/signup");
                setIsMobileNavOpen(false);
              }}
            >
              Sign Up
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem
              onClick={() => {
                handleLogOut();
                setIsMobileNavOpen(false);
              }}
            >
              Logout
            </NavbarItem>
            <NavbarItem onClick={() => {
              navigate("/dashboard");
              setIsMobileNavOpen(false);
            }}>
              <img
                className="w-20 h-20  object-cover rounded-full profile"
                src={currentUserImage}
                title="View account"
                alt="user profile"
              />
            </NavbarItem>
          </>
        )}
      </ul>
    </header>
  );
};

// NavbarItem Component
interface NavbarItemProps {
  children: ReactNode;
  onClick?: () => void;
}

const NavbarItem: FC<NavbarItemProps> = ({ children, onClick }) => (
  <li className="nav-item py-2 lg:py-0 font-primary">
    <a
      onClick={onClick}
      className={`nav-link border-transparent cursor-pointer hover:border-b hover:border-white hover:border-dashed`}
    >
      {children}
    </a>
  </li>
);

export default Navbar;
