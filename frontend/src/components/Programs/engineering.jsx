import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCog,
  FaRocket,
  FaIndustry,
  FaLightbulb,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useRef, useState } from "react";

const Engineering = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const overviewRef = useRef(null);
  const enrollmentRef = useRef(null);
  const requirementsRef = useRef(null);
  const careersRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <section className="w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" className="w-28 sm:w-32" />
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-8 items-center text-white font-medium">
            <button
              onClick={() => scrollToSection(overviewRef)}
              className="hover:text-gray-300"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection(enrollmentRef)}
              className="hover:text-gray-300"
            >
              Enrollment
            </button>
            <button
              onClick={() => scrollToSection(careersRef)}
              className="hover:text-gray-300"
            >
              Careers
            </button>
            <button
              onClick={() => scrollToSection(requirementsRef)}
              className="hover:text-gray-300"
            >
              Admissions
            </button>
            <Link to={"/login"} className="hover:text-gray-300">
              <FaUserCircle className="text-[30px]" />
            </Link>
          </ul>

          {/* Hamburger for mobile */}
          <div
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 p-5 bg-gray-800">
            <button
              onClick={() => scrollToSection(overviewRef)}
              className="text-white hover:text-gray-300 text-left"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection(enrollmentRef)}
              className="text-white hover:text-gray-300 text-left"
            >
              Enrollment
            </button>
            <button
              onClick={() => scrollToSection(careersRef)}
              className="text-white hover:text-gray-300 text-left"
            >
              Careers
            </button>
            <button
              onClick={() => scrollToSection(requirementsRef)}
              className="text-white hover:text-gray-300 text-left"
            >
              Admissions
            </button>
            <Link
              to={"/login"}
              className="text-white flex items-center gap-2 hover:text-gray-300 text-left"
            >
              <FaUserCircle /> Login
            </Link>
          </div>
        )}
      </section>

      {/* Landing Page Section */}
      <section className="p-5 w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 pt-[100px]">
        <div className="text-center mb-[4%] mt-[7%] flex flex-col gap-5">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Engineering
          </h1>
          <p className="text-xl text-gray-100 mt-9 mb-9">
            "Engineering turns ideas into reality-designing, building, and innovating the world around us!"
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => scrollToSection(requirementsRef)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 rounded-md font-semibold"
            >
              Go To Apply
            </button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section
        ref={overviewRef}
        className="p-15 w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-5 md:px-15 gap-8">
          <div className="md:w-[45%] text-white flex flex-col gap-3">
            <h2 className="text-[50px] font-bold">Program Overview</h2>
            <p className="text-gray-200">
              Engineering teaches you to apply math, science, and technology to solve real-world problems and innovate solutions.
            </p>
            <br />
            <p className="text-gray-200">
              The Engineering program blends mathematics, physics, and technology to train students in designing, analyzing, and optimizing systems, machines, and structures. Students study core engineering principles, materials science, electronics, mechanics, thermodynamics, and specialized fields depending on their branch (mechanical, civil, electrical, etc.). The program emphasizes practical skills through labs, projects, and internships, preparing graduates for careers in industry, research, and innovation-driven sectors.
            </p>
          </div>

          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-3">
              <FaCog className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Design
              </h3>
              <p className="text-center text-gray-500">
                Create innovative solutions to complex problems
              </p>
            </div>
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-6">
              <FaRocket className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Innovation
              </h3>
              <p className="text-center text-gray-500">
                Develop cutting-edge technologies.
              </p>
            </div>
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-5">
              <FaIndustry className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Manufacturing
              </h3>
              <p className="text-center text-gray-500">
                Optimize production and industrial processes
              </p>
            </div>
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-7">
              <FaLightbulb className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Problem Solving
              </h3>
              <p className="text-center text-gray-500">
                Apply analytical thinking to real challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section ref={enrollmentRef} className="p-9 w-full bg-gray-200">
        <div className="px-5 md:px-15 py-15">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Year 1 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Year 1
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Engineering Mathematics</li>
                <li>Physics for Engineers</li>
                <li>Introduction to Engineering</li>
                <li>Computer-Aided Design (CAD) Basics</li>
                <li>Engineering Mechanics</li>
              </ul>
            </div>
            {/* Year 2 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Year 2
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Materials Science</li>
                <li>Electrical Circuits & Electronics</li>
                <li>Thermodynamics & Fluid Mechanics</li>
                <li>Manufacturing Processes</li>
                <li>Engineering Drawing & Design</li>
              </ul>
            </div>
            {/* Year 3 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Year 3
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Control Systems & Automation</li>
                <li>Structural Analysis / Mechanical Systems</li>
                <li>Instrumentation & Sensors</li>
                <li>Energy Systems / Power Engineering</li>
                <li>Engineering Project Management</li>
              </ul>
            </div>
            {/* Year 4 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Year 4
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Capstone Design Project</li>
                <li>Advanced Mechanics / Applied Thermodynamics</li>
                <li>Robotics / Mechatronics</li>
                <li>Sustainable Engineering Practices</li>
                <li>Research Methods in Engineering</li>
              </ul>
            </div>
            {/* Electives */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Electives
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Renewable Energy Technologies</li>
                <li>Artificial Intelligence in Engineering</li>
                <li>Aerospace Engineering</li>
                <li>Biomedical Engineering</li>
                <li>Internet of Things (IoT) Applications</li>
              </ul>
            </div>
            {/* Skills */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Skills to Focus On
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Problem-Solving & Analytical Thinking</li>
                <li>CAD & Simulation Tools</li>
                <li>Project Planning & Management</li>
                <li>Technical Communication & Reporting</li>
                <li>Innovation & Design Thinking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section
        ref={careersRef}
        className="px-[5%] md:px-[10%] py-[7%] w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"
      >
        <h1 className="text-white text-center text-[45px] font-bold mb-[3%]">
          Career Opportunities
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Career cards */}
          {[
            {
              title: "Mechanical Engineer",
              desc: "Design, analyze, and maintain mechanical systems and machinery.",
            },
            {
              title: "Civil Engineer",
              desc: "Plan, design, and supervise construction of infrastructure projects.",
            },
            {
              title: "Electrical / Electronics Engineer",
              desc: "Develop electrical systems, circuits, and devices.",
            },
            {
              title: "Software / Systems Engineer",
              desc: "Design and optimize software, embedded systems, or hardware-software integration.",
            },
            {
              title: "Project Engineer / Manager",
              desc: "Oversee engineering projects from conception to completion.",
            },
            {
              title: "Robotics / Automation Engineer",
              desc: "Design and implement automated systems and robots.",
            },
            {
              title: "Industrial Engineer",
              desc: "Improve processes, efficiency, and productivity in manufacturing or services.",
            },
            {
              title: "Environmental Engineer",
              desc: "Develop solutions to reduce environmental impact and promote sustainable practices.",
            },
          ].map((career, index) => (
            <div
              key={index}
              className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-gray-800 font-bold text-[20px] mt-7 text-center">
                {career.title}
              </h3>
              <p className="text-center p-6 text-gray-500">{career.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements Section */}
      <section
        ref={requirementsRef}
        className="p-12 w-full h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"
      >
        <h1 className="text-white text-center text-[45px] font-bold mb-[3%]">
          Admission Requirements
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-9 mt-[5%]">
          <div className="bg-gray-300 rounded-[7px] px-12 py-8 md:w-1/2">
            <h1 className="text-sky-900 font-semibold text-[20px] mt-5 mb-4">
              Undergraduate
            </h1>
            <ul className="list-[circle] pl-6 text-gray-700">
              <li>High School Diploma or Equivalent</li>
              <li>Strong performance in Mathematics</li>
              <li>English Proficiency</li>
              <li>Personal Statement</li>
              <li>Letters of recommendation</li>
              <li>SAT/ACT scores (optional)</li>
            </ul>
          </div>
          <div className="bg-gray-300 rounded-[7px] px-12 py-8 md:w-1/2">
            <h1 className="text-sky-900 font-semibold text-[20px] mt-5 mb-4">
              Graduate
            </h1>
            <ul className="list-[circle] pl-6 text-gray-700">
              <li>Bachelor's Degree in related field</li>
              <li>Strong Academic record (GPA 3.0+)</li>
              <li>GRE scores</li>
              <li>Statement of purpose</li>
              <li>Three Letters of recommendation</li>
              <li>Programming experience preferred</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center mt-[5%]">
          <Link to={'/application'} className="text-white bg-sky-800 px-6 py-4 rounded-[5px]">
            Apply Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 p-6 sm:p-12 mt-6 text-white">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <div className="flex flex-col gap-2 justify-center items-center">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex gap-3 text-gray-200">
              <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
            </div>
          </div>
        </div>
        <p className="text-gray-400 mt-6 text-center">
          &copy; 2025 All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Engineering;
