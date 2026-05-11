"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const followerX = useSpring(cursorX, { stiffness: 100, damping: 20 });
  const followerY = useSpring(cursorY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
      setVisible(true);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Dot utama */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-multiply"
        style={{ x: cursorX, y: cursorY, scale: clicking ? 0.5 : 1 }}
      />
      {/* Follower ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-primary/30 rounded-full pointer-events-none z-[9998]"
        style={{ x: followerX, y: followerY, translateX: "-14px", translateY: "-14px" }}
      />
    </>
  );
}