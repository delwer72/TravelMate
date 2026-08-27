const FeatureBanner = () => {
  return (
    <div className="w-full py-12 md:py-16 flex flex-col items-center justify-center text-center px-4 relative mt-10">
      
      {/* Background subtle glow (optional, to match the vibe) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Headline */}
      <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-foreground tracking-tight leading-tight mb-6 z-10">
        Everything you need for an <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-primary">
          unforgettable adventure.
        </span>
      </h2>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mt-2 leading-relaxed z-10">
        A carefully curated ecosystem for real-time collaboration, smart expense tracking, and personalized itineraries where everything flows seamlessly.
      </p>
      
    </div>
  );
};

export default FeatureBanner;