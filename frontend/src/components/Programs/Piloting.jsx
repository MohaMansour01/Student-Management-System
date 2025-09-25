import { Link } from "react-router-dom";
import { FaUserCircle, FaArrowLeft, FaPlane, FaCloudSun, FaCompass, FaTachometerAlt } from "react-icons/fa";
import Logo from "../../assets/images/Logo.png";

const Piloting = () => {
  return (
    <>
      {/* Header */}
      <section className="p-5 w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
        <div className="flex justify-between items-center w-full">
          <Link to={"/"} className="w-1/8">
            <img src={Logo} alt="Logo" className="w-[70%]" />
          </Link>
          <ul className="flex justify-between items-center text-white font-medium w-[50%] px-14">
            <div className="flex gap-8">
              <Link to="/" className="hover:text-gray-300 cursor-pointer">
                Home
              </Link>
              <Link to="/#programs" className="hover:text-gray-300 cursor-pointer">
                Programs
              </Link>
              <Link to="/#admissions" className="hover:text-gray-300 cursor-pointer">
                Admissions
              </Link>
              <Link to="/#contacts" className="hover:text-gray-300 cursor-pointer">
                Contact
              </Link>
            </div>
            <Link
              to={"/login"}
              className="hover:text-gray-300 cursor-pointer flex items-center justify-center"
            >
              <FaUserCircle className="text-[30px]" />
            </Link>
          </ul>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link 
            to="/"
            className="inline-flex items-center text-white hover:text-gray-300 mb-6 transition"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-6xl font-bold mb-6 text-white">
            Piloting
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-sky-100 mb-8">
            Soar to new heights with our comprehensive piloting program. Train to become a professional pilot with world-class instruction and cutting-edge aircraft technology.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition">
              Apply Now
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-8 py-3 rounded-md font-semibold transition">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Program Overview
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our Piloting program provides comprehensive flight training combining theoretical knowledge with extensive hands-on flight experience. Students learn aviation principles, navigation, meteorology, and aircraft systems while building practical flying skills.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The program is designed to meet international aviation standards and prepares graduates for careers as commercial airline pilots, private pilots, or aviation instructors. Our state-of-the-art fleet and experienced instructors ensure the highest quality training.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaPlane className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Flight Training</h3>
                <p className="text-gray-600">Hands-on experience with modern aircraft</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaCloudSun className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Meteorology</h3>
                <p className="text-gray-600">Master weather patterns and flight planning</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaCompass className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Navigation</h3>
                <p className="text-gray-600">Learn advanced navigation techniques</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaTachometerAlt className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Aircraft Systems</h3>
                <p className="text-gray-600">Understand complex aviation technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Curriculum Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 1</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Principles of Flight</li>
                <li>• Aviation Regulations</li>
                <li>• Aircraft Systems</li>
                <li>• Basic Flight Training</li>
                <li>• Radio Communication</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 2</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Advanced Flight Maneuvers</li>
                <li>• Instrument Flight Rules (IFR)</li>
                <li>• Aviation Weather</li>
                <li>• Cross-Country Flying</li>
                <li>• Flight Planning</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 3</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Commercial Pilot Training</li>
                <li>• Multi-Engine Aircraft</li>
                <li>• Aviation Safety</li>
                <li>• Crew Resource Management</li>
                <li>• Advanced Navigation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 4</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Airline Transport Pilot</li>
                <li>• Flight Instructor Training</li>
                <li>• Aircraft Performance</li>
                <li>• Aviation Business</li>
                <li>• Capstone Flight Project</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Specializations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Commercial Aviation</li>
                <li>• Flight Instruction</li>
                <li>• Cargo Operations</li>
                <li>• Charter Services</li>
                <li>• Aviation Management</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Skills Focus</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Decision Making</li>
                <li>• Spatial Awareness</li>
                <li>• Communication</li>
                <li>• Leadership</li>
                <li>• Safety Consciousness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Career Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Commercial Pilot</h3>
              <p className="text-gray-600">Fly passengers for major airlines</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Cargo Pilot</h3>
              <p className="text-gray-600">Transport goods and freight worldwide</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Charter Pilot</h3>
              <p className="text-gray-600">Provide private aviation services</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Flight Instructor</h3>
              <p className="text-gray-600">Train the next generation of pilots</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Air Traffic Controller</h3>
              <p className="text-gray-600">Coordinate aircraft movements safely</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Aviation Manager</h3>
              <p className="text-gray-600">Manage aviation operations and services</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Test Pilot</h3>
              <p className="text-gray-600">Test new aircraft and systems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Aviation Consultant</h3>
              <p className="text-gray-600">Provide expertise to aviation companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Admission Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Private Pilot License</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• High school diploma or equivalent</li>
                <li>• Medical certificate (Class 3 minimum)</li>
                <li>• Strong performance in Mathematics and Physics</li>
                <li>• English proficiency</li>
                <li>• Personal statement</li>
                <li>• Background check clearance</li>
              </ul>
            </div>
            <div className="bg-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Commercial Pilot Program</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Private Pilot License or equivalent</li>
                <li>• Medical certificate (Class 1 or 2)</li>
                <li>• Strong academic record</li>
                <li>• Flight experience (minimum hours)</li>
                <li>• Letters of recommendation</li>
                <li>• Aviation English proficiency test</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="w-full bg-gray-900 text-gray-300 p-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="border-t border-gray-700 pt-6">
            <p>
              © {new Date().getFullYear()} Sunrise University. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Piloting;