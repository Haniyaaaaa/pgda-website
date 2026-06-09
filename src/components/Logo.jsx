export default function Logo({ size = "nav", className = "" }) {
  const textSize = size === "footer" ? "text-base" : "text-lg sm:text-xl";

  return (
    <span
      className={`font-syne font-extrabold leading-none tracking-tight ${textSize} ${className}`}
      style={{ color: "var(--accent)" }}
    >
      PGDA
    </span>
  );
}
