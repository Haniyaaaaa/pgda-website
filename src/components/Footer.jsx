const links = [
  { href: "#roadmap", label: "Roadmap" },
  { href: "#fields", label: "Fields" },
  { href: "#software", label: "Software" },
  { href: "#community", label: "Community" },
];

export default function Footer() {
  return (
    <footer
      className="border-t px-5 py-8 md:px-8"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <a href="#" className="font-syne text-base font-extrabold">
          <span style={{ color: "var(--accent)" }}>PGDA</span>
          <span style={{ color: "var(--text)" }}> · ALLIANCE</span>
        </a>

        <p
          className="order-3 text-center font-mono text-[0.65rem] md:order-2"
          style={{ color: "var(--muted)" }}
        >
          © 2026 Pakistan Game Developers Alliance — All rights reserved
        </p>

        <ul className="flex flex-wrap justify-center gap-6 md:order-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[0.65rem] label-upper transition-colors duration-200 hover:text-[var(--accent)]"
                style={{ color: "var(--muted)" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
