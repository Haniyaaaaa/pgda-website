import { motion } from "framer-motion";
import { staggerHero } from "../hooks/useScrollReveal";
import HeroCarousel from "./HeroCarousel";

const titleLines = [
  { text: "BUILD GAMES.", className: "", style: { color: "var(--accent)" } },
  { text: "BUILD TEAMS.", className: "", style: { color: "var(--text)" } },
  { text: "BUILD YOUR FUTURE.", className: "stroke-title", style: {} },
];

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center px-5 pt-24 pb-16 md:px-8 lg:px-12"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 0% 0%, var(--accent-dim), transparent 55%), radial-gradient(ellipse 50% 40% at 100% 20%, rgba(98,144,195,0.08), transparent 50%)",
      }}
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[0.6rem] label-upper"
            style={{ borderColor: "var(--border)", color: "var(--accent)" }}
          >
            <span>●</span> Pakistan Game Developers Alliance
          </motion.div>

          <motion.h1
            className="font-syne hero-title heading-tight mb-4 max-w-lg font-extrabold"
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

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.45 }}
            className="mb-8 max-w-md space-y-2 font-mono text-[0.75rem] leading-[1.8]"
            style={{ color: "var(--muted)" }}
          >
            <p className="font-syne text-[0.95rem] font-bold leading-snug" style={{ color: "var(--text)" }}>
              Learn How Games Are Made
            </p>
            <p>
              Join PGDA, follow the roadmap, build small projects, and start your game development journey today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#roadmap"
              whileHover={{ y: -2 }}
              className="btn-primary label-upper inline-block rounded px-6 py-3.5 text-[0.72rem] font-medium"
            >
              VIEW ROADMAP
            </motion.a>
            <motion.a
              href="#community"
              whileHover={{ y: -2 }}
              className="btn-ghost label-upper inline-block rounded px-6 py-3.5 text-[0.72rem] font-medium"
            >
              JOIN PGDA →
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.65 }}
            className="mt-10 sm:hidden"
          >
            <HeroCarousel />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="hidden min-w-0 sm:block"
        >
          <HeroCarousel />
        </motion.div>
      </div>
    </section>
  );
}
