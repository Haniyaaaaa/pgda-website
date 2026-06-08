import { motion } from "framer-motion";
import { revealViewport } from "../hooks/useScrollReveal";
import { PGDA_LINKEDIN } from "../data/steps";

const communityLinks = [
  {
    label: "PGDA WhatsApp",
    url: "https://chat.whatsapp.com/EdbOlMRDQGN1CEVHTXJ0MA",
    color: "#25D366",
    border: "rgba(37, 211, 102, 0.3)",
    hover: "rgba(37, 211, 102, 0.1)",
  },
  {
    label: "ITC WhatsApp",
    url: "https://chat.whatsapp.com/CxM9EDrIuaMInMgWPcrIVi",
    color: "#25D366",
    border: "rgba(37, 211, 102, 0.3)",
    hover: "rgba(37, 211, 102, 0.1)",
  },
  {
    label: "PGDA Discord",
    url: "https://discord.gg/QR46nakFP",
    color: "#5865F2",
    border: "rgba(88, 101, 242, 0.3)",
    hover: "rgba(88, 101, 242, 0.1)",
  },
  {
    label: "PGDA LinkedIn",
    url: PGDA_LINKEDIN,
    color: "#0A66C2",
    border: "rgba(10, 102, 194, 0.3)",
    hover: "rgba(10, 102, 194, 0.1)",
  },
];

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
          JOIN A TEAM THROUGH ITC
        </motion.p>

        <h2
          className="font-syne mb-6 font-extrabold heading-tight leading-[0.95]"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className="block"
            style={{ color: "var(--text)" }}
          >
            Join PGDA ITC
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.1 }}
            className="block"
            style={{ color: "var(--accent)" }}
          >
            Indie Team Center
          </motion.span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 font-mono text-[0.75rem] leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          PGDA ITC is where members find teammates, join game jams, create indie teams, and work on
          small game projects. Connect with Pakistan&apos;s most active game dev community and start
          building together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {communityLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="label-upper rounded border px-5 py-3 font-mono text-[0.68rem] transition-all duration-200"
              style={{ borderColor: link.border, color: link.color }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = link.hover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label} ↗
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
