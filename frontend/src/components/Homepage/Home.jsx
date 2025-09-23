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
  // Refs for smooth scroll
  const aboutRef = useRef(null);
  const programsRef = useRef(null);
  const admissionsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Landing Page Section */}
      <section className="p-5 w-full h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
        <div className="flex justify-between items-center w-full">
          <Link to={"/"} className="w-1/8">
            <img src={Logo} alt="Logo" className="w-[70%]" />
          </Link>
          <ul className="flex justify-between items-center text-white font-medium w-[50%] px-14">
            <div className="flex gap-8">
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
            </div>

            <Link
              to={"/login"}
              className="hover:text-gray-300 cursor-pointer flex items-center justify-center"
            >
              <FaUserCircle className="text-[30px]" />
            </Link>
          </ul>
        </div>

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
        className="p-15 w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 h-[150%]"
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
        className="p-9 w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 h-screen"
      >
        <div className="mt-12 max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-gray-900 text-white">
            Our Programs
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg text-gray-400">
            Explore our diverse academic offerings—from undergraduate to
            postgraduate studies—designed to prepare you for success in your
            chosen field.
          </p>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2">Computer Science</h3>
              <p className="text-gray-700 mb-4">
                Learn software development, AI, and data science.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">
                Learn More
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2">
                Business Administration
              </h3>
              <p className="text-gray-700 mb-4">
                Master management, finance, and entrepreneurship.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">
                Learn More
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2">
                Medicine & Health Sciences
              </h3>
              <p className="text-gray-700 mb-4">
                Prepare for careers in healthcare and research.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">
                Learn More
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2">Arts & Humanities</h3>
              <p className="text-gray-700 mb-4">
                Explore literature, history, and creative disciplines.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">
                Learn More
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2">Engineering</h3>
              <p className="text-gray-700 mb-4">
                Innovate and design practical solutions to real-world problems.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">
                Learn More
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2">Piloting</h3>
              <p className="text-gray-700 mb-4">
                Train to become a professional pilot with hands-on flight
                experience.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">
                Learn More
              </button>
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
                4. Receive Decision
              </h4>
              <p>
                Check your admission status and next steps to join Sunrise
                University.
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
        className="p-12 w-full h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"
      >
        <div className="max-w-6xl mx-auto text-center mt-[3%]">
          <h2 className="text-5xl font-bold mb-6 text-white mb-[4%]">
            What Our Students Say
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-[25px] text-gray-400 mb-[8%]">
            Hear from our students and alumni about their experiences at Sunrise
            University.
          </p>

          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow min-w-[300px] snap-start flex-shrink-0">
              <p className="text-gray-700 italic mb-4">
                “Sunrise University gave me the tools and confidence to excel in
                my career. The faculty are amazing!”
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Sarah K.</p>
                  <p className="text-gray-500 text-sm">
                    Computer Science, Class of 2023
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow min-w-[300px] snap-start flex-shrink-0">
              <p className="text-gray-700 italic mb-4">
                “The hands-on learning and research opportunities prepared me
                for real-world challenges.”
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">James M.</p>
                  <p className="text-gray-500 text-sm">
                    Engineering, Class of 2022
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow min-w-[300px] snap-start flex-shrink-0">
              <p className="text-gray-700 italic mb-4">
                “The supportive community and innovative programs made my
                university experience unforgettable.”
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  L
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Lily R.</p>
                  <p className="text-gray-500 text-sm">
                    Business Administration, Class of 2023
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white p-8 rounded-lg shadow min-w-[300px] snap-start flex-shrink-0">
              <p className="text-gray-700 italic mb-4">
                “Thanks to Sunrise University, I landed my dream job right after
                graduation. The practical skills I gained were invaluable.”
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Michael T.</p>
                  <p className="text-gray-500 text-sm">
                    Engineering, Class of 2021
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white p-8 rounded-lg shadow min-w-[300px] snap-start flex-shrink-0">
              <p className="text-gray-700 italic mb-4">
                “The professors were always supportive, and the research
                opportunities allowed me to publish my first paper as an
                undergrad.”
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Aisha N.</p>
                  <p className="text-gray-500 text-sm">
                    Computer Science, Class of 2022
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white p-8 rounded-lg shadow min-w-[300px] snap-start flex-shrink-0">
              <p className="text-gray-700 italic mb-4">
                “I loved the inclusive environment and the student clubs.
                Sunrise University truly feels like a second home.”
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Rohan S.</p>
                  <p className="text-gray-500 text-sm">
                    Medicine, Class of 2023
                  </p>
                </div>
              </div>
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
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-white text-5xl font-extrabold mb-4">
            Contact Us
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg text-gray-300">
            Have questions or need assistance? Reach out to our team and we'll
            get back to you as soon as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="bg-gray-200 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Mohamed Mansour
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:mm7.mansour@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  mm7.mansour@gmail.com
                </a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+250786003839"
                  className="text-blue-600 hover:underline"
                >
                  +250 786 003 839
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> Kigali, Kg #91
              </p>
            </div>

            <div className="bg-gray-200 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Yassin Tresor
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:tresoryassin221@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  tresoryassin221@gmail.com
                </a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+250798200559"
                  className="text-blue-600 hover:underline"
                >
                  +250 798 200 559
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> Kigali, Kg #91
              </p>
            </div>
          </div>

          <div className="bg-gray-200 p-12 rounded-2xl shadow-xl max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Send Us a Message
            </h3>
            <form action="#" className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows="6"
                className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="w-full bg-gray-900 text-gray-300 p-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
            <p className="mb-2">📍 Address: Kigali, Kg #91</p>
            <p className="mb-2">
              📧 Email:{" "}
              <a
                href="#"
                className="text-blue-500 hover:underline"
              >
                info@sunriseuniversity.com
              </a>
            </p>
            <p className="mb-2">
              📞 Phone:{" "}
              <a
                href="#"
                className="text-blue-500 hover:underline"
              >
                +250 786 003 839
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-blue-500 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>
            © {new Date().getFullYear()} All Rights Reserved by{" "}
            <span className="font-bold">@MohaYassinDev</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
