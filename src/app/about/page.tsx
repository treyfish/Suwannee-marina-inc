import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "About | Suwannee Marina & Restaurant",
  description: "Learn about Suwannee Marina & Restaurant on Florida's Nature Coast — waterfront dining, full-service marina, and the community we serve.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="pt-28 pb-16 px-4 bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-white/60 text-lg">Waterfront dining and a working marina on Florida&apos;s Nature Coast</p>
        </div>
      </section>

      {/* History */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-dark mb-6">Our Story</h2>
            <p className="text-driftwood leading-relaxed mb-4">
              Suwannee Marina &amp; Restaurant sits where the legendary Suwannee
              River meets the Gulf of Mexico — right at the heart of one of
              Florida&apos;s last unspoiled coastal communities. We&apos;re a
              casual waterfront restaurant serving fresh seafood and Southern
              comfort food every morning and afternoon, and a full-service
              marina outfitting boaters and anglers for the waters ahead.
            </p>
            <p className="text-driftwood leading-relaxed mb-4">
              Pull up a chair for a western omelet or a bacon cheeseburger,
              grab a fresh fish sandwich before heading out, or sit on the
              waterfront and watch the river roll by. We open early and close
              at 2:00 PM — because around here, the best part of the day
              starts at sunrise.
            </p>
            <p className="text-driftwood leading-relaxed">
              On the marina side, we keep you stocked with live shrimp, frozen
              bait, fuel, and covered boat storage for vessels up to 24 feet.
              Whether you&apos;re running offshore to the Gulf or working the
              flats for redfish, this is where your trip begins and ends.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-gradient-to-br from-teal/70 to-marsh/70 rounded-xl h-96 flex items-center justify-center">
              <p className="text-white/50 text-sm text-center px-8">
                Photo: The marina at golden hour
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Location highlights */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl font-bold text-dark mb-4">Why the Nature Coast?</h2>
            <p className="text-driftwood max-w-2xl mx-auto">
              Unlike the developed beaches of South Florida, the Nature Coast
              remains wild and natural — and that&apos;s exactly how we like it.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "World-Class Fishing",
                desc: "From redfish and trout in the flats to grouper and snapper offshore, the waters around the Suwannee River are a fisherman's paradise.",
                icon: (
                  <svg className="w-10 h-10 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3M3 19c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3" />
                  </svg>
                ),
              },
              {
                title: "Pristine Nature",
                desc: "Manatees, dolphins, bald eagles, and more call this area home. Explore miles of unspoiled coastline and spring-fed rivers.",
                icon: (
                  <svg className="w-10 h-10 text-marsh" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                title: "Community Spirit",
                desc: "Cookouts, fishing tournaments, holiday celebrations, and good neighbors. Everyone is welcome at Suwannee Marina.",
                icon: (
                  <svg className="w-10 h-10 text-sunset" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={(i + 1) * 100}>
                <div className="text-center p-8">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                  <p className="text-driftwood leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-dark mb-6">Our Community</h2>
            <p className="text-driftwood leading-relaxed mb-4 text-lg">
              At Suwannee Marina &amp; Restaurant, we believe in bringing people
              together. Whether it&apos;s over a plate of fresh-caught fish, a
              morning cup of coffee on the dock, or a holiday cookout with the
              whole community — this place runs on good food and good company.
            </p>
            <p className="text-driftwood leading-relaxed text-lg">
              Whether you&apos;re a seasoned captain or just passing through,
              you&apos;ll feel like family from the moment you walk in.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
