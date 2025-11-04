import React from "react";

const ProcessSection = () => {
  return (
    <section className="relative py-24 px-6 ">
      {/* === Background Circles === */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Orange glow (left) */}
        <div
          className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] rounded-full 
          bg-[radial-gradient(circle_at_center,_rgba(255,180,80,0.9)_0%,_rgba(255,130,40,0.7)_70%,_rgba(255,90,40,0.4)_70%,_transparent_100%)] 
          blur-[40px] mix-blend-multiply"
        ></div>

        {/* Red glow (right) */}
        <div
          className="absolute top-[0%] right-[10%] w-[700px] h-[700px] rounded-full 
          bg-[radial-gradient(circle_at_center,_rgba(255,90,60,0.9)_0%,_rgba(235,70,50,0.8)_20%,_rgba(200,40,30,0.5)_80%,_transparent_100%)] 
          blur-[50px] mix-blend-multiply"
        ></div>

        {/* Yellowish glow (bottom center) */}
        <div
          className="absolute bottom-[-15%] left-[25%] w-[700px] h-[700px] rounded-full 
          bg-[radial-gradient(circle_at_center,_rgba(255,230,150,0.8)_0%,_rgba(255,210,100,0.6)_20%,_transparent_100%)] 
          blur-[140px] mix-blend-multiply"
        ></div>
      </div>

      {/* === Foreground Card === */}
      <div className="max-w-6xl mx-auto backdrop-blur-md rounded-3xl shadow-2xl p-12 border border-white/60 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="border border-black rounded-full w-7 h-7 flex items-center justify-center text-sm font-semibold">
                  1.
                </span>
                COMPETITOR ANALYSIS & SITE MAPPING
              </h3>
              <p className="text-black mt-2">
                We analyze competitors and map out a results-driven site
                structure.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="border border-black rounded-full w-7 h-7 flex items-center justify-center text-sm font-semibold">
                  3.
                </span>
                DESIGN & DEVELOPMENT
              </h3>
              <p className="text-gray-900 mt-2">
                Stunning, fast, and conversion-focused digital experiences.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="border border-black rounded-full w-7 h-7 flex items-center justify-center text-sm font-semibold">
                  5.
                </span>
                LAUNCH & SCALE
              </h3>
              <p className="text-gray-900 mt-2">
                Seamless integration, rigorous testing & future-ready scalability.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="border border-black rounded-full w-7 h-7 flex items-center justify-center text-sm font-semibold">
                  2.
                </span>
                CONTENT & MOODBOARD DEVELOPMENT
              </h3>
              <p className="text-gray-900 mt-2">
                AI-enhanced content + visual direction to ensure high impact.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="border border-black rounded-full w-7 h-7 flex items-center justify-center text-sm font-semibold">
                  4.
                </span>
                AI BOT & AUTOMATION
              </h3>
              <p className="text-gray-900 mt-2">
                AI-powered chatbots + instant WhatsApp lead notifications.
              </p>
            </div>

            {/* CTA BUTTON */}
            <div>
              <button className="mt-6 px-8 py-3 bg-white text-black font-bold rounded-full shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] transition-all duration-200">
                Book a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;