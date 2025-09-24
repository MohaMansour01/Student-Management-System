import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaHeartbeat,
  FaMicroscope,
  FaStethoscope,
  FaSyringe,
} from "react-icons/fa";
import { useRef } from "react";

const Medicine = () => {
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
            Medicine & Health Sciences
          </h1>
          <p className="text-xl text-gray-100 mt-9 mb-9">
            "Medicine empowers you to save lives, heal communities, and innovate the future of healthcare!"
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
              Medicine teaches you to care for patients, prevent diseases, and improve health through science and practice.
            </p>
            <br />
            <p className="text-gray-200">
              The Medicine program combines biology, chemistry, anatomy, physiology, and clinical training to develop competent medical professionals. Students learn to diagnose, treat, and prevent diseases, while gaining practical experience in hospitals and clinics. The program emphasizes ethical practice, patient care, and research in medical science, preparing graduates for careers in general medicine, surgery, pediatrics, internal medicine, and specialized healthcare fields.
            </p>
          </div>

          <div className="w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Card 1 */}
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-3">
              <FaHeartbeat className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Clinical Practice
              </h3>
              <p className="text-center text-gray-500">
                Hands-on experience with real patients
              </p>
            </div>

            {/* Card 2 */}
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-6">
              <FaMicroscope className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Research
              </h3>
              <p className="text-center text-gray-500">
                Advance medical knowledge through research
              </p>
            </div>

            {/* Card 3 */}
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-5">
              <FaStethoscope className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Diagnostics
              </h3>
              <p className="text-center text-gray-500">
                Master diagnostic techniques and tools
              </p>
            </div>

            {/* Card 4 */}
            <div className="h-48 w-full bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-center items-center p-7">
              <FaSyringe className="text-sky-800 text-4xl" />
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Treatment
              </h3>
              <p className="text-center text-gray-500">
                Learn advanced treatment methodologies
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
                <li>Human Anatomy & Physiology I</li>
                <li>Biochemistry & Molecular Biology</li>
                <li>General & Organic Chemistry for Medicine</li>
                <li>Medical Ethics & Professionalism</li>
                <li>Introduction to Clinical Skills</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Year 2
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Human Anatomy & Physiology II</li>
                <li>Pathophysiology I</li>
                <li>Microbiology & Immunology</li>
                <li>Pharmacology Basics</li>
                <li>Epidemiology & Public Health</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Year 3
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Pathophysiology II</li>
                <li>Medical Genetics</li>
                <li>Advanced Pharmacology</li>
                <li>Laboratory & Diagnostic Medicine</li>
                <li>Nutrition & Metabolism</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Year 4
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Internal Medicine I</li>
                <li>Surgery Fundamentals I</li>
                <li>Pediatrics & Neonatology I</li>
                <li>Obstetrics & Gynecology I</li>
                <li>Psychiatry & Behavioral Sciences</li>
              </ul>
            </div>

            {/* Card 5 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Year 5
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Internal Medicine II (Cardiology, Respiratory, Gastroenterology)</li>
                <li>General Surgery II (Orthopedics, Urology, ENT)</li>
                <li>Pediatrics & Neonatology II</li>
                <li>Obstetrics & Gynecology II</li>
                <li>Radiology & Imaging</li>
              </ul>
            </div>

            {/* Card 6 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Year 6
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Neurology & Neurosurgery</li>
                <li>Emergency Medicine & Intensive Care</li>
                <li>Oncology & Hematology</li>
                <li>Dermatology & Infectious Diseases</li>
                <li>Community & Preventive Medicine</li>
              </ul>
            </div>

            {/* Card 7 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Year 7
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Rotations in Major Specialties (Internal, Surgery, Pediatrics, OB/GYN)</li>
                <li>Elective Rotations (e.g., Anesthesiology, Sports Medicine, Plastic Surgery)</li>
                <li>Research Project / Dissertation</li>
                <li>Hospital Administration & Patient Management</li>
                <li>Preparation for Licensing / Board Exams</li>
              </ul>
            </div>

            {/* Card 8 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Electives
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Dermatology</li>
                <li>Anesthesiology</li>
                <li>Sports & Rehabilitation Medicine</li>
                <li>Plastic & Reconstructive Surgery</li>
                <li>Tropical Medicine & Global Health</li>
              </ul>
            </div>

            {/* Card 9 */}
            <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="text-gray-800 font-bold text-[20px] m-3">
                Skills to Focus On
              </h3>
              <ul className="list-[circle] pl-6 text-gray-500">
                <li>Clinical Diagnosis & Patient Management</li>
                <li>Surgical & Procedural Skills</li>
                <li>Communication, Empathy & Patient Care</li>
                <li>Research & Evidence-Based Medicine</li>
                <li>Teamwork & Leadership in Healthcare</li>
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
            <h3 className="text-gray-800 font-bold text-[20px] mt-7 text-center">General Physician / Doctor</h3>
            <p className="text-center p-6 text-gray-500">
              Diagnose, treat, and manage common illnesses and patient care.
            </p>
          </div>
          {/* Card 2 */}
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] mt-7 text-center">Surgeon</h3>
            <p className="text-center p-6 text-gray-500">
              Perform surgical procedures to treat injuries, diseases, or deformities.
            </p>
          </div>
          {/* Card 3 */}
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] mt-7 text-center">Pediatrician</h3>
            <p className="text-center p-6 text-gray-500">
              Provide healthcare specifically for infants, children, and adolescents.
            </p>
          </div>
          {/* Card 4 */}
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] mt-7 text-center">Psychiatrist</h3>
            <p className="text-center p-6 text-gray-500">
              Diagnose and treat mental health disorders.
            </p>
          </div>
          {/* Card 5 */}
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] mt-7 text-center">Cardiologist</h3>
            <p className="text-center p-6 text-gray-500">
              Specialize in heart and circulatory system diseases.
            </p>
          </div>
          {/* Card 6 */}
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] mt-7 text-center">Anesthesiologist</h3>
            <p className="text-center p-6 text-gray-500">
              Manage anesthesia and patient care during surgeries.
            </p>
          </div>
          {/* Card 7 */}
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] mt-7 text-center">Medical Researcher</h3>
            <p className="text-center p-6 text-gray-500">
              Conduct studies to advance medical knowledge and treatments.
            </p>
          </div>
          {/* Card 8 */}
          <div className="h-48 bg-gray-200 rounded-md shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-gray-800 font-bold text-[20px] mt-7 text-center">Epidemiologist</h3>
            <p className="text-center p-6 text-gray-500">
              Work on disease prevention, health education, and population health management.
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
              <li>Strong performance in Biology</li>
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
            <h1 className="text-sky-900 font-semibold text-[20px] mt-5 mb-4">Graduate (specialization)</h1>
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
              <li>Medical experience preferred</li>
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

export default Medicine;
