"use client";
import { ParaFadeUp } from "@/src/components/animations";
import SectionContainer from "@/src/components/sections/SectionContainer";
import NextButton from "@/src/components/utils/buttons/NextButton";
import React from "react";

export default function PortfolioCTA() {
  return (
    <SectionContainer className="py-16 flex flex-col gap-2">
      <ParaFadeUp className="text-dark-grey dark:text-light-grey text-center text-2xl">
        Want to find out more?
      </ParaFadeUp>
      <NextButton
        text="Take a look at what I've created."
        delay={2}
        link="/portfolio"
        textStyle="text-xl"
      />
    </SectionContainer>
  );
}
