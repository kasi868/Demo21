import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import a from "../assets/Gemini_Generated_Image_jbpj02jbpj02jbpj.png";
import b from "../assets/Gemini_Generated_Image_9rf1u49rf1u49rf1.png"

gsap.registerPlugin(ScrollTrigger);

export default function Base() {

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to(".hero-img:nth-child(1)", { opacity: 1, y: 0, duration: 1.3, rotate: -6 })
      .to(".hero-img:nth-child(2)", { opacity: 1, y: 0, duration: 0.7, rotate: 4 }, "-=0.3")
      .to(".hero-img:nth-child(3)", { opacity: 1, y: 0, duration: 0.7, rotate: 10 }, "-=0.3")
      .to(".hero-img:nth-child(4)", { opacity: 1, y: 0, duration: 0.7, rotate: -12 }, "-=0.3");

    const moveY = isMobile ? -500 : -1600;
    const moveX = isMobile ? -400 : -1550;

    gsap.to(".hero-img:nth-child(1)", {
      y: moveY, x: moveX, rotation: -100,
      scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true }
    });

    gsap.to(".hero-img:nth-child(2)", {
      y: moveY - 50, x: -moveX, rotation: 80,
      scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true }
    });

    gsap.to(".hero-img:nth-child(3)", {
      y: moveY - 100, x: moveX + 50, rotation: 105,
      scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true }
    });

    gsap.to(".hero-img:nth-child(4)", {
      y: moveY - 150, x: -moveX - 50, rotation: -108,
      scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true }
    });
  }, []);

  return (
    <div>

      {/* HERO */}
      <section className="hero-section relative h-screen w-full flex items-center justify-center overflow-hidden bg-white text-black">

        {/* Background Text */}
        <div className="hero-text-behind text-black font-black text-[3rem] md:text-[8rem] opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none">
          SEMI CONDUCTORS
        </div>

        {/* Images */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img src={a} className="hero-img absolute w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] rounded-xl shadow-lg opacity-0" />
          <img src={b} className="hero-img absolute w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] rounded-xl shadow-lg opacity-0" />
          <img src={a} className="hero-img absolute w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] rounded-xl shadow-lg opacity-0" />
          <img src={b} className="hero-img absolute w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] rounded-xl shadow-lg opacity-0" />
        </div>

      </section>

    </div>
  );
}
