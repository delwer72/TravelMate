import { FiShield, FiGlobe } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-24 md:py-32 text-center px-4 relative">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Main Headline */}
      <h1 className="text-5xl md:text-8xl lg:text-9xl font-extrabold text-foreground tracking-tight leading-tight mb-6 z-10">
        The Gateway to <br />
        Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-primary">Journeys</span>
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mb-12 z-10 leading-relaxed">
        Discover breathtaking destinations, create personalized day-by-day itineraries, and collaborate with travel partners in real-time. Plan your budget, explore local attractions, and share your true experiences with the community.
      </p>

      {/* Floating Badges / Tags */}
      <div className="flex flex-wrap justify-center gap-4 z-10">
        
        {/* Badge 1: Real-Time Collaboration */}
        <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
          <span className="text-sm font-medium text-foreground">Real-Time Collaboration</span>
        </div>

        {/* Badge 2: Expense Tracking */}
        <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm">
          <FiShield className="text-primary" />
          <span className="text-sm font-medium text-foreground">Smart Expense Tracking</span>
        </div>

        {/* Badge 3: Community Reviews */}
        <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm">
          <FiGlobe className="text-blue-400" />
          <span className="text-sm font-medium text-foreground">Authentic Community Reviews</span>
        </div>

      </div>
    </div>
  );
}