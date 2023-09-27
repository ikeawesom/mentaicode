import React from "react";
import { motion } from "framer-motion";
import { INITIAL_ANIM_TIME, ANIM_DELAY_FACTOR } from "@/src/constants.jsx";

type LiProps = {
  className?: string;
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
};
export default function LiFadeIn({
  className,
  children,
  delay,
  duration,
}: LiProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: duration ? duration : INITIAL_ANIM_TIME,
          ease: "easeInOut",
          delay: delay ? ANIM_DELAY_FACTOR * delay : 0,
        },
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.li>
  );
}
