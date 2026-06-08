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
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 600, damping: 32, mass: 0.4 }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          width: hovering ? 36 : 18,
          height: hovering ? 36 : 18,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        style={{
          border: "2px solid var(--accent)",
          background: hovering ? "rgba(186, 255, 41, 0.12)" : "transparent",
          boxShadow: hovering ? "0 0 16px rgba(186, 255, 41, 0.35)" : "none",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 5,
          height: 5,
          background: "var(--accent)",
        }}
      />
    </motion.div>
  );
}
