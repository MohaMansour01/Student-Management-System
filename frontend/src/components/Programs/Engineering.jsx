import { Link } from "react-router-dom";
import { FaUserCircle, FaArrowLeft, FaCog, FaRocket, FaIndustry, FaLightbulb } from "react-icons/fa";
import Logo from "../../assets/images/Logo.png";

const Engineering = () => {
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
            Engineering
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-100 mb-8">
            Design the future through innovation and problem-solving. Our Engineering program combines theoretical knowledge with hands-on experience to create tomorrow's solutions.
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
                Our Engineering program prepares students to tackle complex challenges through innovative design and analytical thinking. Students learn to apply scientific and mathematical principles to develop practical solutions for real-world problems.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The curriculum emphasizes hands-on learning through laboratory work, design projects, and industry partnerships, ensuring graduates are ready to contribute immediately to the engineering profession and drive technological advancement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaCog className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Design</h3>
                <p className="text-gray-600">Create innovative solutions to complex problems</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaRocket className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Develop cutting-edge technologies</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaIndustry className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
                <p className="text-gray-600">Optimize production and industrial processes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaLightbulb className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
                <p className="text-gray-600">Apply analytical thinking to real challenges</p>
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
                <li>• Engineering Mathematics</li>
                <li>• Physics for Engineers</li>
                <li>• Engineering Graphics</li>
                <li>• Computer Programming</li>
                <li>• Materials Science</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 2</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Thermodynamics</li>
                <li>• Fluid Mechanics</li>
                <li>• Circuit Analysis</li>
                <li>• Engineering Design</li>
                <li>• Statistics & Probability</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 3</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Control Systems</li>
                <li>• Advanced Materials</li>
                <li>• CAD/CAM</li>
                <li>• Project Management</li>
                <li>• Engineering Economics</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 4</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Senior Design Project</li>
                <li>• Advanced Specialization</li>
                <li>• Industry Internship</li>
                <li>• Engineering Ethics</li>
                <li>• Capstone Presentation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Specializations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Mechanical Engineering</li>
                <li>• Electrical Engineering</li>
                <li>• Civil Engineering</li>
                <li>• Chemical Engineering</li>
                <li>• Aerospace Engineering</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Skills Focus</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Analytical Thinking</li>
                <li>• Technical Communication</li>
                <li>• Team Collaboration</li>
                <li>• Innovation</li>
                <li>• Ethical Responsibility</li>
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
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Design Engineer</h3>
              <p className="text-gray-600">Create and develop new products and systems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Project Manager</h3>
              <p className="text-gray-600">Lead engineering projects from concept to completion</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">R&D Engineer</h3>
              <p className="text-gray-600">Research and develop innovative technologies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Quality Engineer</h3>
              <p className="text-gray-600">Ensure products meet quality standards</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Consulting Engineer</h3>
              <p className="text-gray-600">Provide technical expertise to clients</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Manufacturing Engineer</h3>
              <p className="text-gray-600">Optimize production processes and systems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Systems Engineer</h3>
              <p className="text-gray-600">Design and integrate complex systems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Entrepreneur</h3>
              <p className="text-gray-600">Start your own engineering company</p>
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
                <li>• Strong performance in Mathematics and Physics</li>
                <li>• Chemistry background preferred</li>
                <li>• Personal statement</li>
                <li>• Letters of recommendation</li>
                <li>• SAT/ACT scores (Math emphasis)</li>
              </ul>
            </div>
            <div className="bg-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Graduate</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Bachelor's degree in Engineering or related field</li>
                <li>• Strong academic record (GPA 3.0+)</li>
                <li>• GRE scores</li>
                <li>• Statement of purpose</li>
                <li>• Three letters of recommendation</li>
                <li>• Professional experience preferred</li>
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

export default Engineering;