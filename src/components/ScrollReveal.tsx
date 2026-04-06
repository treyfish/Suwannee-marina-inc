"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  animation = "animate-fade-in-up",
  delay = "",
}: {
  children: React.ReactNode;
  className?: string;
  animation?: string;
  delay?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? `${animation} ${delay}` : "reveal-hidden"}`}
    >
      {children}
    </div>
  );
}
