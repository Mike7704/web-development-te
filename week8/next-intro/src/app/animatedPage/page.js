"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { AnimateIn } from "@/components/AnimateIn";

export default function AnimatedPage() {
  return (
    <div>
      <h1>Animation Examples</h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        This fades in
      </motion.div>
      <AnimateIn>This animates in</AnimateIn>
      <motion.div
        className="box"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        style={{ width: `200px`, height: `200px`, background: `white` }}
      />
      <Link href={`/`}>Back</Link>
    </div>
  );
}
