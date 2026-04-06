import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Suwannee Marina & Restaurant | Waterfront Dining & Full-Service Marina",
  description:
    "Suwannee Marina & Restaurant on Florida's Nature Coast. Casual waterfront dining with fresh seafood and Southern comfort food, plus boat slips, fuel, bait & tackle, and live Suwannee River tide data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
