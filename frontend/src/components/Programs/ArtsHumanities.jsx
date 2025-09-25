import { Link } from "react-router-dom";
import { FaUserCircle, FaArrowLeft, FaBook, FaPalette, FaTheaterMasks, FaFeatherAlt } from "react-icons/fa";
import Logo from "../../assets/images/Logo.png";

const ArtsHumanities = () => {
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
            Arts & Humanities
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-purple-100 mb-8">
            Explore the richness of human culture, creativity, and expression. Our Arts & Humanities program celebrates the diversity of human experience and thought.
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
      <section className="py-16 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Program Overview
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our Arts & Humanities program offers a comprehensive exploration of literature, history, philosophy, languages, and creative arts. Students develop critical thinking, communication skills, and cultural awareness essential for understanding our complex world.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                The curriculum emphasizes interdisciplinary learning, encouraging students to make connections across fields while developing expertise in their chosen area of concentration. Graduates emerge as thoughtful, articulate, and culturally literate citizens.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaBook className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Literature</h3>
                <p className="text-gray-600">Explore world literature and creative writing</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaPalette className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visual Arts</h3>
                <p className="text-gray-600">Master painting, sculpture, and digital arts</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaTheaterMasks className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Performing Arts</h3>
                <p className="text-gray-600">Develop skills in theater, music, and dance</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaFeatherAlt className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Philosophy</h3>
                <p className="text-gray-600">Examine fundamental questions of existence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Curriculum Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 1</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Introduction to Humanities</li>
                <li>• World Literature</li>
                <li>• Art History</li>
                <li>• Philosophy Fundamentals</li>
                <li>• Cultural Studies</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 2</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Medieval & Renaissance Studies</li>
                <li>• Creative Writing</li>
                <li>• Modern Philosophy</li>
                <li>• Foreign Languages</li>
                <li>• Visual Arts Studio</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 3</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Contemporary Literature</li>
                <li>• Digital Humanities</li>
                <li>• Cultural Theory</li>
                <li>• Performance Studies</li>
                <li>• Research Methods</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 4</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Senior Capstone Project</li>
                <li>• Independent Study</li>
                <li>• Thesis Writing</li>
                <li>• Internship Program</li>
                <li>• Portfolio Development</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Concentrations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• English Literature</li>
                <li>• History</li>
                <li>• Philosophy</li>
                <li>• Fine Arts</li>
                <li>• Linguistics</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Skills Focus</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Critical Analysis</li>
                <li>• Creative Expression</li>
                <li>• Cultural Awareness</li>
                <li>• Communication</li>
                <li>• Research & Writing</li>
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
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Writer/Author</h3>
              <p className="text-gray-600">Create novels, articles, and creative content</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Museum Curator</h3>
              <p className="text-gray-600">Manage cultural artifacts and exhibitions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Teacher/Professor</h3>
              <p className="text-gray-600">Educate in humanities and liberal arts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Cultural Critic</h3>
              <p className="text-gray-600">Analyze and review cultural productions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Arts Administrator</h3>
              <p className="text-gray-600">Manage arts organizations and programs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Journalist</h3>
              <p className="text-gray-600">Report on culture, politics, and society</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Translator</h3>
              <p className="text-gray-600">Bridge languages and cultures</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Creative Director</h3>
              <p className="text-gray-600">Lead creative projects in media and advertising</p>
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
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Undergraduate</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• High school diploma or equivalent</li>
                <li>• Strong performance in English and Literature</li>
                <li>• Creative portfolio (for arts concentrations)</li>
                <li>• Personal statement</li>
                <li>• Letters of recommendation</li>
                <li>• SAT/ACT scores (optional)</li>
              </ul>
            </div>
            <div className="bg-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Graduate</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Bachelor's degree in related field</li>
                <li>• Strong academic record (GPA 3.0+)</li>
                <li>• GRE scores (if applicable)</li>
                <li>• Statement of purpose</li>
                <li>• Three letters of recommendation</li>
                <li>• Writing samples or portfolio</li>
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

export default ArtsHumanities;