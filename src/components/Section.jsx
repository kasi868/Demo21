import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import c from "../assets/Gemini_Generated_Image_swgdmrswgdmrswgd.png";
import a from "../assets/Gemini_Generated_Image_9rf1u49rf1u49rf1.png";

gsap.registerPlugin(ScrollTrigger);

const Sections = () => {
  const containerRef = useRef(null);
  const tutorRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const tutorSection = tutorRef.current;

    // Reset any existing triggers
    ScrollTrigger.getAll().forEach((t) => t.kill());

    // Create scroll timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate Tutor section from bottom to overlap Student section
    tl.fromTo(
      tutorSection,
      { yPercent: 100 },
      { yPercent: 0, ease: "none" }
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[200vh] bg-[#fdfaf7] overflow-visible"
    >
      {/* ---------- STUDENT SECTION ---------- */}
      <section className="sticky top-0 h-screen flex items-center justify-center z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 px-6 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
              For Students: Learners with Technology
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              Empowering learners to build innovative circuits and semiconductors
              using hands-on virtual tools, mentorship, and real-world challenges.
              Discover the future of education with interactive simulations,
              personalized learning paths, and collaborative projects that prepare
              you for the semiconductor industry.
            </p>
            <ul className="space-y-3 text-gray-700 text-base">
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-2">✓</span>
                Practical circuit design & microchip projects.
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-2">✓</span>
                Simulated semiconductor labs and AI tutors.
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-2">✓</span>
                Learn through holographic, hands-on visualization.
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-2">✓</span>
                Access to global mentorship and networking opportunities.
              </li>
            </ul>
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition-all duration-300">
              Explore Student Programs
            </button>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={c}
              alt="Students working with circuit boards"
              className="rounded-2xl shadow-lg w-full max-w-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* ---------- TUTOR SECTION ---------- */}
      <section
        ref={tutorRef}
        className="absolute top-0 left-0 h-screen w-full flex items-center justify-center z-20 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-10 pointer-events-auto">
          <div className="flex-1 flex justify-center">
            <img
              src={a}
              alt="Tutor teaching semiconductor concepts"
              className="rounded-2xl shadow-lg w-full max-w-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500">
              For Tutors: Teaching Scene
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              Empowering professors and mentors with interactive dashboards,
              3D chip simulations, and real-time student analytics for immersive
              teaching. Transform your teaching experience with cutting-edge
              technology, enabling you to engage students like never before
              through virtual labs and advanced pedagogical tools.
            </p>
            <ul className="space-y-3 text-gray-700 text-base">
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-2">✓</span>
                Smart classrooms with visual semiconductor tools.
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-2">✓</span>
                Real-time collaboration with student groups.
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-2">✓</span>
                Access to a curated resource library & analytics.
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-2">✓</span>
                Professional development and certification programs.
              </li>
            </ul>
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition-all duration-300">
              Join as a Tutor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sections;
