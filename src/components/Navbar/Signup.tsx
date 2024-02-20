import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// @ts-ignore
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
// @ts-ignore
import { SpaceImage2 } from "../../utils/Svg.jsx";

const SignUp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflow = "auto";
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
        if (localStorage.getItem('justLoggedIn') !== 'true') {
          localStorage.setItem("justLoggedIn", "true");
        }
      } else {
        navigate("/signup");
      }
    });
  
    return () => unsubscribe();
  }, []);
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const signUp = async (e: any) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
    
      await updateProfile(userCredential.user, { displayName: user.name })
    
      setErrorMessage("");
      navigate("/");
    } catch (err: any) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="container transition-transform duration-500 py-4 justify-center px-4 md:p-16 mx-auto">
      <div className="signup__wrapper bg-white flex flex-col gap-[10px] py-5 px-4 sm:px-8 sm:py-10 md:flex-row rounded-2xl w-full md:justify-center md:gap-10">
        <div
          className="signup__img md:order-1 self-center cursor-pointer max-w-44 sm:max-w-60 md:max-w-lg md:flex-1"
          title="Go back to home"
          onClick={() => navigate("/")}
        >
          <SpaceImage2 />
        </div>
        <div className="form__wrapper flex flex-col items-center gap-[10px] md:flex-1">
          <p className="signup__title font-secondary font-extrabold text-2xl tracking-wider">
            Create Account
          </p>
          <p className="signup__describtion font-medium text-[#3F3D56]">
            Start exploring the space
          </p>
          <p className="signup__tosignup font-medium">
            Already have an account ?
            <Link className="font-bold ms-1 text-blue-700" to={"/login"}>
              Login
            </Link>
          </p>
          <form
            className="signup__form w-full flex flex-col gap-[10px]"
            onSubmit={(e) => signUp(e)}
          >
            <div className="form__item flex flex-col gap-2 ">
              <label className="font-medium" htmlFor="name">
                Name *
              </label>
              <input
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="placeholder:text-[#777] px-4 py-2 rounded-lg border-2 border-[#D9D9D9] focus:outline-blue-700"
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form__item flex flex-col gap-2 ">
              <label className="font-medium" htmlFor="email">
                Email *
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
                Password *
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
            <div className="form__item flex flex-col gap-2 ">
              <label className="font-medium" htmlFor="confirmPassword">
                Confirm Password *
              </label>
              <input
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                className="placeholder:text-[#777] px-4 py-2 rounded-lg border-2 border-[#D9D9D9] focus:outline-blue-700"
                minLength={6}
                type="password"
                id="confirmPassword"
                required
                placeholder="Confirm your password"
              />
            </div>
            {errorMessage.length > 0 && (
              <p className="text-red-500">{errorMessage}</p>
            )}
            <div className="form__item">
              <button
                type="submit"
                className="py-2 text-center w-full bg-[#6C63FF] text-white rounded-lg mt-3 font-medium"
                title="Sign Up"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;