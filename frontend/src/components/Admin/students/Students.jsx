import { FaBookOpen, FaChalkboardTeacher, FaChartBar, FaCog, FaComments, FaDollarSign, FaFacebookF, FaFileAlt, FaHome, FaInbox, FaInstagram, FaLinkedinIn, FaSignOutAlt, FaTachometerAlt, FaTwitter, FaUserGraduate, FaUsers } from "react-icons/fa";
import Logo from "../../../assets/images/Logo.png";
import { Link } from "react-router-dom";

const data = [
  {
    fullName: "John Doe",
    age: 25,
    address: "123 Main St, NY, USA",
    email: "john@example.com",
    specialization: "Web Development",
    major: "Computer Science",
  },
  {
    fullName: "Jane Smith",
    age: 30,
    address: "456 Elm St, LA, USA",
    email: "jane@example.com",
    specialization: "Data Analysis",
    major: "Statistics",
  },
  {
    fullName: "Ahmed Ali",
    age: 28,
    address: "789 Oak St, Cairo, Egypt",
    email: "ahmed@example.com",
    specialization: "Cybersecurity",
    major: "IT",
  },
  {
    fullName: "Maria Gonzalez",
    age: 26,
    address: "101 Pine St, Madrid, Spain",
    email: "maria@example.com",
    specialization: "AI & ML",
    major: "Computer Science",
  },
  {
    fullName: "Li Wei",
    age: 27,
    address: "202 Maple St, Beijing, CN",
    email: "liwei@example.com",
    specialization: "Cloud Computing",
    major: "Information Tech",
  },
  {
    fullName: "Mansour Ali",
    age: 25,
    address: "kg 99 ave 06",
    email: "mm7.mansour@gmail.com",
    specialization: "Web Development",
    major: "Computer Science",
  },
  {
    fullName: "John Doe",
    age: 25,
    address: "123 Main St, NY, USA",
    email: "john@example.com",
    specialization: "Web Development",
    major: "Computer Science",
  },
  {
    fullName: "Jane Smith",
    age: 30,
    address: "456 Elm St, LA, USA",
    email: "jane@example.com",
    specialization: "Data Analysis",
    major: "Statistics",
  },
  {
    fullName: "Ahmed Ali",
    age: 28,
    address: "789 Oak St, Cairo, Egypt",
    email: "ahmed@example.com",
    specialization: "Cybersecurity",
    major: "IT",
  },
  {
    fullName: "Maria Gonzalez",
    age: 26,
    address: "101 Pine St, Madrid, Spain",
    email: "maria@example.com",
    specialization: "AI & ML",
    major: "Computer Science",
  },
  {
    fullName: "Li Wei",
    age: 27,
    address: "202 Maple St, Beijing, CN",
    email: "liwei@example.com",
    specialization: "Cloud Computing",
    major: "Information Tech",
  },
  {
    fullName: "Mansour Ali",
    age: 25,
    address: "kg 99 ave 06",
    email: "mm7.mansour@gmail.com",
    specialization: "Web Development",
    major: "Computer Science",
  },
  {
    fullName: "John Doe",
    age: 25,
    address: "123 Main St, NY, USA",
    email: "john@example.com",
    specialization: "Web Development",
    major: "Computer Science",
  },
  {
    fullName: "Jane Smith",
    age: 30,
    address: "456 Elm St, LA, USA",
    email: "jane@example.com",
    specialization: "Data Analysis",
    major: "Statistics",
  },
  {
    fullName: "Ahmed Ali",
    age: 28,
    address: "789 Oak St, Cairo, Egypt",
    email: "ahmed@example.com",
    specialization: "Cybersecurity",
    major: "IT",
  },
  {
    fullName: "Maria Gonzalez",
    age: 26,
    address: "101 Pine St, Madrid, Spain",
    email: "maria@example.com",
    specialization: "AI & ML",
    major: "Computer Science",
  },
  {
    fullName: "Li Wei",
    age: 27,
    address: "202 Maple St, Beijing, CN",
    email: "liwei@example.com",
    specialization: "Cloud Computing",
    major: "Information Tech",
  },
  {
    fullName: "Mansour Ali",
    age: 25,
    address: "kg 99 ave 06",
    email: "mm7.mansour@gmail.com",
    specialization: "Web Development",
    major: "Computer Science",
  },
  
];

