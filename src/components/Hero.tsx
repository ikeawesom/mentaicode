"use client";
import React from "react";
import { LightCheck } from "@/src/contexts/ThemeContext";
import GetStartedButton from "./utilities/buttons/GetStartedButton";
import SecondaryButton from "./utilities/buttons/SecondaryButton";
import DivFadeUp from "./animations/DivFadeUp";
import MainHeader from "./utilities/headers/MainHeader";
import { ParaFadeUp } from "./animations";

type HeroType = {
  header: string;
  subtext?: string;
  children?: React.ReactNode;
};

export default function Hero({ header, subtext, children }: HeroType) {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full">
      <DivFadeUp className="flex flex-col gap-4 text-center w-full justify-center items-center">
        <MainHeader headerLight="header-light" headerDark="header-dark">
          {header}
        </MainHeader>
        <ParaFadeUp
          className={
            "lg:w-[700px] md:w-[540px] sm:w-[450px] max-[499px]:text-md max-[320px]:text-sm font-light subtext " +
            (LightCheck() ? "text-custom-black" : "text-custom-white")
          }
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
