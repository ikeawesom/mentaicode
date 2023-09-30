"use client";
import React from "react";
import { motion } from "framer-motion";
import { ANIM_DELAY_FACTOR, INITIAL_ANIM_TIME } from "@/src/utils/constants";
import { LightCheck } from "@/src/contexts/ThemeContext";

type BlurTypes = {
  headerType:
    | "header-light"
    | "header-dark"
    | "header-1"
    | "header-2"
    | "header-3";
};

export default function GlowBlur({ headerType }: BlurTypes) {
  if (!LightCheck())
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 0.14,
          y: 0,
          transition: {
            duration: INITIAL_ANIM_TIME,
            ease: "easeInOut",
            delay: ANIM_DELAY_FACTOR * 5,
          },
        }}
        viewport={{ once: true }}
        className={`top-5 bottom-5 min-[400px]:right-32 min-[400px]:left-32 right-10 left-10 absolute rounded-full blur-3xl pointer-events-none ${
          headerType === "header-light" || headerType === "header-dark"
            ? "bg-header-end"
            : headerType === "header-1"
            ? "bg-header-1-end"
            : headerType === "header-2"
            ? "bg-header-2-end"
            : headerType === "header-3"
            ? "bg-header-3-start"
            : ""
        }`}
      />
    );
}
