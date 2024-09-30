"use client";

import { DivFadeUp, ParaFadeUp } from "@/src/components/animations";
import SectionContainer from "@/src/components/sections/SectionContainer";
import MainHeader from "@/src/components/utils/headers/MainHeader";
import { LightCheck } from "@/src/contexts/ThemeContext";
import React from "react";

export default function General() {
  return (
    <SectionContainer className="min-[420px]:py-10 py-0">
      <DivFadeUp
        className="flex flex-col text-center w-full justify-center items-center relative"
        delay={2}
      >
        <DivFadeUp className="flex flex-col gap-3 items-center justify-center">
          <MainHeader headerDark="header-1" headerLight="header-1">
            Welcome to my Playground.
          </MainHeader>
          <ParaFadeUp
            className={`text-center font-light
              ${LightCheck() ? "text-custom-black" : "text-custom-white"}`}
          >
            Check out some of my work to see what I can do.
          </ParaFadeUp>
        </DivFadeUp>
      </DivFadeUp>
    </SectionContainer>
  );
}
