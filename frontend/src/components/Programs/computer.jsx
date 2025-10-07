import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCode,
  FaRobot,
  FaDatabase,
  FaLaptopCode,
} from "react-icons/fa";
import { useRef } from "react";

const Computer = () => {
  const overviewRef = useRef(null);
  const enrollmentRef = useRef(null);
  const careersRef = useRef(null);
  const admissionsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Landing Section */}
      <section className="p-5 w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
        <div className="flex justify-between items-center w-full">
          <Link to={"/"} className="w-1/8">
            <img src={Logo} alt="Logo" className="w-[70%]" />
          </Link>
          <ul className="flex justify-between items-center text-white font-medium w-[50%] px-14">
            <div className="flex gap-8">
              <button
                onClick={() => scrollToSection(overviewRef)}
                className="hover:text-gray-300 cursor-pointer"
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection(enrollmentRef)}
                className="hover:text-gray-300 cursor-pointer"
              >
                Enrollment
              </button>
              <button
                onClick={() => scrollToSection(careersRef)}
                className="hover:text-gray-300 cursor-pointer"
              >
                Careers
              </button>
              <button
                onClick={() => scrollToSection(admissionsRef)}
                className="hover:text-gray-300 cursor-pointer"
              >
                Admissions
              </button>
            </div>
            <Link
              to={"/login"}
              className="hover:text-gray-300 cursor-pointer flex items-center justify-center"
            >
              <FaUserCircle className="text-[30px]" />
            </Link>
          </ul>
        </div>

        <div className="text-center mb-[8%] mt-[7%] flex flex-col gap-5">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Computer Science
          </h1>
          <p className="text-xl text-gray-100 mt-9 mb-9">
            "Computer Science is your gateway to building the future—turning
            ideas into apps, AI, and tech that change the world!"
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
        <div className="flex justify-between items-center px-15">
          <div className="w-[45%] text-white flex flex-col gap-3">
            <h2 className="text-[50px] font-bold">Program Overview</h2>
            <p className="text-gray-200">
              Computer Science focuses on programming, problem-solving, and
              understanding how computers and software work.
            </p>
            <br />
            <p className="text-gray-200">
              The Computer Science program offers a deep dive into computing
              principles, programming languages, algorithms, data structures,
              software engineering, databases, networking, and artificial
              intelligence. Students learn both theoretical foundations and
              practical skills, enabling them to create software solutions,
              analyze complex problems, and adapt to rapidly evolving
              technologies. Graduates can pursue careers in software
              development, data analysis, cybersecurity, AI, and other
              tech-driven fields.
            </p>
          </div>

          <div className="w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Cards */}
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-3">
              <FaCode className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Programming
              </h3>
              <p className="text-center text-gray-500">
                Learn multiple programming languages and frameworks
              </p>
            </div>
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-6">
              <FaRobot className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                AI & ML
              </h3>
              <p className="text-center text-gray-500">
                Explore artificial intelligence and machine learning
              </p>
            </div>
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-5">
              <FaDatabase className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Data Science
              </h3>
              <p className="text-center text-gray-500">
                Master data analysis and visualization techniques
              </p>
            </div>
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-7">
              <FaLaptopCode className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Software Dev
              </h3>
              <p className="text-center text-gray-500">
                Build real-world applications and systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section ref={enrollmentRef} className="p-9 w-full bg-gray-200">
        <div className="px-15 py-15 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Year Cards */}
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] m-3">Year 1</h3>
            <ul className="list-[circle] pl-6 text-gray-500">
              <li>Introduction to Programming (Python/Java/C++)</li>
              <li>Computer Systems & Architecture</li>
              <li>Discrete Mathematics for Computing</li>
              <li>Web Development Basics (HTML, CSS, JS)</li>
              <li>Digital Logic & Problem Solving</li>
            </ul>
          </div>
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] m-3">Year 2</h3>
            <ul className="list-[circle] pl-6 text-gray-500">
              <li>Data Structures & Algorithms</li>
              <li>Object-Oriented Programming (OOP)</li>
              <li>Database Systems & SQL</li>
              <li>Operating Systems Fundamentals</li>
              <li>Software Engineering Principles</li>
            </ul>
          </div>
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] m-3">Year 3</h3>
            <ul className="list-[circle] pl-6 text-gray-500">
              <li>Computer Networks & Security</li>
              <li>Artificial Intelligence / Machine Learning Basics</li>
              <li>Mobile App Development</li>
              <li>Cloud Computing & DevOps Concepts</li>
              <li>Human-Computer Interaction (HCI)</li>
            </ul>
          </div>
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] m-3">Year 4</h3>
            <ul className="list-[circle] pl-6 text-gray-500">
              <li>Capstone Project / Final Year Project</li>
              <li>Advanced AI / Deep Learning</li>
              <li>Distributed Systems & Microservices</li>
              <li>Advanced Cybersecurity</li>
              <li>Research Methods in Computing</li>
            </ul>
          </div>
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] m-3">
              Electives
            </h3>
            <ul className="list-[circle] pl-6 text-gray-500">
              <li>Game Development</li>
              <li>IoT (Internet of Things)</li>
              <li>Blockchain & Cryptography</li>
              <li>Data Science & Big Data Analytics</li>
              <li>Augmented / Virtual Reality (AR/VR)</li>
            </ul>
          </div>
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] m-3">
              Skills to Focus On
            </h3>
            <ul className="list-[circle] pl-6 text-gray-500">
              <li>Programming & Problem-Solving</li>
              <li>Algorithmic Thinking & Optimization</li>
              <li>Version Control (Git/GitHub)</li>
              <li>Cloud Platforms & DevOps Tools</li>
              <li>Communication & Collaboration in Tech Teams</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section
        ref={careersRef}
        className="px-[10%] py-[7%] w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"
      >
        <h1 className="text-white text-center text-[45px] font-bold mb-[3%]">
          Career Opportunities
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {[
            {
              title: "Software Developer",
              desc: "Design, build, and maintain applications and software solutions.",
            },
            {
              title: "Data Scientist",
              desc: "Analyze large datasets to uncover insights and drive business decisions.",
            },
            {
              title: "Cybersecurity Analyst",
              desc: "Protect systems and networks from cyber threats and attacks.",
            },
            {
              title: "AI/ML Engineer",
              desc: "Develop intelligent systems and machine learning models.",
            },
            {
              title: "Cloud Solutions Architect",
              desc: "Design and manage cloud-based infrastructure and services.",
            },
            {
              title: "Mobile App Developer",
              desc: "Create apps for iOS and Android devices.",
            },
            {
              title: "Game Developer",
              desc: "Build interactive games for consoles, PC, or mobile platforms.",
            },
            {
              title: "DevOps Engineer",
              desc: "Streamline software development and deployment processes using automation and collaboration tools.",
            },
          ].map((career, i) => (
            <div
              key={i}
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

      {/* Admissions Section */}
      <section
        ref={admissionsRef}
        className="p-12 w-full h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"
      >
        <h1 className="text-white text-center text-[45px] font-bold mb-[3%]">
          Admission Requirements
        </h1>
        <div className="flex justify-center items-center gap-9 mt-[5%]">
          <div className="bg-gray-300 rounded-[7px] px-12 py-8">
            <h1 className="text-sky-900 font-semibold text-[20px] mt-5 mb-4">
              Undergraduate
            </h1>
            <ul className="list-[circle] pl-6">
              <li>High School Diploma or Equivalent</li>
              <li>Strong performance in Mathematics</li>
              <li>English Proficiency</li>
              <li>Personal Statement</li>
              <li>Letters of recommendation</li>
              <li>SAT/ACT scores (optional)</li>
            </ul>
          </div>
          <div className="bg-gray-300 rounded-[7px] px-12 py-8">
            <h1 className="text-sky-900 font-semibold text-[20px] mt-5 mb-4">
              Graduate
            </h1>
            <ul className="list-[circle] pl-6">
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

export default Computer;
