import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import a from "../assets/Gemini_Generated_Image_jbpj02jbpj02jbpj.png";
import b from "../assets/Gemini_Generated_Image_9rf1u49rf1u49rf1.png"

gsap.registerPlugin(ScrollTrigger);

export default function Base() {

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to(".hero-img:nth-child(1)", { opacity: 1, y: 0, duration: 1.3, rotate: -6 })
      .to(".hero-img:nth-child(2)", { opacity: 1, y: 0, duration: 0.7, rotate: 4 }, "-=0.3")
      .to(".hero-img:nth-child(3)", { opacity: 1, y: 0, duration: 0.7, rotate: 10 }, "-=0.3")
      .to(".hero-img:nth-child(4)", { opacity: 1, y: 0, duration: 0.7, rotate: -12 }, "-=0.3");

    gsap.to(".hero-img:nth-child(1)", {
      y: -600, x: -550, rotation: -10,
      scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true }
    });

    gsap.to(".hero-img:nth-child(2)", {
      y: -650, x: 560, rotation: 8,
      scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true }
    });

    gsap.to(".hero-img:nth-child(3)", {
      y: -700, x: -500, rotation: 15,
      scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true }
    });

    gsap.to(".hero-img:nth-child(4)", {
      y: -750, x: 550, rotation: -18,
      scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true }
    });
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="hero-section relative h-screen w-full flex items-center justify-center overflow-hidden bg-white text-black">

        {/* Background Text */}
        <div className="hero-text-behind text-black font-black text-[8rem] opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none">
          SEMI CONDUCTORS
        </div>

        {/* Images */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img src={a}
            className="hero-img absolute w-2/3 max-w-[500px] -rotate-[8deg] rounded-xl shadow-lg opacity-0" />

          <img src={b}
            className="hero-img absolute w-2/3 max-w-[500px] rotate-[6deg] rounded-xl shadow-lg opacity-0" />

          <img src={a}
            className="hero-img absolute w-2/3 max-w-[500px] rotate-[12deg] rounded-xl shadow-lg opacity-0" />

          <img src={b}
            className="hero-img absolute w-2/3 max-w-[500px] -rotate-[14deg] rounded-xl shadow-lg opacity-0" />
        </div>

        
      </section>

      {/* Extra Scroll Space */}
      
    </div>
  );
}