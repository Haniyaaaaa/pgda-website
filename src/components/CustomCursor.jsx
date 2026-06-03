import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    if (mq.matches) return;

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const onOver = (e) => {
      const t = e.target;
      if (
        t.closest(
          "a, button, [role='button'], .field-card, .software-card, .step-circle, input, textarea"
        )
      ) {
        setHovering(true);
      }
    };

    const onOut = () => setHovering(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed z-[10000] hidden md:block"
      animate={{
        left: pos.x,
        top: pos.y,
        scale: hovering ? 2.2 : 1,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div
        className="-translate-x-1/2 -translate-y-1/2"
        style={{
          width: 8,
          height: 8,
          background: "var(--accent)",
          boxShadow: hovering
            ? "0 0 12px rgba(186,255,41,0.8)"
            : "0 0 6px rgba(186,255,41,0.5)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: hovering ? 20 : 14,
          height: 1,
          background: "var(--accent)",
          opacity: 0.6,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 1,
          height: hovering ? 20 : 14,
          background: "var(--accent)",
          opacity: 0.6,
        }}
      />
    </motion.div>
  );
}
