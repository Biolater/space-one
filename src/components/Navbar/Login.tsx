import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// @ts-ignore
import { auth, googleProvider } from "../../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
// @ts-ignore
import { SpaceImage, Google, SpaceImage2 } from "../../utils/Svg.jsx";
const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflow = "auto";
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        navigate("/login");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);


  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const signIn = async (e: any) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      localStorage.setItem("justLoggedIn", "true");
      setErrorMessage("");
    } catch (err: any) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="container transition-transform duration-500  py-4 justify-center px-4 md:p-16 mx-auto">
      <div className="login__wrapper flex flex-col gap-[10px] py-5 px-4 sm:px-8 sm:py-10 md:flex-row rounded-2xl w-full md:justify-center md:gap-10">
        <div
          className="login__img md:order-1 self-center cursor-pointer max-w-44 sm:max-w-60 md:max-w-lg md:flex-1"
          title="Go back to home"
          onClick={() => navigate("/")}
        >
          <SpaceImage />
        </div>
        <div className="form__wrapper flex flex-col items-center gap-[10px] md:flex-1">
          <p className="login__title font-secondary font-extrabold text-2xl tracking-wider">
            Welcome Back
          </p>
          <p className="login__describtion font-medium text-[#3F3D56]">
            keep exploring the space
          </p>
          <p className="login__tosignup font-medium">
            Need an account ?
            <Link className="font-bold ms-1 text-blue-700" to={"/signup"}>
              Sign up
            </Link>
          </p>
          <form
            className="login__form w-full flex flex-col gap-[10px]"
            onSubmit={(e) => signIn(e)}
          >
            <div className="form__item flex flex-col gap-2 ">
              <label className="font-medium" htmlFor="email">
                Email
              </label>
              <input
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="placeholder:text-[#777] px-4 py-2 rounded-lg border-2 border-[#D9D9D9] focus:outline-blue-700"
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form__item flex flex-col gap-2 ">
              <label className="font-medium" htmlFor="password">
                Password
              </label>
              <input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="placeholder:text-[#777] px-4 py-2 rounded-lg border-2 border-[#D9D9D9] focus:outline-blue-700"
                minLength={6}
                type="password"
                id="password"
                required
                placeholder="Enter your password"
              />
            </div>
            {errorMessage.length > 0 && (
              <p className="text-red-500">{errorMessage}</p>
            )}
            <div className="form__item">
              <button
                type="submit"
                className="py-2 text-center w-full bg-[#6C63FF] text-white rounded-lg mt-3 font-medium"
                title="Login"
              >
                Login
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
