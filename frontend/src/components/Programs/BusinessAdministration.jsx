import { Link } from "react-router-dom";
import { FaUserCircle, FaArrowLeft, FaChartLine, FaUsers, FaBriefcase, FaHandshake } from "react-icons/fa";
import Logo from "../../assets/images/Logo.png";

const BusinessAdministration = () => {
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
            Business Administration
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-green-100 mb-8">
            Master the art of management, finance, and entrepreneurship. Our Business Administration program prepares future leaders and innovators.
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
                Our Business Administration program provides a comprehensive foundation in business principles, management practices, and entrepreneurial thinking. Students develop critical skills in leadership, strategic planning, and decision-making.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                The curriculum integrates theoretical knowledge with practical application through case studies, internships, and real-world business projects, preparing graduates for diverse career opportunities in the global marketplace.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaChartLine className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Finance</h3>
                <p className="text-gray-600">Learn financial analysis and investment strategies</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaUsers className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Management</h3>
                <p className="text-gray-600">Master leadership and organizational behavior</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaBriefcase className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Strategy</h3>
                <p className="text-gray-600">Develop strategic thinking and planning skills</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaHandshake className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Entrepreneurship</h3>
                <p className="text-gray-600">Learn to start and grow successful businesses</p>
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
                <li>• Introduction to Business</li>
                <li>• Principles of Management</li>
                <li>• Business Mathematics</li>
                <li>• Accounting Fundamentals</li>
                <li>• Business Communication</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 2</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Financial Management</li>
                <li>• Marketing Principles</li>
                <li>• Operations Management</li>
                <li>• Human Resource Management</li>
                <li>• Business Law</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 3</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Strategic Management</li>
                <li>• International Business</li>
                <li>• Digital Marketing</li>
                <li>• Investment Analysis</li>
                <li>• Project Management</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 4</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Business Capstone Project</li>
                <li>• Entrepreneurship</li>
                <li>• Business Analytics</li>
                <li>• Industry Internship</li>
                <li>• Leadership Development</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Specializations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Finance</li>
                <li>• Marketing</li>
                <li>• Supply Chain Management</li>
                <li>• Human Resources</li>
                <li>• Information Systems</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Skills Focus</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Leadership</li>
                <li>• Critical Thinking</li>
                <li>• Communication</li>
                <li>• Analytical Skills</li>
                <li>• Ethical Decision Making</li>
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
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Business Manager</h3>
              <p className="text-gray-600">Lead teams and manage business operations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Financial Analyst</h3>
              <p className="text-gray-600">Analyze financial data and investment opportunities</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Marketing Manager</h3>
              <p className="text-gray-600">Develop and execute marketing strategies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Consultant</h3>
              <p className="text-gray-600">Provide strategic advice to organizations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Entrepreneur</h3>
              <p className="text-gray-600">Start and run your own business ventures</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">HR Manager</h3>
              <p className="text-gray-600">Manage talent and organizational development</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Operations Manager</h3>
              <p className="text-gray-600">Optimize business processes and efficiency</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Investment Banker</h3>
              <p className="text-gray-600">Work in corporate finance and investments</p>
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
                <li>• Strong performance in Mathematics and English</li>
                <li>• Personal statement</li>
                <li>• Letters of recommendation</li>
                <li>• SAT/ACT scores (recommended)</li>
                <li>• Extracurricular activities preferred</li>
              </ul>
            </div>
            <div className="bg-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Graduate (MBA)</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Bachelor's degree from accredited institution</li>
                <li>• Strong academic record (GPA 3.0+)</li>
                <li>• GMAT/GRE scores</li>
                <li>• Statement of purpose</li>
                <li>• Three letters of recommendation</li>
                <li>• Work experience preferred</li>
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

export default BusinessAdministration;