export default function Logo({ size = "nav", className = "" }) {
  const textSize =
    size === "footer" ? "text-base" : "text-xl sm:text-2xl md:text-[1.65rem]";

  return (
    <span
      className={`font-syne font-extrabold leading-none tracking-tight ${textSize} ${className}`}
      style={{ color: "var(--accent)" }}
    >
      PGDA
    </span>
  );
}
