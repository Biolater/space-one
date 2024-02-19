import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// @ts-ignore
import { SpaceImage, Google } from "../../utils/Svg.jsx";
const Login = () => {

  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  return (
    <div className="container transition-transform duration-500  py-4 justify-center px-4 mx-auto">
      <div className="login__wrapper flex flex-col items-center gap-[10px] py-5 px-4 rounded-2xl w-full">
        <div className="login__img">
          <SpaceImage />
        </div>
        <p className="login__title font-secondary font-extrabold text-2xl tracking-wider">
          Welcome Back
        </p>
        <p className="login__describtion font-medium text-[#3F3D56]">
          keep exploring the space
        </p>
        <p className="login__tosignup font-medium">
          Need an account ?{" "}
          <Link className="font-bold text-blue-700" to={"/signup"}>
            Sign up
          </Link>
        </p>
        <form
          className="login__form w-full flex flex-col gap-[10px]"
        >
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
        <p>or</p>
        <button
          className="placeholder:text-[#777] flex items-center justify-center gap-3 px-4 py-2 rounded-lg border-2 border-[#D9D9D9] focus:outline-blue-700 w-full font-medium"
          title="Login with Google"
        >
          <span className="max-w-6">{<Google />}</span>Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
