"use client";
import React from "react";
import { LightCheck } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { ANIM_DELAY_FACTOR, INITIAL_ANIM_TIME } from "@/constants.js";
import GetStartedButton from "./buttons/GetStartedButton";
import SecondaryButton from "./buttons/SecondaryButton";
import DivFadeUp from "./animations/DivFadeUp";

type HeroType = {
  header: string;
  subtext?: string;
  children?: React.ReactNode;
};

export default function Hero({ header, subtext, children }: HeroType) {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full">
      <DivFadeUp className="flex flex-col gap-4 text-center w-full justify-center items-center">
        <h1
          className={`${
            LightCheck() ? "header-light drop-shadow-md" : "header-dark"
          } lg:w-[860px] md:w-[620px] sm:w-[500px] max-[639px]:text-5xl max-[320px]:text-4xl`}
        >
          {header}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: INITIAL_ANIM_TIME,
              ease: "easeInOut",
              delay: ANIM_DELAY_FACTOR,
            },
          }}
          viewport={{ once: true }}
          className={
            "lg:w-[700px] md:w-[540px] sm:w-[450px] max-[499px]:text-md max-[320px]:text-sm font-light subtext " +
            (LightCheck() ? "text-custom-black" : "text-custom-white")
          }
        >
          {subtext}
        </motion.p>
      </DivFadeUp>
      {children}
    </div>
  );
}

export function HeroButtons() {
  return (
    <DivFadeUp
      className="flex items-center justify-center max-[420px]:flex-col max-[420px]:gap-y-2"
      delay={2}
    >
      <GetStartedButton />
      <SecondaryButton
        link="/portfolio"
        text="View my work"
        style="hover:text-primary duration-150 transition-colors"
      />
    </DivFadeUp>
  );
}
