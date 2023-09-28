"use client";

import React from "react";
import SectionContainer from "@/src/components/sections/SectionContainer";
import SectionContentCard from "@/src/components/sections/SectionContentCard";
import MainHeader from "@/src/components/utils/headers/MainHeader";
import { ICONS_SIZE, TESTIMONIALS } from "@/src/utils/constants";
import Image from "next/image";
import { DivFadeUp, LiFadeIn, ParaFadeUp } from "@/src/components/animations";
import GlowBlur from "@/src/components/sections/GlowBlur";
import { LightCheck } from "@/src/contexts/ThemeContext";
import DarkCard from "@/src/components/utils/cards/DarkCard";

export default function TestimonialsSection() {
  return (
    <SectionContainer>
      <SectionContentCard>
        <GlowBlur headerType="header-2" />
        <DivFadeUp className="flex flex-col gap-3 items-center justify-center">
          <MainHeader headerDark="header-2" headerLight="header-2">
            Don't just take my word for it. Here is what others have to say...
          </MainHeader>
          <ParaFadeUp
            className={`text-center font-light
              ${LightCheck() ? "text-custom-black" : "text-custom-white"}`}
          >
            Real tesimonials from happy co-workers: What people are saying about
            my work.
          </ParaFadeUp>
        </DivFadeUp>
        <ul className="list-none grid lg:grid-cols-2 gap-10 relative grid-cols-1">
          {TESTIMONIALS.map((item, index) => (
            <LiFadeIn duration={1} key={index} delay={index}>
              <DarkCard className="flex flex-col gap-5 min-[330px]:items-start justify-start h-full">
                <div className="flex min-[330px]:flex-row flex-col gap-3 items-center justify-start">
                  <div className="rounded-full w-[80px] aspect-square overflow-hidden relative">
                    <Image
                      src={`/assets/images/testimonials/${item.src}`}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-y-1 min-[330px]:items-start items-center justify-center text-center min-[330px]:text-start">
                    <p className="dark:text-gray-300 font-bold sm:text-lg text-sm">
                      {item.name}
                    </p>
                    <p className="dark:text-gray-400 sm:text-lg text-base">
                      {item.from}
                    </p>
                  </div>
                </div>
                <h4 className="dark:text-gray-300 font-light sm:text-xl text-lg">
                  "{item.quote}"
                </h4>
              </DarkCard>
            </LiFadeIn>
          ))}
        </ul>
      </SectionContentCard>
    </SectionContainer>
  );
}
