import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Quick Links Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
              Welcome to Suwannee Marina &amp; Restaurant
            </h2>
            <p className="text-driftwood max-w-2xl mx-auto text-lg leading-relaxed">
              Nestled at the mouth of the Suwannee River on Florida&apos;s Nature
              Coast, we serve up fresh seafood and Southern favorites every
              morning and afternoon — and we&apos;ve been outfitting boaters and
              anglers for generations.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                href: "/services",
                title: "Waterfront Restaurant",
                desc: "Fresh seafood, bacon cheeseburgers, western omelets, and Southern favorites. Open 6 days a week, breakfast through lunch.",
                icon: (
                  <svg className="w-10 h-10 text-sunset" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                href: "/tides",
                title: "Live Tide Data",
                desc: "Real-time tide predictions for the Suwannee River Entrance. Know before you go.",
                icon: (
                  <svg className="w-10 h-10 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3M3 19c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3" />
                  </svg>
                ),
              },
              {
                href: "/gallery",
                title: "Life on the River",
                desc: "Fishing, sunsets, good food, and good people. This is what the Suwannee is all about.",
                icon: (
                  <svg className="w-10 h-10 text-marsh" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <ScrollReveal key={item.href} delay={(i + 1) * 100}>
                <Link href={item.href} className="block group">
                  <div className="bg-white rounded-xl p-8 shadow-sm border border-cream-dark/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                    <div className="flex justify-center mb-5">{item.icon}</div>
                    <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-sunset transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-driftwood leading-relaxed">{item.desc}</p>
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
          <ScrollReveal>
            <div className="bg-gradient-to-br from-marsh/80 to-teal/80 rounded-xl h-80 flex items-center justify-center">
              <p className="text-white/50 text-sm text-center px-8">
                Photo: Sunrise over the Suwannee River dock
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">
              A Tradition on the Suwannee
            </h2>
            <p className="text-driftwood leading-relaxed mb-4">
              Suwannee Marina &amp; Restaurant has been a cornerstone of the
              Nature Coast community for decades. Pull up by boat or by car for
              a fresh-cooked breakfast, stock up on live shrimp and tackle, fuel
              up, and head out to the Gulf.
            </p>
            <p className="text-driftwood leading-relaxed mb-8">
              Or just sit on the waterfront and watch the river roll by.
              That&apos;s the Suwannee way.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-marsh text-white font-semibold rounded-lg transition-all duration-300 hover:bg-marsh-dark hover:scale-105 hover:shadow-lg"
            >
              Our Story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Come Hungry, Leave Happy
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Check the tides, browse our menu, and find your way to the best
              waterfront dining on the Nature Coast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-sunset text-white font-semibold rounded-lg transition-all duration-300 hover:bg-sunset-dark hover:scale-105 hover:shadow-lg"
              >
                Get Directions
              </Link>
              <a
                href="tel:3525429159"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                Call (352) 542-9159
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
