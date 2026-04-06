import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Quick Links Section */}
      <section className="py-20 px-4 bg-sandy">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Welcome to Suwannee Marina
            </h2>
            <p className="text-dark/60 max-w-2xl mx-auto text-lg">
              Nestled at the mouth of the Suwannee River on Florida&apos;s Nature
              Coast, we&apos;ve been serving boaters, anglers, and nature lovers
              for generations.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                href: "/services",
                title: "Full-Service Marina",
                desc: "Boat slips, fuel dock, bait & tackle, and everything you need for a great day on the water.",
                icon: (
                  <svg className="w-10 h-10 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17h1l2-5h12l2 5h1M5 17a2 2 0 104 0M15 17a2 2 0 104 0" />
                  </svg>
                ),
              },
              {
                href: "/tides",
                title: "Live Tide Data",
                desc: "Real-time tide predictions for the Suwannee River Entrance powered by NOAA.",
                icon: (
                  <svg className="w-10 h-10 text-water" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3M3 19c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3" />
                  </svg>
                ),
              },
              {
                href: "/gallery",
                title: "Life on the River",
                desc: "Fishing, sunsets, community events, and the natural beauty of the Suwannee — see it all.",
                icon: (
                  <svg className="w-10 h-10 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <ScrollReveal key={item.href} delay={`animate-delay-${(i + 1) * 100}`}>
                <Link href={item.href} className="block group">
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                    <div className="flex justify-center mb-5">{item.icon}</div>
                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-crimson transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-dark/60 leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="animate-slide-in-left">
            <div className="bg-gradient-to-br from-navy to-water rounded-2xl h-80 flex items-center justify-center">
              <svg className="w-24 h-24 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              A Tradition on the Suwannee
            </h2>
            <p className="text-dark/60 leading-relaxed mb-4">
              Suwannee Marina has been a cornerstone of the Nature Coast boating
              community for decades. Whether you&apos;re heading offshore to the
              Gulf, casting a line in the river, or just soaking in a legendary
              sunset, this is where it all begins.
            </p>
            <p className="text-dark/60 leading-relaxed mb-8">
              We&apos;re more than a marina — we&apos;re a gathering place for
              friends, families, and fellow adventurers.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-full transition-all duration-300 hover:bg-navy-light hover:scale-105 hover:shadow-lg"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-crimson to-crimson-dark">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Plan Your Visit Today
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Check the tides, explore our services, and get directions to the marina.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-crimson font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
