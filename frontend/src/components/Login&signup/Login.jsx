import { useEffect, useState } from "react";

const Login = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // trigger fade-in animation on mount
  }, []);

  return (
    <section className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 w-full h-screen flex justify-center items-center p-4">
      <form
        action="#"
        method="post"
        className={`bg-white flex flex-col justify-center text-center items-center border border-gray-300 p-10 sm:p-14 rounded-2xl w-full max-w-md shadow-xl transition-all duration-700 
        ${fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-3xl sm:text-4xl mb-6 font-bold text-gray-800">
          Login System
        </h1>

        <div className="w-full mb-5">
          <label
            htmlFor="studentid"
            className="font-semibold text-gray-700 block mb-2 text-left"
          >
            User ID
          </label>
          <input
            type="number"
            name="studentid"
            id="studentid"
            placeholder="Enter your student ID"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:translate-y-[-2px] transition-all duration-300"
          />
        </div>

        <div className="w-full mb-5">
          <label
            htmlFor="password"
            className="font-semibold text-gray-700 block mb-2 text-left"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:translate-y-[-2px] transition-all duration-300"
          />
        </div>

        <button
          type="submit"
          className="w-1/2 py-3 mt-4 mb-3 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 hover:scale-105 transition-transform transition-colors duration-300"
        >
          Login
        </button>

        <p className="text-sm text-gray-500 mt-3">
          Forgot your password?{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Reset here
          </span>
        </p>
      </form>
    </section>
  );
};

export default Login;
