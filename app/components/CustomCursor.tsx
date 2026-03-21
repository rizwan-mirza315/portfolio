"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const rx = useSpring(mx, { stiffness: 150, damping: 15, mass: 0.1 });
  const ry = useSpring(my, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    document.documentElement.style.cursor = "none";
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.style.cursor = "";
    };
  }, [mx, my]);

  return (
    <>
      <motion.div
        style={{
          position: "fixed", top: 0, left: 0,
          x: mx, y: my,
          translateX: "-50%", translateY: "-50%",
          width: 8, height: 8, borderRadius: "50%",
          background: "#fff",
          pointerEvents: "none", zIndex: 9999,
        }}
      />
      <motion.div
        style={{
          position: "fixed", top: 0, left: 0,
          x: rx, y: ry,
          translateX: "-50%", translateY: "-50%",
          width: 36, height: 36, borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.35)",
          pointerEvents: "none", zIndex: 9998,
        }}
      />
    </>
  );
}
