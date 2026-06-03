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

        <div className="relative flex flex-col gap-6 md:flex-row md:gap-12">
          <div
            className="absolute top-5 bottom-5 left-5 hidden w-px md:block"
            style={{
              background: "linear-gradient(to bottom, var(--accent), transparent)",
              marginLeft: 19,
            }}
          />

          <div className="flex shrink-0 flex-row gap-2 overflow-x-auto pb-2 md:flex-col md:gap-0 md:overflow-visible md:pb-0">
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  className="step-circle relative z-10 mb-0 flex shrink-0 md:mb-10"
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

                  {isActive && step.id === 1 && step.mainFields && (
                    <div className="mt-5 space-y-4">
                      {step.understandBody?.map((line) => (
                        <p
                          key={line}
                          className="font-mono text-[0.72rem] leading-relaxed"
                          style={{ color: "var(--muted)" }}
                        >
                          {line}
                        </p>
                      ))}
                      <p
                        className="font-mono text-[0.62rem] label-upper"
                        style={{ color: "var(--cyan)" }}
                      >
                        Main fields include
                      </p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {step.mainFields.map((field) => (
                          <li
                            key={field}
                            className="flex items-start gap-2 rounded border px-3 py-2 font-mono text-[0.68rem] leading-snug"
                            style={{ borderColor: "var(--border)", color: "var(--text)" }}
                          >
                            <span className="shrink-0" style={{ color: "var(--accent)" }}>
                              •
                            </span>
                            {field}
                          </li>
                        ))}
                      </ul>
                      {step.understandFooter && (
                        <p
                          className="font-mono text-[0.72rem] leading-relaxed"
                          style={{ color: "var(--muted)" }}
                        >
                          {step.understandFooter}
                        </p>
                      )}
                      {step.fieldsAnchor && (
                        <a
                          href={`#${step.fieldsAnchor}`}
                          className="inline-block font-mono text-[0.65rem] label-upper transition-colors hover:text-[var(--accent)]"
                          style={{ color: "var(--cyan)" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Explore all fields →
                        </a>
                      )}
                    </div>
                  )}

                  {isActive && step.id === 4 && step.beginnerGames && (
                    <div className="mt-5">
                      <p
                        className="mb-3 font-mono text-[0.62rem] label-upper"
                        style={{ color: "var(--cyan)" }}
                      >
                        Instead create small beginner games like
                      </p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {step.beginnerGames.map((game) => (
                          <li
                            key={game}
                            className="flex items-center gap-2 rounded border px-3 py-2 font-mono text-[0.68rem]"
                            style={{ borderColor: "var(--border)", color: "var(--text)" }}
                          >
                            <span style={{ color: "var(--accent)" }}>•</span>
                            {game}
                          </li>
                        ))}
                      </ul>
                      {step.footerNote && (
                        <p
                          className="mt-4 font-mono text-[0.72rem] leading-relaxed"
                          style={{ color: "var(--muted)" }}
                        >
                          {step.footerNote}
                        </p>
                      )}
                      {step.linkedIn && (
                        <a
                          href={step.linkedIn.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex flex-col gap-1 rounded border px-4 py-3 font-mono text-[0.68rem] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent-dim)]"
                          style={{ borderColor: "var(--border)", color: "var(--text)" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="label-upper text-[0.6rem]" style={{ color: "var(--accent)" }}>
                            {step.linkedIn.label} ↗
                          </span>
                          <span style={{ color: "var(--muted)" }}>{step.linkedIn.hint}</span>
                        </a>
                      )}
                    </div>
                  )}

                  {isActive && step.id === 5 && (
                    <ul className="mt-4 space-y-1 font-mono text-[0.68rem]" style={{ color: "var(--muted)" }}>
                      <li>
                        →{" "}
                        <a
                          href={step.linkedIn?.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-[var(--accent)]"
                          style={{ color: "var(--cyan)" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          LinkedIn (mention PGDA) ↗
                        </a>
                      </li>
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
