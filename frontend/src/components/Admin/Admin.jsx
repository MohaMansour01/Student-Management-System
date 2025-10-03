import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChartBar,
  FaUsers,
  FaComments,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaSignOutAlt,
} from "react-icons/fa";

const Admin = () => {
  return (
    <>
      <div className="min-h-screen flex bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
        {/* Sidebar */}
        <aside className="h-screen w-[18%] bg-gray-900 flex flex-col justify-start p-6 gap-8">
          <div className="flex items-center gap-3 mb-8">
            <img src={Logo} width={50} alt="Logo" className="rounded-full" />
            <div className="flex flex-col text-[10px]">
              <span className="text-white font-semibold">Mohamed Mansour</span>
              <span className="text-gray-400">mm7.mansour@gmail.com</span>
            </div>
          </div>

          <nav className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-white text-lg cursor-pointer p-3 rounded-lg hover:bg-sky-700 transition-all duration-200">
              <FaHome />
              <span>Dashboard</span>
            </div>

            <div className="flex items-center gap-4 text-white text-lg cursor-pointer p-3 rounded-lg hover:bg-sky-700 transition-all duration-200">
              <FaChartBar />
              <span>Insight</span>
            </div>

            <div className="flex items-center gap-4 text-white text-lg cursor-pointer p-3 rounded-lg hover:bg-sky-700 transition-all duration-200">
              <FaUsers />
              <span>People & Teams</span>
            </div>

            <div className="flex items-center gap-4 text-white text-lg cursor-pointer p-3 rounded-lg hover:bg-sky-700 transition-all duration-200">
              <FaComments />
              <span>Inbox</span>
            </div>
          </nav>

          <Link to={'/'} className="text-white flex justify-center hover:text-gray-300 items-center mt-[40%] text-[20px]">
            <FaSignOutAlt className="mr-3" />
            <span>Logout</span>
          </Link>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col justify-end h-screen p-0">
          <div className="flex-1 p-6">
            
          </div>

          {/* Footer */}
          <footer className="bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 text-white w-full p-6">
            <div className="flex justify-center items-center gap-6">
              <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
            </div>
            <p className="text-gray-400 text-center mt-2">
              &copy; 2025 All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Admin;
