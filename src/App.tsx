import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
// @ts-ignore
import {
  Navbar,
  Hero,
  About,
  SpaceNews,
  Testimonials,
  Footer,
// @ts-ignore
} from "./utils/Components.jsx";
import { onAuthStateChanged } from "firebase/auth";
// @ts-ignore
import { auth } from "./firebase";
import BottomAppBar from "./components/BottomNavigation/BottomNavigation.js";
// @ts-ignore
const App: React.FC = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      if (user && localStorage.getItem("justLoggedIn") === "true") {
        localStorage.setItem("userLoggedin", "true");
        alert("User is logged in");
        setUser(user);
        localStorage.removeItem("justLoggedIn");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const shimmerElement = document.querySelector(".animate-shimmer");

      if (scroll > 172) {
        shimmerElement?.classList.remove("hidden");
        shimmerElement?.classList.add("inline-flex");
      } else {
        shimmerElement?.classList.add("hidden");
        shimmerElement?.classList.remove("inline-flex");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Corrected cleanup function
    };
  }, []);
  return (
    <>
      {user || localStorage.getItem("userLoggedin") === "true" ? (
        <BottomAppBar />
      ) : (
        <>
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="fixed hidden z-50 bottom-10 right-10 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <FaArrowUp />
          </button>
          <Navbar />
          <Hero />
          <About />
          <Testimonials />
          <SpaceNews />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
