import { motion } from "framer-motion";

const links = [
  { href: "#roadmap", label: "Roadmap" },
  { href: "#fields", label: "Fields" },
  { href: "#software", label: "Software" },
  { href: "#community", label: "Community" },
];

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed top-0 right-0 left-0 z-50 border-b font-mono"
      style={{
        background: "rgba(26, 27, 65, 0.8)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href="#" className="font-syne text-lg font-extrabold tracking-tight">
          <span style={{ color: "var(--accent)" }}>PGDA</span>
          <span style={{ color: "var(--text)" }}> · ALLIANCE</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="label-upper text-[0.68rem] transition-colors duration-200 hover:text-[var(--accent)]"
                style={{ color: "var(--muted)" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href="#community"
          whileHover={{ y: -2 }}
          className="btn-primary label-upper rounded px-4 py-2.5 text-[0.68rem] font-medium"
        >
          JOIN NOW ↗
        </motion.a>
      </div>
    </motion.nav>
  );
}
