const LOGO_SRC = "/logo.jpeg";

export default function Logo({ size = "nav", showAlliance = false, className = "" }) {
  const sizes = {
    nav: { img: "h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12", text: "text-base sm:text-lg", gap: "gap-2.5 sm:gap-3" },
    footer: { img: "h-10 w-10", text: "text-sm", gap: "gap-2.5" },
    hero: { img: "h-14 w-14 sm:h-16 sm:w-16", text: "text-xl", gap: "gap-3" },
  };
  const s = sizes[size] ?? sizes.nav;

  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      <span
        className="relative shrink-0 rounded-lg p-0.5"
        style={{
          background: "linear-gradient(135deg, var(--accent) 0%, rgba(194,231,218,0.6) 100%)",
          boxShadow: "0 0 20px rgba(186, 255, 41, 0.25)",
        }}
      >
        <img
          src={LOGO_SRC}
          alt="PGDA — Pakistan Game Developers Alliance"
          className={`${s.img} rounded-md object-cover`}
          style={{ background: "var(--surface)" }}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-syne font-extrabold ${s.text}`} style={{ color: "var(--accent)" }}>
          PGDA
        </span>
        {showAlliance && (
          <span
            className="mt-0.5 font-mono label-upper text-[0.5rem] sm:text-[0.55rem]"
            style={{ color: "var(--muted)" }}
          >
            Alliance
          </span>
        )}
      </span>
    </span>
  );
}
