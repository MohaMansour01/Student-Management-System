import { Link } from "react-router-dom";
import { FaUserCircle, FaArrowLeft, FaCode, FaRobot, FaDatabase, FaLaptopCode } from "react-icons/fa";
import Logo from "../../assets/images/Logo.png";

const ComputerScience = () => {
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
            Computer Science
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-blue-100 mb-8">
            Dive into the world of technology, programming, and innovation. Our Computer Science program prepares you for the digital future.
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
                Our Computer Science program is designed to provide students with a comprehensive understanding of computational thinking, programming, and technology systems. You'll learn both theoretical foundations and practical skills essential for success in the tech industry.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                The curriculum covers software development, artificial intelligence, data science, cybersecurity, and emerging technologies, ensuring graduates are well-prepared for diverse career opportunities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaCode className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Programming</h3>
                <p className="text-gray-600">Learn multiple programming languages and frameworks</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaRobot className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI & ML</h3>
                <p className="text-gray-600">Explore artificial intelligence and machine learning</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaDatabase className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Science</h3>
                <p className="text-gray-600">Master data analysis and visualization techniques</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaLaptopCode className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Software Dev</h3>
                <p className="text-gray-600">Build real-world applications and systems</p>
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
                <li>• Introduction to Programming</li>
                <li>• Mathematics for Computer Science</li>
                <li>• Computer Systems Fundamentals</li>
                <li>• Data Structures</li>
                <li>• Introduction to Algorithms</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 2</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Object-Oriented Programming</li>
                <li>• Database Management Systems</li>
                <li>• Computer Networks</li>
                <li>• Software Engineering</li>
                <li>• Web Development</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 3</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Machine Learning</li>
                <li>• Mobile App Development</li>
                <li>• Cybersecurity</li>
                <li>• Cloud Computing</li>
                <li>• AI and Neural Networks</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 4</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Capstone Project</li>
                <li>• Advanced Algorithms</li>
                <li>• Distributed Systems</li>
                <li>• Industry Internship</li>
                <li>• Research Methods</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Electives</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Game Development</li>
                <li>• Blockchain Technology</li>
                <li>• Computer Graphics</li>
                <li>• Natural Language Processing</li>
                <li>• IoT Development</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Skills Focus</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Problem Solving</li>
                <li>• Critical Thinking</li>
                <li>• Team Collaboration</li>
                <li>• Project Management</li>
                <li>• Communication</li>
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
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Software Developer</h3>
              <p className="text-gray-600">Design and build applications and systems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Data Scientist</h3>
              <p className="text-gray-600">Analyze data to extract insights and predictions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">AI Engineer</h3>
              <p className="text-gray-600">Develop intelligent systems and algorithms</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Cybersecurity Analyst</h3>
              <p className="text-gray-600">Protect systems from digital threats</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">DevOps Engineer</h3>
              <p className="text-gray-600">Manage development and deployment processes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Product Manager</h3>
              <p className="text-gray-600">Lead technology product development</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Research Scientist</h3>
              <p className="text-gray-600">Advance computer science knowledge</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Entrepreneur</h3>
              <p className="text-gray-600">Start your own tech company</p>
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
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Undergraduate</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• High school diploma or equivalent</li>
                <li>• Strong performance in Mathematics</li>
                <li>• English proficiency</li>
                <li>• Personal statement</li>
                <li>• Letters of recommendation</li>
                <li>• SAT/ACT scores (optional)</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Graduate</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Bachelor's degree in related field</li>
                <li>• Strong academic record (GPA 3.0+)</li>
                <li>• GRE scores</li>
                <li>• Statement of purpose</li>
                <li>• Three letters of recommendation</li>
                <li>• Programming experience preferred</li>
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

export default ComputerScience;