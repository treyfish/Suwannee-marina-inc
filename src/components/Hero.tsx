import Link from "next/link";
import CompassLogo from "./CompassLogo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background simulating ocean/sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-water" />

      {/* Subtle wave pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
          <path
            d="M0,400 C360,300 720,500 1080,350 C1260,280 1380,420 1440,400 L1440,800 L0,800 Z"
            fill="white"
          />
          <path
            d="M0,500 C240,450 480,550 720,480 C960,410 1200,530 1440,470 L1440,800 L0,800 Z"
            fill="white"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in flex justify-center mb-8">
          <CompassLogo size={100} className="drop-shadow-2xl" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          Suwannee Marina
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-4 animate-fade-in-up animate-delay-200">
          Your Gateway to the Gulf
        </p>

        <p className="text-base sm:text-lg text-white/60 mb-10 max-w-2xl mx-auto animate-fade-in-up animate-delay-300">
          Located on Florida&apos;s pristine Nature Coast at the mouth of the
          historic Suwannee River. Full-service marina with boat slips, fuel,
          bait &amp; tackle, and more.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-crimson text-white font-semibold rounded-full transition-all duration-300 hover:bg-crimson-dark hover:scale-105 hover:shadow-lg hover:shadow-crimson/25"
          >
            Our Services
          </Link>
          <Link
            href="/tides"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 text-white font-semibold rounded-full border border-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-105 backdrop-blur-sm"
          >
            Check Tides
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
