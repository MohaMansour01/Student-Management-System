import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBook,
  FaPalette,
  FaTheaterMasks,
  FaFeatherAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useRef, useState } from "react";

const Art = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const overviewRef = useRef(null);
  const enrollmentRef = useRef(null);
  const requirementsRef = useRef(null);
  const careersRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close menu when clicked
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
            Arts & Humanities
          </h1>
          <p className="text-xl text-gray-100 mt-9 mb-9">
            Nurture your creativity at Sunrise University, where imagination
            meets wisdom.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => scrollToSection(requirementsRef)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 rounded-md font-semibold"
            >
              Apply Now
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
              Unleash your creativity through painting, sculpture, and digital
              arts while exploring global artistic traditions. Develop both
              technical skills and a unique artistic voice.
            </p>
            <br />
            <p className="text-gray-200">
              The curriculum blends core foundations in world history,
              literature, and philosophy with specialized courses in cultural
              studies, art history, and social thought. Students explore ancient
              to modern civilizations, analyze cultural transformations, and
              engage with primary texts and artifacts. Electives include areas
              like comparative literature, regional histories, gender studies,
              and creative writing, allowing learners to tailor their academic
              journey. The program emphasizes critical analysis, research
              projects, and seminar discussions to develop well-rounded,
              informed perspectives on human identity and society.
            </p>
          </div>

          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-3">
              <FaBook className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Literature & Creative Writing
              </h3>
              <p className="text-center text-gray-500">
                Explore poetry, novels, plays, and the art of storytelling
                across cultures and time.
              </p>
            </div>
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-6">
              <FaPalette className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                History & Cultural Studies
              </h3>
              <p className="text-center text-gray-500">
                Dive into civilizations, heritage, and the forces shaping human
                society.
              </p>
            </div>
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-5">
              <FaTheaterMasks className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Philosophy & Ethics
              </h3>
              <p className="text-center text-gray-500">
                Question existence, morality, and knowledge while sharpening
                critical thinking.
              </p>
            </div>
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-7">
              <FaFeatherAlt className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Visual & Performing Arts
              </h3>
              <p className="text-center text-gray-500">
                Develop skills in painting, music, theater, or dance as creative
                expressions of human identity.
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
                <li>Introduction to Literature</li>
                <li>World History: Ancient to Medieval</li>
                <li>Basics of Philosophy & Critical Thinking</li>
                <li>Academic Writing & Research Skills</li>
                <li>Introduction to Visual & Performing Arts</li>
              </ul>
            </div>
            {/* Year 2 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Year 2
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Modern & Contemporary Literature</li>
                <li>History of Ideas & Civilizations</li>
                <li>Ethics & Moral Philosophy</li>
                <li>Art History & Cultural Expression</li>
                <li>Communication & Public Speaking</li>
              </ul>
            </div>
            {/* Year 3 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Year 3
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Comparative Literature</li>
                <li>Philosophy of Mind / Aesthetics</li>
                <li>Historical Research & Archival Methods</li>
                <li>Creative Writing Workshop / Theater Studies</li>
                <li>Cultural Studies & Global Perspectives</li>
              </ul>
            </div>
            {/* Year 4 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Year 4
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Capstone Thesis / Final Project</li>
                <li>Advanced Seminar in Chosen Discipline</li>
                <li>Research Methods & Critical Analysis</li>
                <li>Internship / Community Engagement</li>
                <li>Seminar on Contemporary Social Issues</li>
              </ul>
            </div>
            {/* Electives */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Electives
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Gender Studies</li>
                <li>Film Studies & Media Analysis</li>
                <li>Creative Arts (painting, drama, music)</li>
                <li>Linguistics & Language Studies</li>
                <li>Digital Humanities</li>
              </ul>
            </div>
            {/* Skills */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Skills to Focus On
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Critical Thinking & Analysis</li>
                <li>Research & Academic Writing</li>
                <li>Creativity & Expression</li>
                <li>Communication & Storytelling</li>
                <li>Cultural Awareness & Empathy</li>
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
              title: "Writer / Author",
              desc: "Create novels, articles, scripts, or content for media platforms. Strong storytelling and research skills are key.",
            },
            {
              title: "Historian / Researcher",
              desc: "Study past events, analyze sources, and preserve cultural heritage. Work in museums, archives, or research institutions.",
            },
            {
              title: "Museum or Gallery Curator",
              desc: "Manage art collections, plan exhibitions, and educate the public about visual arts and history.",
            },
            {
              title: "Teacher / Lecturer",
              desc: "Teach literature, history, philosophy, or arts in schools, colleges, or universities, shaping future thinkers.",
            },
            {
              title: "Journalist / Media Specialist",
              desc: "Report on cultural, social, and historical topics, create engaging content, or work in publishing and broadcasting.",
            },
            {
              title: "Creative Director / Designer",
              desc: "Lead creative projects in advertising, media, film, or theater, combining artistic vision with strategy.",
            },
            {
              title: "Cultural Program Manager",
              desc: "Organize arts festivals, cultural events, or heritage programs while promoting community engagement and creativity.",
            },
            {
              title: "Digital Content Creator",
              desc: "Create novels, articles, scripts, or content for media platforms. Strong storytelling and research skills are key.",
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
          <button className="text-white bg-sky-800 px-6 py-4 rounded-[5px]">
            Apply Now
          </button>
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

export default Art;
