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
    <div className="relative z-10 w-[580px] h-[580px] rounded-full overflow-hidden">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="rg2" cx="50%" cy="45%" r="80%">
            <stop offset="0%" stopColor="#ffd36b"/>
            <stop offset="20%" stopColor="#ff7fbf"/>
            <stop offset="60%" stopColor="#8b5cf6"/>
            <stop offset="100%" stopColor="#5c1fcdff"/>
          </radialGradient>

          <pattern id="grid2" width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M0 0 L4 0 M0 0 L0 4" stroke="rgba(255,255,255,0.05)" strokeWidth="0.3"/>
          </pattern>
        </defs>

        <circle cx="50" cy="50" r="50" fill="url(#rg2)" />
        <rect width="100" height="100" fill="url(#grid2)" opacity="0.25" />

        <g strokeWidth="1" fill="none" strokeLinecap="round">
          <circle cx="50" cy="50" r="40" stroke="#ffd36b" strokeOpacity="0.25" />
          <circle cx="50" cy="50" r="35" stroke="#ff7fbf" strokeOpacity="0.25" />
          <circle cx="50" cy="50" r="28" stroke="#8b5cf6" strokeOpacity="0.25" />
          <circle cx="50" cy="50" r="20" stroke="#ffd36b" strokeOpacity="0.25" />
        </g>

        {/* subtle diagonal shine */}
        <rect x="-20" y="-10" width="160" height="160" fill="white" opacity="0.07" transform="rotate(50 50 50)" />
      </svg>
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

export default Home



// import React from 'react';

// function Home() {
//   return (
//     <section className="overflow-x-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
//       <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
//         <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          
//           {/* Left: text content */}
//           <div className="w-full lg:w-7/12">
//             <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-purple-900 leading-tight mb-6">
//               Empowering the
//               <br />
//               Next Generation of
//               <br />
//               <span className="block text-6xl md:text-7xl font-black">CHIP ENGINEERS</span>
//             </h1>

//             <p className="text-purple-700 max-w-xl mb-8">
//               Empowering minds to engineer breakthroughs across materials, devices, and intelligent design.
//             </p>

//             <div className="flex items-center gap-4 mb-10">
//               <button className="px-6 py-3 rounded-md bg-purple-700 text-white shadow hover:opacity-95 transition-opacity">Get Started</button>
//               <button className="px-6 py-3 rounded-md bg-amber-300 text-purple-900 font-semibold shadow hover:opacity-95 transition-opacity">Learn More</button>
//             </div>

//             <div className="flex gap-12 items-center">
//               <div>
//                 <div className="text-3xl font-extrabold text-purple-900">10k+</div>
//                 <div className="text-sm text-purple-700">Students and professionals</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-extrabold text-purple-900">5+</div>
//                 <div className="text-sm text-purple-700">Years in chip education excellence</div>
//               </div>
//             </div>
//           </div>

//           {/* Right: image / wafer gradient art */}
//           <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
//             <div className="relative w-96 h-96 md:w-[520px] md:h-[520px] flex items-center justify-center">
              
//               {/* large dark purple backdrop (partially off-canvas) */}
//               <div className="absolute -right-24 -top-16 w-80 h-80 md:w-[520px] md:h-[520px] rounded-full overflow-hidden opacity-95 transform translate-x-16" aria-hidden="true">
                
//                 {/* START: Wafer Gradient Art SVG */}
//                 <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
//                   <defs>
//                     <radialGradient id="rg" cx="50%" cy="40%" r="80%">
//                       <stop offset="0%" stopColor="#ffd36b" />
//                       <stop offset="20%" stopColor="#ff7fbf" />
//                       <stop offset="60%" stopColor="#8b5cf6" />
//                       <stop offset="100%" stopColor="#2b076e" />
//                     </radialGradient>

//                     <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
//                       <path d="M0 0 L4 0 M0 0 L0 4" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
//                     </pattern>
//                   </defs>

//                   {/* base circle filled with multicolor radial gradient */}
//                   <circle cx="50" cy="50" r="50" fill="url(#rg)" />

//                   {/* subtle grid overlay to mimic wafer pattern */}
//                   <rect x="0" y="0" width="100" height="100" fill="url(#grid)" opacity="0.25" />

//                   {/* concentric rings with varying colors and blend modes */}
//                   {/* Note: React JSX requires camelCase for SVG attributes like 'strokeWidth' and 'mixBlendMode' */}
//                   <g style={{mixBlendMode: 'screen'}}>
//                     <circle cx="50" cy="50" r="38" fill="none" stroke="#ffd36b" strokeOpacity="0.08" strokeWidth="2" />
//                     <circle cx="50" cy="50" r="30" fill="none" stroke="#ff7fbf" strokeOpacity="0.06" strokeWidth="3" />
//                     <circle cx="50" cy="50" r="22" fill="none" stroke="#8b5cf6" strokeOpacity="0.06" strokeWidth="2" />
//                   </g>

//                   {/* diagonal subtle sheen */}
//                   <rect x="-20" y="0" width="140" height="100" fill="white" opacity="0.02" transform="rotate(100 50 50)" />
//                 </svg>
//                 {/* END: Wafer Gradient Art SVG */}
//               </div>

//               {/* wafer-like circle in front (Placeholder for a more detailed image if needed, currently uses Tailwind for a shape) */}
//               <div className="relative z-10 w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl transform rotate-3 bg-purple-900/50">
//                 {/* If you wanted a photo of a wafer, you'd uncomment this: */}
//                 {/* <img src={waferImage} alt="wafer" className="w-full h-full object-cover" /> */}
                
//                 {/* subtle dark overlay to push colors darker (now applies to the whole circle) */}
//                 <div className="absolute inset-0 bg-black opacity-20 mix-blend-multiply" aria-hidden="true"></div>
//               </div>

//               {/* small dark accent circle bottom-left */}
//               <div className="absolute -left-24 -bottom-10 w-96 h-96 rounded-full bg-gradient-to-br from-amber-700 via-purple-800 to-purple-900 opacity-80 blur-sm"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Home;