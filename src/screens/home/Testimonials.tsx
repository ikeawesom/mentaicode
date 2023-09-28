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
            className={
              "text-center font-light subtext lg:w-[700px] md:w-[540px] sm:w-[450px] max-[499px]:text-md max-[320px]:text-sm " +
              (LightCheck() ? "text-custom-black" : "text-custom-white")
            }
          >
            Real tesimonials from happy co-workers: What people are saying about
            my work.
          </ParaFadeUp>
        </DivFadeUp>
        <ul className="list-none grid grid-cols-2 gap-x-10 relative">
          {TESTIMONIALS.map((item, index) => (
            <LiFadeIn duration={1} key={index} delay={index}>
              <div className="flex flex-col gap-5 items-start justify-start  min-[300px]:dark:from-slate-700 min-[300px]:dark:to-slate-800 rounded-md min-[330px]:p-5 h-full p-2 border-transparent border-2 dark:border-gray-700 dark:bg-gradient-to-br">
                <div className="flex flex-row gap-x-3 items-center justify-start">
                  <div className="rounded-full w-[80px] h-[80px] overflow-hidden relative">
                    <Image
                      src={`/assets/images/testimonials/${item.src}`}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1 items-start justify-center">
                    <p className="dark:text-gray-300 font-bold">{item.name}</p>
                    <p className="dark:text-gray-300">{item.from}</p>
                  </div>
                </div>
                <h4 className="dark:text-gray-300 font-light text-xl">
                  "{item.quote}"
                </h4>
              </div>
            </LiFadeIn>
          ))}
        </ul>
      </SectionContentCard>
    </SectionContainer>
  );
}
