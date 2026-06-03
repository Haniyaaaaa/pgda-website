import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { steps } from "../data/steps";
import { videosByStep } from "../data/videos";
import VideoPanel from "./VideoPanel";
import {
  revealAnimate,
  revealInitial,
  revealTransition,
  revealViewport,
  staggerMedium,
} from "../hooks/useScrollReveal";

export default function Roadmap() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="roadmap" className="px-5 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={revealInitial}
          whileInView={revealAnimate}
          viewport={revealViewport}
          transition={revealTransition}
          className="mb-3 font-mono text-[0.65rem] label-upper"
          style={{ color: "var(--muted)" }}
        >
          02 · 7 CHECKPOINTS
        </motion.p>
        <motion.h2
          initial={revealInitial}
          whileInView={revealAnimate}
          viewport={revealViewport}
          transition={{ ...revealTransition, delay: 0.05 }}
          className="font-syne mb-16 text-3xl font-extrabold heading-tight md:text-4xl lg:text-5xl"
        >
          The Journey
        </motion.h2>

        <div className="relative flex gap-8 md:gap-12">
          <div
            className="absolute top-5 bottom-5 left-5 hidden w-px md:block"
            style={{
              background: "linear-gradient(to bottom, var(--accent), transparent)",
              marginLeft: 19,
            }}
          />

          <div className="flex shrink-0 flex-col gap-0">
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  className="step-circle relative z-10 mb-8 flex last:mb-0 md:mb-10"
                  aria-label={`Step ${step.id}: ${step.label}`}
                >
                  <motion.span
                    whileTap={{ scale: 0.92 }}
                    className="flex h-10 w-10 items-center justify-center border font-mono text-[0.65rem] label-upper transition-all duration-200"
                    style={{
                      borderColor: isActive ? "var(--accent)" : "var(--border)",
                      background: isActive ? "var(--accent)" : "transparent",
                      color: isActive ? "var(--bg)" : "var(--muted)",
                    }}
                  >
                    {String(step.id).padStart(2, "0")}
                  </motion.span>
                </button>
              );
            })}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={{ visible: { transition: { staggerChildren: staggerMedium } } }}
            className="min-w-0 flex-1 space-y-10 md:space-y-12"
          >
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              const videoData = step.videoKey ? videosByStep[step.videoKey] : null;

              return (
                <motion.article
                  key={step.id}
                  id={`step-${step.id}`}
                  variants={{
                    hidden: { opacity: 0, x: -32 },
                    visible: {
                      opacity: isActive ? 1 : 0.45,
                      x: 0,
                      transition: revealTransition,
                    },
                  }}
                  onClick={() => setActiveStep(step.id)}
                  onKeyDown={() => {}}
                  role="button"
                  tabIndex={0}
                  className={`cursor-pointer rounded border p-6 transition-all duration-200 md:p-8 ${
                    isActive ? "" : "opacity-60 hover:opacity-80"
                  }`}
                  style={{
                    borderColor: isActive ? "var(--accent)" : "var(--border)",
                    background: isActive ? "var(--card)" : "transparent",
                  }}
                >
                  <p className="mb-2 font-mono text-[0.62rem] label-upper" style={{ color: "var(--accent)" }}>
                    STEP {String(step.id).padStart(2, "0")} · {step.label}
                  </p>
                  <h3 className="font-syne mb-3 text-xl font-bold md:text-2xl">{step.title}</h3>
                  <p className="font-mono text-[0.72rem] leading-relaxed" style={{ color: "var(--muted)" }}>
                    {step.description}
                  </p>

                  {step.anchor && isActive && (
                    <a
                      href={`#${step.anchor}`}
                      className="mt-4 inline-block font-mono text-[0.65rem] label-upper transition-colors hover:text-[var(--accent)]"
                      style={{ color: "var(--cyan)" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Go to {step.anchor} section →
                    </a>
                  )}

                  <AnimatePresence>
                    {isActive && videoData && (
                      <VideoPanel key={step.id} data={videoData} />
                    )}
                  </AnimatePresence>

                  {isActive && step.id === 5 && (
                    <ul className="mt-4 space-y-1 font-mono text-[0.68rem]" style={{ color: "var(--muted)" }}>
                      <li>→ LinkedIn (mention PGDA)</li>
                      <li>→ GitHub</li>
                      <li>→ ArtStation (artists)</li>
                      <li>→ Itch.io</li>
                    </ul>
                  )}

                  {isActive && step.id === 7 && (
                    <ul className="mt-4 space-y-1 font-mono text-[0.68rem]" style={{ color: "var(--muted)" }}>
                      <li>→ Small games · GDDs · Environment art</li>
                      <li>→ Animations · UI · Technical projects</li>
                    </ul>
                  )}
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
