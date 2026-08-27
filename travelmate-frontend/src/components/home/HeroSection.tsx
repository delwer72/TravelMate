import React from "react";
import Image from "next/image";

export default function HeroSection(): React.JSX.Element {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end justify-center pb-16 md:pb-24">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.png" // Replace with your image path in /public folder
        alt="Mountain waterfall canyon landscape"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-lg mb-6 leading-tight">
          Your Imagination Is <br />
          Your Only Limit
        </h1>

        {/* Subtitle */}
        <p className="text-xs md:text-sm text-gray-200/90 max-w-xl font-normal mb-8 leading-relaxed tracking-wide">
          We always try to make our customer Happy. We provide all kind of facilities.
          <br className="hidden sm:block" />
          Your Satisfaction is our main priority
        </p>

        {/* Action Button */}
        <button
          type="button"
          className="bg-[#00be5d] hover:bg-[#00a852] active:scale-95 text-white font-medium text-sm md:text-base px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-emerald-500/20"
        >
          Discover more
        </button>
      </div>
    </section>
  );
}