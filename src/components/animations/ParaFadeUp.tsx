"use client";
import React from "react";
import { motion } from "framer-motion";
import { INITIAL_ANIM_TIME, ANIM_DELAY_FACTOR } from "@/src/utils/constants";
import { twMerge } from "tailwind-merge";

type DivProps = {
  className?: string;
  children?: React.ReactNode;
  delay?: number;
};
export default function ParaFadeUp({ className, children, delay }: DivProps) {
  return (
    <motion.p
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
      className={twMerge(
        `lg:w-[700px] md:w-[540px] sm:w-[450px] max-[499px]:text-md`,
        className
      )}
    >
      {children}
    </motion.p>
  );
}
