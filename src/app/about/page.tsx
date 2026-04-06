import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "About | Suwannee Marina",
  description: "Learn about Suwannee Marina on Florida's Nature Coast — our history, mission, and the community we serve.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-b from-navy to-navy-light">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-white/70 text-lg">A proud part of Florida&apos;s Nature Coast</p>
        </div>
      </section>

      {/* History */}
      <section className="py-20 px-4 bg-sandy">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
            <p className="text-dark/60 leading-relaxed mb-4">
              Suwannee Marina sits at the heart of one of Florida&apos;s last
              unspoiled coastal communities. Located where the legendary
              Suwannee River meets the Gulf of Mexico, our marina has been a
              trusted home port for recreational boaters, commercial fishermen,
              and nature enthusiasts alike.
            </p>
            <p className="text-dark/60 leading-relaxed mb-4">
              The Suwannee River — made famous by Stephen Foster&apos;s iconic
              song — winds through some of the most pristine natural landscapes
              in the southeastern United States before reaching our doorstep.
              This unique location gives our visitors access to world-class
              inshore and offshore fishing, stunning wildlife viewing, and
              unforgettable sunsets over the Gulf.
            </p>
            <p className="text-dark/60 leading-relaxed">
              We take pride in being more than just a place to dock your boat.
              Suwannee Marina is a gathering place where lifelong friendships
              are forged, fishing stories are shared, and the pace of life
              slows down to match the gentle current of the river.
            </p>
          </ScrollReveal>

          <ScrollReveal delay="animate-delay-200">
            <div className="bg-gradient-to-br from-water to-navy rounded-2xl h-96 flex items-center justify-center">
              <svg className="w-32 h-32 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M3 15c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3M3 19c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3M3 11c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3" />
              </svg>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Location highlights */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">Why the Nature Coast?</h2>
            <p className="text-dark/60 max-w-2xl mx-auto">
              Unlike the developed beaches of South Florida, the Nature Coast
              remains wild and natural — and that&apos;s exactly how we like it.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "World-Class Fishing",
                desc: "From redfish and trout in the flats to grouper and snapper offshore, the waters around the Suwannee River are a fisherman's paradise.",
                icon: "🎣",
              },
              {
                title: "Pristine Nature",
                desc: "Manatees, dolphins, bald eagles, and more call this area home. Explore miles of unspoiled coastline and spring-fed rivers.",
                icon: "🌿",
              },
              {
                title: "Community Spirit",
                desc: "Regular cookouts, fishing tournaments, holiday celebrations, and more. Everyone is welcome at Suwannee Marina.",
                icon: "🤝",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={`animate-delay-${(i + 1) * 100}`}>
                <div className="text-center p-8">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-dark/60 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 px-4 bg-sandy">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-navy mb-6">Our Community</h2>
            <p className="text-dark/60 leading-relaxed mb-4 text-lg">
              At Suwannee Marina, we believe in bringing people together. From
              our famous cookouts and fish fries to holiday celebrations and
              community fundraisers, there&apos;s always something happening at
              the marina.
            </p>
            <p className="text-dark/60 leading-relaxed text-lg">
              Whether you&apos;re a seasoned captain or a first-time visitor,
              you&apos;ll feel like family from the moment you arrive. That&apos;s
              the Suwannee way.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
