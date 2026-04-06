import TideChart from "@/components/TideChart";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Tides | Suwannee Marina & Restaurant",
  description: "Live tide predictions for the Suwannee River Entrance from NOAA. Plan your trip with real-time tide data.",
};

export default function TidesPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-b from-navy to-water">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Suwannee River Tides
          </h1>
          <p className="text-white/70 text-lg">
            Live predictions for the Suwannee River Entrance — powered by NOAA
          </p>
        </div>
      </section>

      {/* Tide info */}
      <section className="py-20 px-4 bg-sandy">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-10">
            <div className="bg-navy/5 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-water/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-water" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-navy font-semibold">NOAA Station 8727520</p>
                <p className="text-dark/60 text-sm">
                  Suwannee River Entrance, Dixie County, FL. Datum: MLLW (Mean Lower Low Water).
                  All times shown in local time. Data is for planning purposes — always exercise caution on the water.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <TideChart />
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-navy mb-6">Tide Tips for the Suwannee</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Navigating the River Mouth",
                  desc: "The Suwannee River entrance can be shallow at low tide. Check the tide chart before heading out, and follow the marked channel.",
                },
                {
                  title: "Best Fishing Times",
                  desc: "Many local anglers prefer fishing during incoming tides, especially 2 hours before high tide when baitfish are most active.",
                },
                {
                  title: "Gulf Access",
                  desc: "For offshore trips, plan to leave on a rising tide and return before low tide to ensure safe passage through the river mouth.",
                },
                {
                  title: "Seasonal Variations",
                  desc: "Tides on the Nature Coast are generally smaller than other parts of Florida. Wind direction and seasonal patterns can affect water levels significantly.",
                },
              ].map((tip) => (
                <div key={tip.title} className="bg-sandy rounded-xl p-6">
                  <h3 className="font-semibold text-navy mb-2">{tip.title}</h3>
                  <p className="text-dark/60 text-sm leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
