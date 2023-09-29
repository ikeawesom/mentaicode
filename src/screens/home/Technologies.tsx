"use client";

import React, { useState } from "react";
import { LightCheck } from "@/src/contexts/ThemeContext";
import Image from "next/image";
import { DivFadeUp, LiFadeIn, ParaFadeUp } from "@/src/components/animations";
import SectionContainer from "@/src/components/sections/SectionContainer";
import MainHeader from "@/src/components/utils/headers/MainHeader";
import { ICONS_SIZE, TECH_LIST } from "@/src/utils/constants";
import SectionContentCard from "@/src/components/sections/SectionContentCard";
import GlowBlur from "@/src/components/sections/GlowBlur";
import DarkCard from "@/src/components/utils/cards/DarkCard";
import Link from "next/link";

import { useLottie } from "lottie-react";
import ArrowRightPrimary from "@/public/assets/images/lottie/arrow-right-primary.json";
import PrimaryButton from "@/src/components/utils/buttons/PrimaryButton";

export default function TechnologiesSection() {
  const [hoverState, setHoverState] = useState(false);
  const options = {
    animationData: ArrowRightPrimary,
    loop: hoverState,
    style: { width: 30, height: 30 },
  };

  const arrow = useLottie(options).View;

  return (
    <SectionContainer>
      <SectionContentCard className="flex flex-col gap-8 max-w-6xl">
        <GlowBlur headerType="header-1" />
        <DivFadeUp className="flex flex-col gap-3 items-center justify-center">
          <MainHeader headerDark="header-1" headerLight="header-1">
            Popular technologies I work with.
          </MainHeader>
          <ParaFadeUp
            className={`text-center font-light
              ${LightCheck() ? "text-custom-black" : "text-custom-white"}`}
          >
            Using a mixture of extensive technologies, I strive to make
            brilliant web and native applications using simple yet effective
            tech stacks to build dreams.
          </ParaFadeUp>
        </DivFadeUp>

        <DarkCard className="flex flex-col gap-8 items-center justify-center">
          <ul className="list-none flex gap-x-5 gap-y-10 items-center justify-center flex-wrap">
            {TECH_LIST.map(
              (item, index) =>
                item.featured && (
                  <LiFadeIn duration={1} key={index} delay={index}>
                    <div className="flex flex-col gap-2 items-center justify-center relative group hover:scale-90 ease-in-out duration-150 h-full p-2">
                      <Image
                        src={`assets/images/technologies/${item.icon}`}
                        alt={item.title}
                        width={ICONS_SIZE}
                        height={ICONS_SIZE}
                      />
                      <h4 className="text-sm bg-custom-black text-custom-white dark:bg-custom-white dark:text-custom-black py-1 px-4 rounded-md absolute dark:min-[300px]:-bottom-8 dark:min-[300px]:group-hover:-bottom-10 -bottom-5 group-hover:-bottom-7  group-hover:opacity-100 opacity-0 duration-300 transition-all ease-in-out text-center">
                        {item.title}
                      </h4>
                    </div>
                  </LiFadeIn>
                )
            )}
          </ul>

          <DivFadeUp>
            <Link
              href="/portfolio"
              className="text-primary font-semibold hover:brightness-110 duration-200 ease-in-out"
              onMouseOver={() => setHoverState(true)}
              onMouseLeave={() => setHoverState(false)}
            >
              <span className="flex gap-2 items-center justify-center">
                Steal the entire stack <span>{arrow}</span>
              </span>
            </Link>
          </DivFadeUp>
        </DarkCard>
      </SectionContentCard>
    </SectionContainer>
  );
}
