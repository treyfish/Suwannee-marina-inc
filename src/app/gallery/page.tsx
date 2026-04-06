import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Gallery | Suwannee Marina & Restaurant",
  description: "Photos from Suwannee Marina & Restaurant — fishing, sunsets, waterfront dining, and life on the Nature Coast.",
};

const categories = [
  { name: "The Restaurant", gradient: "from-sunset to-sunset-dark", count: 4 },
  { name: "Fishing", gradient: "from-teal to-teal-dark", count: 6 },
  { name: "Sunsets", gradient: "from-sunset to-driftwood", count: 6 },
  { name: "Events", gradient: "from-marsh to-marsh-dark", count: 6 },
  { name: "Marina Life", gradient: "from-teal-dark to-dark", count: 6 },
];

const placeholderIcons: Record<string, React.ReactNode> = {
  "The Restaurant": (
    <svg className="w-12 h-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1" />
    </svg>
  ),
  Fishing: (
    <svg className="w-12 h-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 15c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3" />
    </svg>
  ),
  Sunsets: (
    <svg className="w-12 h-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Events: (
    <svg className="w-12 h-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  "Marina Life": (
    <svg className="w-12 h-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
};

export default function GalleryPage() {
  return (
    <>
      <section className="pt-28 pb-16 px-4 bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-white/60 text-lg">
            Life on the Suwannee — fishing, sunsets, and good times
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto space-y-16">
          {categories.map((cat) => (
            <div key={cat.name}>
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className={`w-1 h-8 rounded-full bg-gradient-to-b ${cat.gradient}`} />
                  {cat.name}
                </h2>
              </ScrollReveal>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: cat.count }).map((_, i) => (
                  <ScrollReveal key={i} delay={((i % 3) + 1) * 100}>
                    <div
                      className={`bg-gradient-to-br ${cat.gradient} rounded-xl aspect-square flex items-center justify-center group cursor-pointer overflow-hidden relative`}
                    >
                      <div className="transition-transform duration-300 group-hover:scale-110">
                        {placeholderIcons[cat.name]}
                      </div>

                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end">
                        <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white text-sm font-medium">
                            {cat.name} #{i + 1}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-driftwood-light text-sm">
              Demo gallery — placeholder images shown. Follow Suwannee Marina &amp; Restaurant on{" "}
              <a href="#" className="text-teal hover:text-marsh transition-colors font-medium">
                Facebook
              </a>{" "}
              for the latest photos and updates.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
