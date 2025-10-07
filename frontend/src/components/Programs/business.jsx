import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaChartLine,
  FaUsers,
  FaBriefcase,
  FaHandshake,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useRef, useState } from "react";

const Business = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Refs for smooth scroll
  const overviewRef = useRef(null);
  const enrollmentRef = useRef(null);
  const careersRef = useRef(null);
  const admissionsRef = useRef(null);

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
              onClick={() => scrollToSection(admissionsRef)}
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
              onClick={() => scrollToSection(admissionsRef)}
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

      {/* Landing Page */}
      <section className="p-5 w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 pt-[100px]">
        <div className="text-center mb-[8%] mt-[7%] flex flex-col gap-5">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Business Administration
          </h1>
          <p className="text-xl text-gray-100 mt-9 mb-9">
            Business Administration is your toolkit to lead, innovate, and drive
            success in any organization!
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => scrollToSection(admissionsRef)}
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
              Business Administration teaches you management, finance,
              marketing, and leadership skills to run successful organizations.
            </p>
            <p className="text-gray-200 mt-3">
              The program combines theory and practical experience to develop
              leadership, strategic thinking, and decision-making skills.
              Students study management, accounting, finance, marketing, human
              resources, operations, and entrepreneurship. Graduates can manage
              projects, lead teams, optimize business processes, and adapt to
              dynamic market conditions, opening doors to corporate, startup,
              government, or nonprofit careers.
            </p>
          </div>

          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                icon: FaChartLine,
                title: "Finance",
                desc: "Learn financial analysis and investment strategies",
              },
              {
                icon: FaUsers,
                title: "Management",
                desc: "Master leadership and organizational behaviour",
              },
              {
                icon: FaBriefcase,
                title: "Strategy",
                desc: "Develop strategic thinking and planning skills",
              },
              {
                icon: FaHandshake,
                title: "Entrepreneurship",
                desc: "Learn to start and grow successful businesses",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-5"
              >
                <card.icon className="text-sky-800 text-4xl" />
                <h3 className="text-gray-800 font-bold text-[20px] m-3">
                  {card.title}
                </h3>
                <p className="text-center text-gray-500">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section ref={enrollmentRef} className="p-9 w-full bg-gray-200">
        <div className="px-5 md:px-15 py-15 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Year 1",
              items: [
                "Introduction to Business",
                "Principles of Management",
                "Microeconomics",
                "Business Mathematics & Statistics",
                "Business Communication",
              ],
            },
            {
              title: "Year 2",
              items: [
                "Accounting & Financial Management",
                "Marketing Principles",
                "Organizational Behavior",
                "Business Law & Ethics",
                "Operations Management",
              ],
            },
            {
              title: "Year 3",
              items: [
                "Strategic Management",
                "Human Resource Management",
                "Project Management",
                "Entrepreneurship & Innovation",
                "International Business",
              ],
            },
            {
              title: "Year 4",
              items: [
                "Capstone Project / Business Strategy Project",
                "Leadership & Change Management",
                "Advanced Finance & Investment",
                "Supply Chain Management",
                "Research Methods in Business",
              ],
            },
            {
              title: "Electives",
              items: [
                "Digital Marketing",
                "E-commerce & Online Business",
                "Corporate Social Responsibility",
                "Business Analytics",
                "Negotiation & Conflict Management",
              ],
            },
            {
              title: "Skills to Focus On",
              items: [
                "Leadership & Team Management",
                "Strategic Thinking & Problem-Solving",
                "Financial Analysis & Budgeting",
                "Communication & Presentation Skills",
                "Project Management & Planning",
              ],
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-3"
            >
              <h3 className="text-gray-800 font-bold text-[20px] mb-2">
                {card.title}
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
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
          {[
            {
              title: "Business Manager",
              desc: "Oversee daily operations and ensure business objectives are met.",
            },
            {
              title: "Financial Analyst",
              desc: "Analyze financial data and provide insights for investment and budgeting decisions.",
            },
            {
              title: "Marketing Manager",
              desc: "Develop marketing strategies to promote products and grow the brand.",
            },
            {
              title: "Human Resources Manager",
              desc: "Manage recruitment, employee relations, and organizational culture.",
            },
            {
              title: "Entrepreneur / Startup Founder",
              desc: "Start and manage your own business venture.",
            },
            {
              title: "Operations Manager",
              desc: "Optimize processes, supply chains, and productivity in organizations.",
            },
            {
              title: "Consultant",
              desc: "Advise companies on business strategies, efficiency, and growth opportunities.",
            },
            {
              title: "Project Manager",
              desc: "Plan, execute, and oversee projects to meet goals on time and budget.",
            },
          ].map((career, idx) => (
            <div
              key={idx}
              className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-3"
            >
              <h3 className="text-gray-800 font-bold text-[20px] mt-3 text-center">
                {career.title}
              </h3>
              <p className="text-center text-gray-500 mt-2">{career.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Admissions Section */}
      <section
        ref={admissionsRef}
        className="p-12 w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"
      >
        <h1 className="text-white text-center text-[45px] font-bold mb-[3%]">
          Admission Requirements
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-9 mt-[5%]">
          <div className="bg-gray-300 rounded-[7px] px-12 py-8 md:w-1/2">
            <h2 className="text-sky-900 font-semibold text-[20px] mb-4">
              Undergraduate
            </h2>
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
            <h2 className="text-sky-900 font-semibold text-[20px] mb-4">
              Graduate
            </h2>
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

export default Business;
