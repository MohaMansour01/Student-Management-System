import { Link } from "react-router-dom";
import { FaUserCircle, FaArrowLeft, FaHeartbeat, FaMicroscope, FaStethoscope, FaSyringe } from "react-icons/fa";
import Logo from "../../assets/images/Logo.png";

const MedicineHealthSciences = () => {
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
            Medicine & Health Sciences
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-red-100 mb-8">
            Dedicated to healing and improving lives. Our comprehensive medical program prepares compassionate healthcare professionals for the future.
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
                Our Medicine & Health Sciences program provides comprehensive education in medical sciences, clinical practice, and healthcare research. Students receive rigorous training in anatomy, physiology, pathology, and patient care.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                The curriculum combines theoretical knowledge with extensive clinical experience, ensuring graduates are well-prepared to serve patients and contribute to medical advancement through research and innovation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaHeartbeat className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Clinical Practice</h3>
                <p className="text-gray-600">Hands-on experience with real patients</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaMicroscope className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Research</h3>
                <p className="text-gray-600">Advance medical knowledge through research</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaStethoscope className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Diagnostics</h3>
                <p className="text-gray-600">Master diagnostic techniques and tools</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaSyringe className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Treatment</h3>
                <p className="text-gray-600">Learn advanced treatment methodologies</p>
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 1-2 (Pre-Clinical)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Human Anatomy</li>
                <li>• Physiology</li>
                <li>• Biochemistry</li>
                <li>• Medical Ethics</li>
                <li>• Pharmacology Basics</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 3-4 (Clinical)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Internal Medicine</li>
                <li>• Surgery</li>
                <li>• Pediatrics</li>
                <li>• Obstetrics & Gynecology</li>
                <li>• Psychiatry</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Year 5-6 (Specialization)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Clinical Rotations</li>
                <li>• Emergency Medicine</li>
                <li>• Radiology</li>
                <li>• Research Project</li>
                <li>• Residency Preparation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Specializations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Cardiology</li>
                <li>• Neurology</li>
                <li>• Oncology</li>
                <li>• Orthopedics</li>
                <li>• Public Health</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Clinical Skills</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Patient Examination</li>
                <li>• Diagnostic Procedures</li>
                <li>• Surgical Techniques</li>
                <li>• Medical Imaging</li>
                <li>• Laboratory Medicine</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Professional Skills</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Communication</li>
                <li>• Empathy & Compassion</li>
                <li>• Critical Thinking</li>
                <li>• Teamwork</li>
                <li>• Lifelong Learning</li>
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
              <h3 className="text-lg font-semibold mb-2 text-gray-900">General Practitioner</h3>
              <p className="text-gray-600">Provide primary healthcare services</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Specialist Doctor</h3>
              <p className="text-gray-600">Focus on specific medical fields</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Surgeon</h3>
              <p className="text-gray-600">Perform complex surgical procedures</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Medical Researcher</h3>
              <p className="text-gray-600">Advance medical science through research</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Public Health Officer</h3>
              <p className="text-gray-600">Promote community health and wellness</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Medical Consultant</h3>
              <p className="text-gray-600">Provide expert medical advice</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Hospital Administrator</h3>
              <p className="text-gray-600">Manage healthcare facilities</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Medical Educator</h3>
              <p className="text-gray-600">Teach future medical professionals</p>
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
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Medical Degree (MD)</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• High school diploma with excellent grades</li>
                <li>• Strong performance in Biology, Chemistry, Physics</li>
                <li>• MCAT scores</li>
                <li>• Personal statement</li>
                <li>• Letters of recommendation</li>
                <li>• Medical experience/volunteering preferred</li>
              </ul>
            </div>
            <div className="bg-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Graduate Programs</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Bachelor's degree in relevant field</li>
                <li>• Strong academic record (GPA 3.5+)</li>
                <li>• GRE/MCAT scores</li>
                <li>• Research experience</li>
                <li>• Three letters of recommendation</li>
                <li>• Statement of purpose</li>
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

export default MedicineHealthSciences;