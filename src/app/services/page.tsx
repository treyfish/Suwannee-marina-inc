import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata = {
  title: "Menu & Services | Suwannee Marina & Restaurant",
  description: "Casual waterfront dining with fresh seafood and Southern comfort food, plus full-service marina with boat slips, fuel, bait & tackle, and more.",
};

const restaurantServices = [
  {
    title: "Breakfast",
    description:
      "Start your morning right with western omelets, French toast, eggs any style, and hot coffee. Served fresh every day we're open.",
    icon: (
      <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Lunch",
    description:
      "Bacon cheeseburgers, fresh fish sandwiches, fried shrimp baskets, and Southern comfort food favorites. All served waterfront.",
    icon: (
      <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    title: "Fresh Seafood",
    description:
      "Locally caught fish prepared fresh daily. From the Suwannee River to your plate — it doesn't get any fresher than this.",
    icon: (
      <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3" />
      </svg>
    ),
  },
  {
    title: "Hours & Info",
    description:
      "Open 6 days a week, closing at 2:00 PM. Casual waterfront dining — come by boat or by car. Call (352) 542-9159.",
    icon: (
      <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const marinaServices = [
  {
    title: "Covered Boat Storage",
    description:
      "Covered storage for vessels up to 24 feet. Keep your boat protected from the elements and ready to launch at a moment's notice.",
    icon: (
      <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Fuel Dock",
    description:
      "Gas and diesel fuel available at our convenient fuel dock. Fill up before heading out to the Gulf or top off on your way back in. Competitive pricing every day.",
    icon: (
      <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Bait & Tackle",
    description:
      "Live shrimp when available, frozen bait, fishing rigs, lures, and all the supplies you need. Local knowledge from our experienced staff.",
    icon: (
      <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    title: "Boat Ramp Access",
    description:
      "Public boat ramp with easy access to the Suwannee River and Gulf of Mexico. Ample trailer parking available for day-trippers and visitors.",
    icon: (
      <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    title: "Fishing Guides & Charters",
    description:
      "Connect with experienced local fishing guides for inshore flats fishing, nearshore trips, or offshore Gulf adventures. We'll help you book the perfect trip.",
    icon: (
      <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Community Events",
    description:
      "From cookouts and fish fries to holiday celebrations and fishing tournaments — there's always something happening at the marina. Everyone is welcome.",
    icon: (
      <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-b from-navy to-navy-light">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Menu &amp; Services</h1>
          <p className="text-white/70 text-lg">
            Waterfront dining and everything you need for a great day on the water
          </p>
        </div>
      </section>

      {/* Restaurant section */}
      <section className="py-20 px-4 bg-sandy">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-12">
            <h2 className="text-3xl font-bold text-navy mb-2">The Restaurant</h2>
            <p className="text-dark/60">Fresh seafood and Southern comfort food, served waterfront</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {restaurantServices.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={`animate-delay-${((i % 4) + 1) * 100}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Marina section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-12">
            <h2 className="text-3xl font-bold text-navy mb-2">The Marina</h2>
            <p className="text-dark/60">Full-service marina at the mouth of the Suwannee River</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marinaServices.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={`animate-delay-${((i % 3) + 1) * 100}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-sandy">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Ready to Visit?
            </h2>
            <p className="text-dark/60 text-lg mb-8">
              Come by boat or by car. We&apos;re open 6 days a week — breakfast through lunch.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-crimson text-white font-semibold rounded-full transition-all duration-300 hover:bg-crimson-dark hover:scale-105 hover:shadow-lg hover:shadow-crimson/25"
            >
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