const Students = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
      {/* Sidebar */}
      <aside className="h-screen w-[13%] bg-gray-900 flex flex-col justify-start p-6 gap-8">
        <div className="flex items-center gap-3 mb-8">
          <img src={Logo} width={50} alt="Logo" className="rounded-full" />
          <div className="flex flex-col text-[10px]">
            <span className="text-white font-semibold">Mohamed Mansour</span>
            <span className="text-gray-400">mm7.mansour@gmail.com</span>
          </div>
        </div>

        <nav className="flex flex-col gap-4">
          <Link to={'/admin'} className="flex items-center gap-4 text-white text-lg cursor-pointer p-3 rounded-lg hover:bg-sky-700 transition-all duration-200">
            <FaHome />
            <span>Dashboard</span>
          </Link>

          <Link to={'/students'} className="flex items-center gap-4 text-white text-lg cursor-pointer p-3 rounded-lg hover:bg-sky-700 transition-all duration-200">
            <FaUsers />
            <span>Students</span>
          </Link>

          <div className="flex items-center gap-4 text-white text-lg cursor-pointer p-3 rounded-lg hover:bg-sky-700 transition-all duration-200">
            <FaUsers />
            <span>People & Teams</span>
          </div>

          <div className="flex items-center gap-4 text-white text-lg cursor-pointer p-3 rounded-lg hover:bg-sky-700 transition-all duration-200">
            <FaComments />
            <span>Inbox</span>
          </div>
        </nav>

        <Link
          to={"/"}
          className="text-white flex justify-center hover:text-gray-300 items-center mt-[40%] text-[20px]"
        >
          <FaSignOutAlt className="mr-3" />
          <span>Logout</span>
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <div className="flex flex-col items-start justify-start w-full">
          {/* Search Input + Logo */}
          <div className="flex w-full justify-between items-center p-6 flex-wrap">
            <input
              type="text"
              placeholder="Search Applicants"
              className="bg-gray-300 w-full md:w-[90%] p-3 rounded-[10px] mb-2 md:mb-0"
            />
            <img src={Logo} alt="logo" className="w-[6%]" />
          </div>

          {/* Recent Applications */}
          <div className="p-6 flex items-center text-white text-[25px]">
            <FaInbox className="mr-4" />
            <h1>All Applications</h1>
          </div>

          {/* Recent Applications Table */}
          <div className="p-6 w-full">
            <div className="overflow-x-auto rounded-xl">
              <table className="min-w-full bg-gray-100 text-gray-800">
                <thead className="bg-gray-300">
                  <tr>
                    <th className="px-4 py-2 text-left">Full Name</th>
                    <th className="px-4 py-2 text-left">Age</th>
                    <th className="px-4 py-2 text-left">Full Address</th>
                    <th className="px-4 py-2 text-left">Email</th>
                    <th className="px-4 py-2 text-left">Specialization</th>
                    <th className="px-4 py-2 text-left">Major</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((user, index) => (
                    <tr
                      key={index}
                      className={index % 2 ? "bg-gray-100" : "bg-gray-200"}
                    >
                      <td className="px-4 py-2">{user.fullName}</td>
                      <td className="px-4 py-2">{user.age}</td>
                      <td className="px-4 py-2">{user.address}</td>
                      <td className="px-4 py-2">{user.email}</td>
                      <td className="px-4 py-2">{user.specialization}</td>
                      <td className="px-4 py-2">{user.major}</td>
                      <td className="flex gap-6 items-center justify-center mt-[4px]">
                        <button className="bg-yellow-500 p-1 px-2 rounded-[5px] cursor-pointer">Edit</button>
                        <button className="bg-red-500 p-1 rounded-[5px] cursor-pointer">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 text-white w-full p-6 mt-auto">
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
  );
};

export default Students;
