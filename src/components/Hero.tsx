import Link from "next/link";
import CompassLogo from "./CompassLogo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Photo-ready background — swap bg class for a real image later */}
      <div
        className="absolute inset-0 bg-dark"
        style={{
          backgroundImage: "linear-gradient(135deg, #2D2A26 0%, #3D566E 40%, #4A8B9B 70%, #2D2A26 100%)",
        }}
      />
      {/* Dark overlay for text readability over future photos */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-8" style={{ opacity: 1 }}>
          <CompassLogo size={110} className="drop-shadow-2xl" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-serif)" }}>
          Suwannee Marina{" "}<br className="sm:hidden" />&amp; Restaurant
        </h1>

        <p className="text-lg sm:text-xl text-cream/80 mb-3 tracking-wide uppercase" style={{ letterSpacing: "0.15em", fontFamily: "var(--font-serif)" }}>
          Est. on the Suwannee River
        </p>

        <p className="text-base sm:text-lg text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          Fresh seafood and Southern comfort food served waterfront.
          Full-service marina with bait, fuel, and covered storage.
          Open 6 days a week at the mouth of the Suwannee.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-sunset text-white font-semibold rounded-lg transition-all duration-300 hover:bg-sunset-dark hover:scale-105 hover:shadow-lg"
          >
            See Menu &amp; Services
          </Link>
          <Link
            href="/tides"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 text-white font-semibold rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-105 backdrop-blur-sm"
          >
            Check Tides
          </Link>
          <a
            href="tel:3525429159"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-marsh text-white font-semibold rounded-lg transition-all duration-300 hover:bg-marsh-dark hover:scale-105"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (352) 542-9159
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
