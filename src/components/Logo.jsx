const LOGO_SRC = "/logo.jpeg";

export default function Logo({ size = "nav", showAlliance = false, className = "" }) {
  const sizes = {
    nav: { img: "h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10", text: "text-sm sm:text-base" },
    footer: { img: "h-8 w-8", text: "text-[0.6rem]" },
  };
  const s = sizes[size] ?? sizes.nav;

  return (
    <span className={`inline-flex items-center gap-2 sm:gap-2.5 ${className}`}>
      <img
        src={LOGO_SRC}
        alt="PGDA"
        className={`${s.img} shrink-0 rounded object-contain`}
      />
      <span className={`font-syne font-extrabold leading-none ${s.text}`} style={{ color: "var(--accent)" }}>
        PGDA
      </span>
      {showAlliance && (
        <span
          className="hidden font-mono label-upper leading-none sm:inline text-[0.65rem]"
          style={{ color: "var(--muted)" }}
        >
          · ALLIANCE
        </span>
      )}
    </span>
  );
}
