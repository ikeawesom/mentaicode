import React from "react";
import { motion } from "framer-motion";
import { INITIAL_ANIM_TIME, ANIM_DELAY_FACTOR } from "@/src/utils/constants";

type DivProps = {
  className?: string;
  children?: React.ReactNode;
  delay?: number;
};
export default function ParaFadeUp({ className, children, delay }: DivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: INITIAL_ANIM_TIME,
          ease: "easeInOut",
          delay: delay ? ANIM_DELAY_FACTOR * delay : 0,
        },
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
