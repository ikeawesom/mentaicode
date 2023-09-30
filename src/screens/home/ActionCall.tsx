"use client";
import { DivFadeUp, ParaFadeUp } from "@/src/components/animations";
import GlowBlur from "@/src/components/sections/GlowBlur";
import SectionContainer from "@/src/components/sections/SectionContainer";
import SectionContentCard from "@/src/components/sections/SectionContentCard";
import GetStartedButton from "@/src/components/utils/buttons/GetStartedButton";
import MainHeader from "@/src/components/utils/headers/MainHeader";
import { LightCheck } from "@/src/contexts/ThemeContext";
import Link from "next/link";
import React from "react";

export default function ActionCallSection() {
  return (
    <SectionContainer>
      <SectionContentCard className="flex flex-col gap-8 max-w-6xl">
        <GlowBlur headerType="header-dark" />
        <DivFadeUp className="flex flex-col gap-3 items-center justify-center">
          <MainHeader
            headerDark="header-dark"
            headerLight="header-light"
            className="text-8xl max-[639px]:text-7xl max-[320px]:text-5xl"
          >
            Ready to embark on your Digital Journey?
          </MainHeader>
          <ParaFadeUp
            className={`text-center font-light text-xl max-[320px]:text-base
              ${LightCheck() ? "text-custom-black" : "text-custom-white"}`}
          >
            Let's collaborate to build remarkable digtial solutions tailored to
            your needs. Whether it's a cutting-edge website, innovative software
            or stunning UI/UX design, I've got you covered.
          </ParaFadeUp>
        </DivFadeUp>
        <div className="flex flex-col gap-4 items-center justify-center">
          <GetStartedButton text="Start your journey" />
          <Link
            href="/"
            className="dark:text-custom-white text-custom-black hover:dark:text-secondary hover:text-secondary duration-200 underline underline-offset-4"
          >
            Schedule a call
          </Link>
        </div>
      </SectionContentCard>
    </SectionContainer>
  );
}
