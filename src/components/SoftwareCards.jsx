import { motion } from "framer-motion";
import { software } from "../data/software";
import {
  revealAnimate,
  revealInitial,
  revealTransition,
  revealViewport,
  staggerFast,
} from "../hooks/useScrollReveal";

function DifficultyBadge({ level }) {
  const isBeginner = level === "Beginner";
  return (
    <span
      className="font-mono text-[0.58rem] label-upper inline-block rounded px-2 py-1"
      style={{
        background: isBeginner ? "var(--accent)" : "var(--cyan)",
        color: isBeginner ? "var(--bg)" : "var(--surface)",
      }}
    >
      {level}
    </span>
  );
}

export default function SoftwareCards() {
  return (
    <section id="software" className="px-5 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={revealInitial}
          whileInView={revealAnimate}
          viewport={revealViewport}
          transition={revealTransition}
          className="mb-3 font-mono text-[0.65rem] label-upper"
          style={{ color: "var(--muted)" }}
        >
          03 · TOOLS
        </motion.p>
        <motion.h2
          initial={revealInitial}
          whileInView={revealAnimate}
          viewport={revealViewport}
          transition={{ ...revealTransition, delay: 0.05 }}
          className="font-syne mb-12 text-3xl font-extrabold heading-tight md:text-4xl lg:text-5xl"
        >
          Choose Your Weapon
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: staggerFast } },
          }}
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}
        >
          {software.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, scale: 0.96 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: revealTransition,
                },
              }}
              className="software-card group relative overflow-hidden rounded border transition-all duration-[0.22s] hover:-translate-y-1.5 hover:border-[var(--accent)]"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <div
                className="software-card-accent absolute bottom-0 left-0 h-0.5 w-full"
                style={{ background: "var(--accent)" }}
              />
              <div className="p-6">
                <DifficultyBadge level={item.difficulty} />
                <h3
                  className="font-syne mt-4 text-2xl font-extrabold heading-tight md:text-[1.5rem]"
                  style={{ color: "var(--text)" }}
                >
                  {item.name}
                </h3>
                <p
                  className="mt-3 font-mono text-[0.7rem] leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {item.description}
                </p>
                <p
                  className="mt-4 border-t pt-4 font-mono text-[0.6rem] leading-relaxed"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                >
                  {item.specs}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={revealInitial}
          whileInView={revealAnimate}
          viewport={revealViewport}
          transition={{ ...revealTransition, delay: 0.1 }}
          className="mt-10 rounded border p-6 font-mono text-[0.68rem] leading-relaxed"
          style={{ borderColor: "var(--border)", color: "var(--muted)", background: "var(--surface)" }}
        >
          <p className="label-upper mb-3 text-[0.6rem]" style={{ color: "var(--cyan)" }}>
            Quick picks
          </p>
          <p>
            <strong style={{ color: "var(--text)" }}>Unity</strong> — new, low/mid PC, ship games fast.{" "}
            <strong style={{ color: "var(--text)" }}>Godot</strong> — very low-end, open-source.{" "}
            <strong style={{ color: "var(--text)" }}>Unreal</strong> — capable PC, AAA visuals.{" "}
            <strong style={{ color: "var(--text)" }}>Blender</strong> — 3D models & environments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
