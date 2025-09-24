import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPlane,
  FaCloudSun,
  FaCompass,
  FaTachometerAlt,
} from "react-icons/fa";
import { useRef } from "react";

const Piloting = () => {
  // Refs for smooth scroll
  const overviewRef = useRef(null);
  const enrollmentRef = useRef(null);
  const careersRef = useRef(null);
  const admissionsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Landing Page Section */}
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
            Piloting
          </h1>
          <p className="text-xl text-gray-100 mt-9 mb-9">
            "Piloting is where passion meets the skies—turning dreamers into professional aviators ready to soar worldwide!"
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
              Piloting trains you to master aircraft systems, navigation, and flight safety to operate planes professionally.
            </p>
            <br />
            <p className="text-gray-200">
              The 4-year Piloting program blends aviation science, flight training, and safety management. Students study aerodynamics, meteorology, aircraft systems, aviation regulations, and navigation. Alongside classroom learning, they undergo simulator training and accumulate flight hours to earn licenses (PPL, CPL, ATPL). By graduation, students are equipped with technical, decision-making, and leadership skills to fly commercial aircraft and pursue careers in the aviation industry.
            </p>
          </div>

          <div className="w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Card 1 */}
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-3">
              <FaPlane className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Flight Training
              </h3>
              <p className="text-center text-gray-500">
                Hands-on experience with modern aircraft
              </p>
            </div>

            {/* Card 2 */}
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-6">
              <FaCloudSun className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Meterology
              </h3>
              <p className="text-center text-gray-500">
                Master weather patterns and flight planning
              </p>
            </div>

            {/* Card 3 */}
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-5">
              <FaCompass className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Navigation
              </h3>
              <p className="text-center text-gray-500">
                Learn advanced navigation techniques
              </p>
            </div>

            {/* Card 4 */}
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-7">
              <FaTachometerAlt className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Aircraft Systems
              </h3>
              <p className="text-center text-gray-500">
                Understand complex aviation technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section ref={enrollmentRef} className="p-9 w-full bg-gray-200">
        <div className="px-15 py-15">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Year 1
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Introduction to Aviation & Flight Theory</li>
                <li>Aviation Mathematics & Physics</li>
                <li>Aerodynamics I</li>
                <li>Aircraft Systems Basics</li>
                <li>Private Pilot License (PPL) Training</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Year 2
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Air Navigation & Flight Planning</li>
                <li>Meteorology for Pilots</li>
                <li>Aviation Regulations & Air Law</li>
                <li>Human Factors & Aviation Psychology</li>
                <li>Flight Simulator Training I</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Year 3
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Aerodynamics II & Aircraft Performance</li>
                <li>Multi-Engine Operations</li>
                <li>Instrument Flight Rules (IFR) Training</li>
                <li>Aviation Safety & Risk Management</li>
                <li>Commercial Pilot License (CPL) Training</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Year 4
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Airline Transport Pilot License (ATPL) Theory</li>
                <li>Jet Aircraft Systems & Avionics</li>
                <li>Crew Resource Management (CRM)</li>
                <li>Advanced Flight Simulator II</li>
                <li>Capstone: Airline Operations & Internship with Flight Hours</li>
              </ul>
            </div>

            {/* Card 5 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Electives
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Helicopter Pilot Training</li>
                <li>Drone & UAV Operations</li>
                <li>Airport & Airline Management</li>
                <li>Aeronautical Engineering Fundamentals</li>
                <li>Aviation English & International Communication</li>
              </ul>
            </div>

            {/* Card 6 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Skills to Focus On
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Aircraft Operation & Navigation</li>
                <li>Decision-Making Under Pressure</li>
                <li>Aviation Safety & Emergency Procedures</li>
                <li>Communication & Teamwork in Cockpit</li>
                <li>Technical Mastery of Aircraft Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section
        ref={careersRef}
        className="px-[10%] py-[7%] w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"
      >
        <h1 className="text-white text-center text-[45px] font-bold mb-[3%]">Career Opportunities</h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] mt-7 text-center">Commercial Airline Pilot</h3>
            <p className="text-center p-6 text-gray-500">
              Fly passenger aircraft for regional or international airlines.
            </p>
          </div>
          {/* Card 2 */}
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] mt-7 text-center">Cargo Pilot</h3>
            <p className="text-center p-6 text-gray-500">
              Transport goods and freight across domestic and international routes.
            </p>
          </div>
          {/* Card 3 */}
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] mt-7 text-center">Flight Instructor</h3>
            <p className="text-center p-6 text-gray-500">
              Train aspiring pilots in flight schools and academies.
            </p>
          </div>
          {/* Card 4 */}
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] mt-7 text-center">Corporate / Private Jet Pilot</h3>
            <p className="text-center p-6 text-gray-500">
              Operate private aircraft for businesses or high-profile clients
            </p>
          </div>
          {/* Card 5 */}
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] mt-7 text-center">Helicopter Pilot</h3>
            <p className="text-center p-6 text-gray-500">
              Fly helicopters for medical, rescue, or transport missions.
            </p>
          </div>
          {/* Card 6 */}
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] mt-7 text-center">Test Pilot</h3>
            <p className="text-center p-6 text-gray-500">
              Test new or modified aircraft for performance and safety.
            </p>
          </div>
          {/* Card 7 */}
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] mt-7 text-center">Drone / UAV Pilot</h3>
            <p className="text-center p-6 text-gray-500">
              Operate drones for commercial, military, or research applications.
            </p>
          </div>
          {/* Card 8 */}
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] mt-7 text-center">Aviation Safety Officer</h3>
            <p className="text-center p-6 text-gray-500">
              Ensure compliance with aviation safety standards and procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section
        ref={admissionsRef}
        className="p-12 w-full h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"
      >
        <h1 className="text-white text-center text-[45px] font-bold mb-[3%]">Admission Requirements</h1>

        <div className="flex justify-center items-center gap-9 mt-[5%]">
          <div className="bg-gray-300 rounded-[7px] px-12 py-8">
            <h1 className="text-sky-900 font-semibold text-[20px] mt-5 mb-4">Undergraduate</h1>
            <ul className="list-[circle] pl-6">
              <li>High School Diploma or Equivalent</li>
              <br />
              <li>Strong performance in Mathematics</li>
              <br />
              <li>English Proficiency</li>
              <br />
              <li>Personal Statement</li>
              <br />
              <li>Letters of recommendation</li>
              <br />
              <li>SAT/ACT scores (optional)</li>
            </ul>
          </div>
          <div className="bg-gray-300 rounded-[7px] px-12 py-8">
            <h1 className="text-sky-900 font-semibold text-[20px] mt-5 mb-4">Graduate</h1>
            <ul className="list-[circle] pl-6">
              <li>Bachelor's Degree in related field</li>
              <br />
              <li>Strong Academic record (GPA 3.0+)</li>
              <br />
              <li>GRE scores</li>
              <br />
              <li>Statement of purpose</li>
              <br />
              <li>Three Letters of recommendation</li>
              <br />
              <li>Programming experience preferred</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center mt-[5%]">
          <button className="text-white bg-sky-800 px-6 py-4 rounded-[5px]">Apply Now</button>
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

export default Piloting;
