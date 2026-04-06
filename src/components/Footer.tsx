import Link from "next/link";
import CompassLogo from "./CompassLogo";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <CompassLogo size={36} />
              <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-serif)" }}>
                Suwannee Marina &amp; Restaurant
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Waterfront dining and your gateway to the Gulf on Florida&apos;s
              Nature Coast. At the mouth of the historic Suwannee River.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Menu & Services" },
                { href: "/tides", label: "Tide Charts" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Visit Us</h3>
            <div className="flex flex-col gap-2 text-sm">
              <p>94 SE 903rd Ave</p>
              <p>Suwannee, FL 32692</p>
              <p className="mt-2">
                <a href="tel:3525429159" className="hover:text-white transition-colors">(352) 542-9159</a>
              </p>
              <p>Open 6 Days a Week</p>
              <p>Closes at 2:00 PM</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-sunset transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Suwannee Marina &amp; Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
