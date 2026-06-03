import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const links = [
  { href: "#roadmap", label: "Roadmap" },
  { href: "#fields", label: "Fields" },
  { href: "#software", label: "Software" },
  { href: "#community", label: "Community" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-5 sm:py-4 md:px-8">
        <div className="flex items-center justify-between gap-3">
          <a href="#" className="shrink-0 transition-opacity duration-200 hover:opacity-90" onClick={closeMenu}>
            <Logo size="nav" />
          </a>

          <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
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

          <div className="flex items-center gap-2 sm:gap-3">
            <motion.a
              href="#community"
              whileHover={{ y: -2 }}
              className="btn-primary label-upper hidden rounded px-3 py-2 text-[0.62rem] font-medium sm:inline-block sm:px-4 sm:py-2.5 sm:text-[0.68rem]"
            >
              JOIN NOW ↗
            </motion.a>

            <button
              type="button"
              className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded border md:hidden"
              style={{ borderColor: "var(--border)" }}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span
                className="block h-0.5 w-5 transition-all duration-200"
                style={{
                  background: "var(--accent)",
                  transform: menuOpen ? "translateY(4px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block h-0.5 w-5 transition-all duration-200"
                style={{
                  background: "var(--accent)",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-0.5 w-5 transition-all duration-200"
                style={{
                  background: "var(--accent)",
                  transform: menuOpen ? "translateY(-4px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden md:hidden"
            >
              <ul
                className="mt-4 flex flex-col gap-1 border-t pt-4"
                style={{ borderColor: "var(--border)" }}
              >
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="label-upper block rounded px-2 py-3 text-[0.72rem] transition-colors duration-200 hover:bg-[var(--accent-dim)] hover:text-[var(--accent)]"
                      style={{ color: "var(--muted)" }}
                      onClick={closeMenu}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#community"
                    className="btn-primary label-upper block rounded px-4 py-3 text-center text-[0.68rem] font-medium"
                    onClick={closeMenu}
                  >
                    JOIN NOW ↗
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
