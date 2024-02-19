import { useEffect } from "react";
// @ts-ignore
import { Navbar } from "./utils/Components.jsx";
import { onAuthStateChanged } from "firebase/auth";
// @ts-ignore
import { auth } from "./firebase";
// @ts-ignore
const App: React.FC = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && localStorage.getItem('justLoggedIn') === 'true') {
        alert("User is logged in");
        // Remove the flag from local storage so the alert won't be shown again
        localStorage.removeItem('justLoggedIn');
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, [auth]);
  return <Navbar />;
};

export default App;
