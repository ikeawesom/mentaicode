"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Splashscreen() {
  return (
    <>
      <motion.div
        className="bg-primary fixed top-0 bottom-0 right-full w-screen h-screen z-30"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: 0, width: "0%" }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          delay: 0.4,
        }}
      />

      <motion.div
        className="bg-secondary fixed top-0 bottom-0 right-full w-screen h-screen z-40 "
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: 0, width: "0%" }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          delay: 0.2,
        }}
      />

      <motion.div
        className="bg-border fixed top-0 bottom-0 right-full w-screen h-screen z-50"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: 0, width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      />
    </>
  );
}
