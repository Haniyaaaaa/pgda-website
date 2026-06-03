import { motion } from "framer-motion";
import { revealViewport } from "../hooks/useScrollReveal";

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="circuit-bg relative overflow-hidden px-5 py-24 md:px-8 md:py-32 lg:px-12"
      style={{
        backgroundColor: "var(--surface)",
        backgroundImage: `
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px),
          radial-gradient(ellipse 70% 50% at 100% 100%, rgba(194,231,218,0.06), transparent 60%)
        `,
        backgroundSize: "40px 40px, 40px 40px, auto",
      }}
    >
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-[0.65rem] label-upper"
          style={{ color: "var(--cyan)" }}
        >
          JOIN THE GUILD
        </motion.p>

        <h2
          className="font-syne mb-6 font-extrabold heading-tight leading-[0.95]"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className="block"
            style={{ color: "var(--text)" }}
          >
            Ready to
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.1 }}
            className="block"
            style={{ color: "var(--accent)" }}
          >
            Level Up?
          </motion.span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 font-mono text-[0.75rem]"
          style={{ color: "var(--muted)" }}
        >
          Connect with Pakistan&apos;s most active game dev community. Join PGDA ITC for game jams,
          teams, and commercial projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="https://chat.whatsapp.com/EdbOlMRDQGN1CEVHTXJ0MA"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="label-upper rounded border px-6 py-3.5 font-mono text-[0.72rem] transition-all duration-200"
            style={{
              borderColor: "rgba(37, 211, 102, 0.3)",
              color: "#25D366",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(37, 211, 102, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            WhatsApp ↗
          </motion.a>
          <motion.a
            href="https://discord.gg/QR46nakFP"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="label-upper rounded border px-6 py-3.5 font-mono text-[0.72rem] transition-all duration-200"
            style={{
              borderColor: "rgba(88, 101, 242, 0.3)",
              color: "#5865F2",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(88, 101, 242, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Discord ↗
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
