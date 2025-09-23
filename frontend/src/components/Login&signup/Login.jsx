import { useEffect, useState } from "react";

const Login = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // trigger fade-in animation on mount
  }, []);

  return (
    <section className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 w-full h-screen flex justify-center items-center">
      <form 
        action="#" 
        method="post" 
        className={`text-black bg-white flex flex-col justify-center text-center items-center border border-gray-300 p-14 rounded-2xl w-[30%] h-[55%] shadow-lg transition-all duration-700 
        ${fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-[28px] mb-7 font-bold text-gray-800">Student Login</h1>
        
        <label htmlFor="studentid" className="font-semibold text-gray-700">Enter Student ID:</label>
        <input 
          type="number" 
          name="studentid" 
          id="studentid" 
          className="w-full m-5 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:translate-y-[-2px] transition-all duration-300" 
        />

        <label htmlFor="password" className="font-semibold text-gray-700">Enter Password:</label>
        <input 
          type="number" 
          name="password" 
          id="password" 
          className="w-full m-5 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:translate-y-[-2px] transition-all duration-300" 
        />

        <button 
          type="submit" 
          className="font-semibold cursor-pointer border border-gray-300 p-2 w-[50%] mt-4 mb-3 rounded-md bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition-transform transition-colors duration-300"
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
