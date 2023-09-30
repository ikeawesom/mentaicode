"use client";
import React from "react";
import { LightCheck } from "@/src/contexts/ThemeContext";
import GetStartedButton from "../utils/buttons/GetStartedButton";
import SecondaryButton from "../utils/buttons/SecondaryButton";
import DivFadeUp from "../animations/DivFadeUp";
import MainHeader from "../utils/headers/MainHeader";
import { ParaFadeUp } from "../animations";

type HeroType = {
  header: string;
  subtext?: string;
  children?: React.ReactNode;
};

export default function Hero({ header, subtext, children }: HeroType) {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full">
      <DivFadeUp
        className="flex flex-col gap-4 text-center w-full justify-center items-center"
        delay={2}
      >
        <MainHeader headerLight="header-light" headerDark="header-dark">
          {header}
        </MainHeader>
        <ParaFadeUp
          delay={3}
          className={`font-light text-center
            ${LightCheck() ? "text-custom-black" : "text-custom-white"}`}
        >
          {subtext}
        </ParaFadeUp>
      </DivFadeUp>
      {children}
    </div>
  );
}

export function HeroButtons() {
  return (
    <DivFadeUp
      className="flex items-center justify-center max-[420px]:flex-col max-[420px]:gap-y-2"
      delay={4}
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
