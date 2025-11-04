import React from 'react'

function Home() {
  return (
    <section className="overflow-x-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left: text content */}
          <div className="w-full lg:w-7/12">
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-purple-900 leading-tight mb-6">
              Empowering the
              <br />
              Next Generation of
              <br />
              <span className="block text-6xl md:text-7xl font-black">CHIP ENGINEERS</span>
            </h1>

            <p className="text-purple-700 max-w-xl mb-8">
              Empowering minds to engineer breakthroughs across materials, devices, and intelligent design.
            </p>

            <div className="flex items-center gap-4 mb-10">
              <button className="px-6 py-3 rounded-md bg-purple-700 text-white shadow hover:opacity-95">Get Started</button>
              <button className="px-6 py-3 rounded-md bg-amber-300 text-purple-900 font-semibold shadow hover:opacity-95">Learn More</button>
            </div>

            <div className="flex gap-12 items-center">
              <div>
                <div className="text-3xl font-extrabold text-purple-900">10k+</div>
                <div className="text-sm text-purple-700">Students and professionals</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-purple-900">5+</div>
                <div className="text-sm text-purple-700">Years in chip education excellence</div>
              </div>
            </div>
          </div>

          {/* Right: image / wafer */}
          {/* Right: Wafer Gradient Art */}
<div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
  <div className="relative w-[550px] h-[550px] flex items-center justify-center">

    {/* BACK Dark big circle */}
    <div className="absolute -right-32 -top-20 w-[500px] h-[500px] rounded-full bg-[] opacity-90"></div>

    {/* MAIN wafer gradient */}
    {/* Right: Wafer Gradient Art */}
<div className="w-full lg:w-5/12 flex justify-center lg:justify-end mt-10 lg:mt-0">
  <div className="
      relative 
      w-[260px] h-[260px] 
      sm:w-[330px] sm:h-[330px] 
      md:w-[450px] md:h-[450px] 
      lg:w-[550px] lg:h-[550px]
      flex items-center justify-center
    "
  >

    {/* BACK Dark big circle */}
    <div className="
        absolute 
        -right-10 -top-10 
        w-[260px] h-[260px] 
        sm:w-[330px] sm:h-[330px] 
        md:w-[450px] md:h-[450px] 
        lg:w-[500px] lg:h-[500px] 
        rounded-full bg-gradient-to-br from-purple-900 via-purple-700 to-amber-700 
        opacity-40 blur-xl
      ">
    </div>

    {/* MAIN wafer gradient */}
    <div className="
        relative z-10 
        w-[260px] h-[260px] 
        sm:w-[330px] sm:h-[330px] 
        md:w-[450px] md:h-[450px] 
        lg:w-[580px] lg:h-[580px] 
        rounded-full overflow-hidden
      "
    >
      {/* your same SVG */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        ... (KEEP SAME SVG CODE AS YOU HAVE) ...
      </svg>
    </div>

  </div>
</div>


    {/* bottom shadow circle */}
    <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-900 via-purple-700 to-amber-700 opacity-70"></div>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}

export default Home;
