import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";
import { staggerHero } from "../hooks/useScrollReveal";

const titleLines = [
  { text: "BUILD", className: "", style: { color: "var(--text)" } },
  { text: "GAMES.", className: "", style: { color: "var(--accent)" } },
  { text: "BUILD CAREERS.", className: "stroke-title", style: {} },
];

const stats = [
  { end: 11, suffix: "+", label: "Fields", infinity: false },
  { end: 5, suffix: "", label: "Engines", infinity: false },
  { end: 7, suffix: "", label: "Steps", infinity: false },
  { end: 0, suffix: "", label: "Potential", infinity: true },
];

function StatItem({ end, suffix, label, infinity, active }) {
  const count = useCountUp(end, 1400, active && !infinity);

  return (
    <div>
      <p className="font-syne text-[2rem] font-extrabold leading-none" style={{ color: "var(--accent)" }}>
        {infinity ? "∞" : `${count}${suffix}`}
      </p>
      <p className="mt-1 font-mono text-[0.6rem] label-upper" style={{ color: "var(--muted)" }}>
        {label}
      </p>
    </div>
  );
}

export default function Hero() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

  return (
    <section
      className="relative flex min-h-screen items-center px-5 pt-24 pb-16 md:px-8 lg:px-12"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 0% 0%, var(--accent-dim), transparent 55%)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[0.6rem] label-upper"
          style={{ borderColor: "var(--border)", color: "var(--accent)" }}
        >
          <span>●</span> Pakistan Game Developers Alliance
        </motion.div>

        <motion.h1
          className="font-syne hero-title heading-tight mb-8 max-w-4xl font-extrabold"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: staggerHero } },
          }}
        >
          {titleLines.map((line) => (
            <motion.span
              key={line.text}
              className={`block ${line.className}`}
              style={line.style}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
            >
              {line.text}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.45 }}
          className="mb-10 max-w-[460px] font-mono text-[0.78rem] leading-[1.85]"
          style={{ color: "var(--muted)" }}
        >
          Your complete roadmap into the game development industry — for school, college,
          university students, and hobbyists. No prior programming or art experience required.
          Start building projects, not chasing expert status first.
        </motion.p>

        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.55 }}
          className="mb-10 grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <StatItem key={s.label} {...s} active={statsInView} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.65 }}
          className="flex flex-wrap gap-4"
        >
          <motion.a
            href="#roadmap"
            whileHover={{ y: -2 }}
            className="btn-primary label-upper inline-block rounded px-6 py-3.5 text-[0.72rem] font-medium"
          >
            START YOUR JOURNEY
          </motion.a>
          <motion.a
            href="#roadmap"
            whileHover={{ y: -2 }}
            className="btn-ghost label-upper inline-block rounded px-6 py-3.5 text-[0.72rem] font-medium"
          >
            VIEW ROADMAP →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
