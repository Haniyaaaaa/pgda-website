import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "../data/heroSlides";

const INTERVAL_MS = 4000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[index];

  return (
    <div className="relative w-full">
      <div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border sm:aspect-video"
        style={{
          borderColor: "var(--border)",
          background: "var(--card)",
          boxShadow: "0 0 60px rgba(186, 255, 41, 0.08), 0 24px 48px rgba(0,0,0,0.4)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16"
          style={{
            background: "linear-gradient(180deg, transparent, rgba(13,14,32,0.6))",
          }}
        />

        <AnimatePresence mode="wait">
          <motion.img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-contain"
          />
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === index ? 20 : 6,
                background: i === index ? "var(--accent)" : "var(--border)",
              }}
            />
          ))}
        </div>
        <p className="font-mono text-[0.58rem] label-upper" style={{ color: "var(--muted)" }}>
          {String(index + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
