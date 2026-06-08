import { motion } from "framer-motion";
import { fields } from "../data/fields";
import FieldIcon from "./FieldIcon";
import {
  revealAnimate,
  revealInitial,
  revealTransition,
  revealViewport,
  staggerFast,
} from "../hooks/useScrollReveal";

export default function FieldsGrid() {
  return (
    <section id="fields" className="px-5 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={revealInitial}
          whileInView={revealAnimate}
          viewport={revealViewport}
          transition={revealTransition}
          className="mb-3 font-mono text-[0.65rem] label-upper"
          style={{ color: "var(--muted)" }}
        >
          01 · EXPLORE
        </motion.p>
        <motion.h2
          initial={revealInitial}
          whileInView={revealAnimate}
          viewport={revealViewport}
          transition={{ ...revealTransition, delay: 0.05 }}
          className="font-syne mb-12 text-3xl font-extrabold heading-tight md:text-4xl lg:text-5xl"
        >
          Choose Your Field
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: staggerFast } },
          }}
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          }}
        >
          {fields.map((field) => (
            <motion.div
              key={field.id}
              variants={{
                hidden: revealInitial,
                visible: { ...revealAnimate, transition: revealTransition },
              }}
              className="field-card group relative cursor-default overflow-hidden rounded border p-5 transition-colors duration-200"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <div className="relative z-10 transition-colors duration-200 group-hover:text-[var(--bg)]">
                <FieldIcon
                  id={field.id}
                  className="mb-3 block text-[1.35rem] transition-colors duration-200 group-hover:text-[var(--bg)]"
                  style={{ color: "var(--accent)" }}
                />
                <h3 className="font-syne text-sm font-bold leading-tight">{field.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
