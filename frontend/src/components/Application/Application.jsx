import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Application = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 flex justify-center items-center">
        <form
          action="#"
          method="post"
          className="bg-white px-7 py-2 flex flex-col gap-6 justify-between items-start rounded-xl w-full max-w-xl mx-auto"
        >
          {/* Full Name */}
          <div className="text-black flex flex-col w-full">
            <label htmlFor="fullName" className="mb-2 font-semibold">
              Full Name:
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              className="p-3 rounded-lg border border-sky-700 bg-sky-900 text-white placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          {/* Age */}
          <div className="text-black flex flex-col w-full">
            <label htmlFor="age" className="mb-2 font-semibold">
              Age:
            </label>
            <input
              id="age"
              name="age"
              type="number"
              placeholder="Enter your current age"
              className="p-3 rounded-lg border border-sky-700 bg-sky-900 text-white placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          {/* Address */}
          <div className="text-black flex flex-col w-full">
            <label htmlFor="address" className="mb-2 font-semibold">
              Full Address:
            </label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Enter your full current address"
              className="p-3 rounded-lg border border-sky-700 bg-sky-900 text-white placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          {/* Email */}
          <div className="text-black flex flex-col w-full">
            <label htmlFor="email" className="mb-2 font-semibold">
              E-mail:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your e-mail address"
              className="p-3 rounded-lg border border-sky-700 bg-sky-900 text-white placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          {/* Specialization */}
          <div className="text-black flex flex-col w-full">
            <label htmlFor="major" className="mb-2 font-semibold">
              Specialization:
            </label>
            <select
              id="Specialization"
              name="Specialization"
              className="p-3 rounded-lg border border-sky-700 bg-sky-900 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <option value="Bachelor">Bachelor</option>
              <option value="Masters">Masters</option>
            </select>
          </div>

          {/* Major */}
          <div className="text-black flex flex-col w-full">
            <label htmlFor="major" className="mb-2 font-semibold">
              Major:
            </label>
            <select
              id="major"
              name="major"
              className="p-3 rounded-lg border border-sky-700 bg-sky-900 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <option value="Computer Science">Computer Science</option>
              <option value="Engineering">Engineering</option>
              <option value="Medicine">Medicine & Health Sciences</option>
              <option value="Business">Business Administration</option>
              <option value="Piloting">Piloting</option>
              <option value="Arts">Arts & Humanities</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between w-full">
            <Link to={"/"}>
              <FaArrowLeft className="text-black text-[25px]" />
            </Link>
            <button
              type="submit"
              className="bg-sky-800 hover:bg-sky-700 transition-colors duration-300 text-white font-semibold py-3 px-6 rounded-lg mt-4 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Application;
