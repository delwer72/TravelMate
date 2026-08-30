export default function BestServiceBanner() {
  return (
    <section className="relative w-full py-20 px-4 bg-zinc-950 text-white overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Subtle World Map Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-15 bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500' fill='%23ffffff'%3E%3Cpath d='M150 150Q200 100 250 150T350 150M600 200Q650 120 750 180T850 220M200 300Q300 350 350 250M700 320Q750 380 800 300' stroke='%23ffffff' stroke-width='80' stroke-linecap='round' opacity='0.3'/%3E%3C/svg%3E")`
        }}
      />

      {/* Top and Bottom Gradient Fades */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/60 via-transparent to-zinc-950 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 leading-tight">
          We always try to give you <br className="hidden sm:block" />
          the best service
        </h2>

        <p className="text-sm sm:text-base text-zinc-400 max-w-lg leading-relaxed font-normal">
          We always try to make our customer Happy. We provide all kind of facilities. Your Satisfaction is our main priority.
        </p>
      </div>
    </section>
  );
}