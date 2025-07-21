import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-24 gap-10 md:gap-0 fade-in">
      <div className="flex-1 flex flex-col justify-center items-start max-w-xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-[#3d3a2a] font-serif">Hi, I’m Kyle Vu</h1>
        <h2 className="text-xl md:text-2xl font-medium mb-6 text-[#6b6652] font-sans">International student & aspiring AI Developer</h2>
        <p className="text-lg md:text-xl mb-8 text-[#6b6652] font-sans">
          I’m currently studying a Foundation Program in Melbourne and preparing for my Bachelor of Computer Science majoring in AI. I created this site to document my journey, share my projects, and grow my skills.
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center relative">
        <div className="rounded-full overflow-hidden shadow-xl bg-[#ece8df] p-2 md:p-4" style={{boxShadow: '0 8px 32px 0 rgba(120, 110, 80, 0.18)'}}>
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="Kyle Vu portrait placeholder"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full"
          />
        </div>
        {/* Soft organic glow */}
        <div className="absolute -z-10 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#e9e6df] opacity-70 blur-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      {/* Scroll down indicator */}
      <div className="absolute left-1/2 bottom-8 md:bottom-12 -translate-x-1/2 flex flex-col items-center animate-fadeInUp">
        <span className="block w-1.5 h-8 rounded-full bg-[#b6b09a] mb-2 opacity-60" />
        <svg width="24" height="24" fill="none" stroke="#b6b09a" strokeWidth="2" viewBox="0 0 24 24" className="animate-bounce-slow">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
} 