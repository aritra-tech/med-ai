import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* Logo and Name at Top Left */}
      <div className="flex items-center gap-3 px-8 pt-8">
        <div className="w-12 h-12 flex items-center justify-center">
          <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
            <span className="text-3xl font-extrabold text-black bg-white w-full h-full flex items-center justify-center">M</span>
          </div>
        </div>
        <span className="text-3xl font-extrabold text-white">Med<span className="text-purple-400">AI</span></span>
      </div>

      {/* Hero Content */}
      <div className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          <span className="bg-purple-600 text-white rounded-2xl px-4 py-2 inline-block mr-2">Empower Your Health</span>
          <span className="text-white">with AI Precision</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Seamlessly analyze, manage, and secure your prescriptions with next-generation AI. Take control of your healthcare journey—one prescription at a time.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.aritradas.medai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img
            src="/google-play-badge.png"
            alt="Get it on Google Play"
            className="h-14 md:h-16"
            style={{ width: 200, height: 200 }}
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
