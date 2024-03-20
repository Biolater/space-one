import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import Messages from "./components/Messages/Messages.js";
import {
  Navbar,
  Hero,
  About,
  SpaceNews,
  Testimonials,
  Footer,
// @ts-expect-error to avoid decloration error

} from "./utils/Components.jsx";
import { onAuthStateChanged, User } from "firebase/auth";
// @ts-expect-error to avoid decloration error
import { auth } from "./firebase";
import BottomAppBar from "./components/BottomNavigation/BottomNavigation.js";

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        // User is logged in
        setUser(user);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className="rays flex items-center justify-center"></div>
      </div>
    );
  }

  if (!user) {
    // User is not logged in
    return (
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
    );
  }

  // User is logged in
  return (
    <>
      <Messages />
      <BottomAppBar />
    </>
  );
};

export default App;
