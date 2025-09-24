import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

// CountUp Component
const CountUp = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();

  const animateCount = () => {
    let start = 0;
    const duration = 3000;
    const increment = target / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount();
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <p ref={ref} className="text-3xl font-bold text-blue-600">
      {count.toLocaleString()}
    </p>
  );
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu

  // Refs for smooth scroll
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const programsRef = useRef(null);
  const admissionsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-gray-800 shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to={"/"} className="w-1/8">
            <img src={Logo} alt="Logo" className="w-[70%]" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-between items-center text-white font-medium gap-8">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="hover:text-gray-300 cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection(programsRef)}
              className="hover:text-gray-300 cursor-pointer"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection(admissionsRef)}
              className="hover:text-gray-300 cursor-pointer"
            >
              Admissions
            </button>
            <button
              onClick={() => scrollToSection(testimonialsRef)}
              className="hover:text-gray-300 cursor-pointer"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection(contactsRef)}
              className="hover:text-gray-300 cursor-pointer"
            >
              Contacts
            </button>
            <Link
              to={"/login"}
              className="hover:text-gray-300 cursor-pointer flex items-center justify-center"
            >
              <FaUserCircle className="text-[30px]" />
            </Link>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-3xl focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-gray-700 text-white font-medium flex flex-col items-center gap-6 py-6 animate-slideDown">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="hover:text-gray-300 cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection(programsRef)}
              className="hover:text-gray-300 cursor-pointer"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection(admissionsRef)}
              className="hover:text-gray-300 cursor-pointer"
            >
              Admissions
            </button>
            <button
              onClick={() => scrollToSection(testimonialsRef)}
              className="hover:text-gray-300 cursor-pointer"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection(contactsRef)}
              className="hover:text-gray-300 cursor-pointer"
            >
              Contacts
            </button>
            <Link
              to={"/login"}
              className="hover:text-gray-300 flex items-center justify-center"
            >
              <FaUserCircle className="text-[30px]" />
            </Link>
          </ul>
        )}
      </nav>

      {/* Landing Page Section */}
      <section ref={homeRef} className="p-5 w-full h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 flex flex-col justify-center items-center mt-[80px]">
        <div className="text-center m-[8%] flex flex-col gap-5">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Empowering Minds, Shaping Futures
          </h1>
          <p className="text-xl text-gray-100 mt-9 mb-9">
            Discover your potential at Sunrise University—where innovation meets
            excellence.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 rounded-md font-semibold"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection(programsRef)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-6 py-3 rounded-md font-semibold"
            >
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-[20px] w-full bg-white"></div>

      {/* About Us Section */}
      <section
        ref={aboutRef}
        className="p-15 w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">About Us</h2>
          <p className="max-w-3xl mx-auto mb-4 text-lg text-gray-300 mt-9">
            Sunrise is dedicated to empowering students through quality
            education, research, and innovation. Our mission is to develop
            global leaders ready to make a positive impact.
          </p>
          <p className="max-w-4xl mx-auto mb-8 text-[22px] font-semibold text-gray-400 mt-9">
            Our vision is to be recognized as a leading center of academic
            excellence and research, fostering creativity, diversity, and
            lifelong learning.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p>
                We strive for the highest quality in education and research.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p>
                Encouraging creativity and cutting-edge research in every field.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p>We value ethics, honesty, and accountability in all we do.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
              <p>We celebrate diversity and provide opportunities for all.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p>Engaging with society to create meaningful impact.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-12 mb-12">
            <div className="text-center">
              <CountUp target={1992} />
              <p className="text-white font-semibold">Established</p>
            </div>
            <div className="text-center">
              <CountUp target={98353} />
              <p className="text-white font-semibold">Students</p>
            </div>
            <div className="text-center">
              <CountUp target={24} />
              <p className="text-white font-semibold">Programs</p>
            </div>
            <div className="text-center">
              <CountUp target={32621} />
              <p className="text-white font-semibold">Alumni Worldwide</p>
            </div>
          </div>

          <button
            onClick={() => scrollToSection(programsRef)}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition"
          >
            Explore Our Programs
          </button>
        </div>
      </section>

      {/* Separator */}
      <div className="h-[20px] w-full bg-white"></div>

      {/* Programs Section */}
      <section
        ref={programsRef}
        className="p-9 w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"
      >
        <div className="mt-12 max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">Our Programs</h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg text-gray-400">
            Explore our diverse academic offerings—from undergraduate to
            postgraduate studies—designed to prepare you for success in your
            chosen field.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2">Computer Science</h3>
              <p className="text-gray-700 mb-4">
                Learn software development, AI, and data science.
              </p>
              <Link
                to={"/computer"}
                className="text-blue-600 font-semibold hover:underline cursor-pointer"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2">
                Business Administration
              </h3>
              <p className="text-gray-700 mb-4">
                Master management, finance, and entrepreneurship.
              </p>
              <Link
                to={"/business"}
                className="text-blue-600 font-semibold hover:underline cursor-pointer"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2">
                Medicine & Health Sciences
              </h3>
              <p className="text-gray-700 mb-4">
                Prepare for careers in healthcare and research.
              </p>
              <Link
                to={"/medicine"}
                className="text-blue-600 font-semibold hover:underline cursor-pointer"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2">Arts & Humanities</h3>
              <p className="text-gray-700 mb-4">
                Explore literature, history, and creative disciplines.
              </p>
              <Link
                to={"/art"}
                className="text-blue-600 font-semibold hover:underline cursor-pointer"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2">Engineering</h3>
              <p className="text-gray-700 mb-4">
                Innovate and design practical solutions to real-world problems.
              </p>
              <Link
                to={"/engineering"}
                className="text-blue-600 font-semibold hover:underline cursor-pointer"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2">Piloting</h3>
              <p className="text-gray-700 mb-4">
                Train to become a professional pilot with hands-on flight
                experience.
              </p>
              <Link
                to={"/piloting"}
                className="text-blue-600 font-semibold hover:underline cursor-pointer"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-[20px] w-full bg-white"></div>

      {/* Admissions Section */}
      <section
        ref={admissionsRef}
        className="p-12 w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-6 text-white">Admissions</h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg text-gray-400">
            Join Sunrise University and start your journey toward academic
            excellence. We welcome applications for Undergraduate and
            Postgraduate programs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
              <h3 className="text-2xl font-bold mb-4">
                Undergraduate Programs
              </h3>
              <p className="text-gray-700 mb-6">
                Pursue your bachelor's degree across a variety of disciplines,
                designed to provide foundational knowledge and hands-on
                experience.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition">
                Apply Now
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
              <h3 className="text-2xl font-bold mb-4">Postgraduate Programs</h3>
              <p className="text-gray-700 mb-6">
                Advance your career with our master's programs, offering
                specialized training, research opportunities, and professional
                development.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition">
                Apply Now
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h4 className="text-xl font-bold mb-2 text-blue-600">
                1. Apply Online
              </h4>
              <p>
                Fill out our online application form with your personal and
                academic details.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h4 className="text-xl font-bold mb-2 text-blue-600">
                2. Submit Documents
              </h4>
              <p>
                Provide transcripts, ID, recommendation letters, and other
                required documents.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h4 className="text-xl font-bold mb-2 text-blue-600">
                3. Entrance Exam / Interview
              </h4>
              <p>
                Complete any program-specific exams or interviews as required by
                the department.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h4 className="text-xl font-bold mb-2 text-blue-600">
                4. Admission Decision
              </h4>
              <p>
                Receive your acceptance letter and start planning your academic
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-[20px] w-full bg-white"></div>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="p-12 w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 text-white">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <p className="text-gray-700 mb-4">
                "Sunrise University gave me the skills and confidence to succeed
                in my career. The professors are amazing!"
              </p>
              <h4 className="font-bold">– Alex Johnson</h4>
              <p className="text-gray-500 text-sm">Computer Science Graduate</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <p className="text-gray-700 mb-4">
                "The learning environment is supportive and inspiring. I loved
                the practical experience I gained here."
              </p>
              <h4 className="font-bold">– Maria Lopez</h4>
              <p className="text-gray-500 text-sm">
                Business Administration Graduate
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <p className="text-gray-700 mb-4">
                "I highly recommend Sunrise to anyone looking to excel
                academically and personally. Truly life-changing."
              </p>
              <h4 className="font-bold">– Daniel Kim</h4>
              <p className="text-gray-500 text-sm">Medicine Graduate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-[20px] w-full bg-white"></div>

      {/* Contacts Section */}
      <section
        ref={contactsRef}
        className="p-12 w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 text-white">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-left text-gray-300 space-y-4">
              <p>
                <span className="font-bold">Address:</span> Kigali, Gasabo kg #91
              </p>
              <p>
                <span className="font-bold">Phone:</span> +250 786 003 839
              </p>
              <p>
                <span className="font-bold">Email:</span>{" "}
                info@sunriseuniversity.edu
              </p>
              <div className="flex gap-4 mt-4">
                <FaFacebookF className="text-white cursor-pointer hover:text-blue-600" />
                <FaTwitter className="text-white cursor-pointer hover:text-blue-400" />
                <FaInstagram className="text-white cursor-pointer hover:text-pink-500" />
                <FaLinkedinIn className="text-white cursor-pointer hover:text-blue-700" />
              </div>
            </div>
            <div>
              <form className="bg-white p-8 rounded-lg shadow space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-400 rounded px-4 py-2 focus:outline-none focus:border-blue-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-400 rounded px-4 py-2 focus:outline-none focus:border-blue-600"
                />
                <textarea
                  placeholder="Message"
                  className="w-full border border-gray-400 rounded px-4 py-2 focus:outline-none focus:border-blue-600"
                ></textarea>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-300 p-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-[20%]">
          <button className="cursor-pointer" onClick={() => scrollToSection(homeRef)}>
            <img src={Logo} width={'50%'} alt="" />
          </button>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li
                className="hover:text-white cursor-pointer"
                onClick={() => scrollToSection(aboutRef)}
              >
                About Us
              </li>
              <li
                className="hover:text-white cursor-pointer"
                onClick={() => scrollToSection(programsRef)}
              >
                Programs
              </li>
              <li
                className="hover:text-white cursor-pointer"
                onClick={() => scrollToSection(admissionsRef)}
              >
                Admissions
              </li>
              <li
                className="hover:text-white cursor-pointer"
                onClick={() => scrollToSection(contactsRef)}
              >
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <p>Email: info@sunriseuniversity.edu</p>
            <p>Phone: +250 786 003 839</p>
            <p>Address: Kigali, Gasabo kg #91</p>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-500">
          &copy; 2025 Sunrise University. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;
