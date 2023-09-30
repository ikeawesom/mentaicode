"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Splashscreen from "./Splashscreen";

type WrapperType = {
  children?: React.ReactNode;
};

export default function AnimationWrapper({ children }: WrapperType) {
  const pathname = usePathname();
  return (
    <AnimatePresence key={pathname} mode="wait">
      <Splashscreen />
      {children}
    </AnimatePresence>
  );
}
