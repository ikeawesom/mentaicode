"use client";

import React from "react";
import { LightCheck } from "@/src/contexts/ThemeContext";
import Image from "next/image";
import { DivFadeUp, LiFadeIn, ParaFadeUp } from "@/src/components/animations";
import SectionContainer from "@/src/components/sections/SectionContainer";
import MainHeader from "@/src/components/utilities/headers/MainHeader";
import { TECH_LIST } from "@/src/constants";

export default function TechnologiesSection() {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-8 max-w-6xl">
        <DivFadeUp className="flex flex-col gap-3 items-center justify-center">
          <MainHeader headerDark="header-dark-1" headerLight="header-light-1">
            Popular technologies I work with.
          </MainHeader>
          <ParaFadeUp
            className={
              "text-center font-light subtext lg:w-[700px] md:w-[540px] sm:w-[450px] max-[499px]:text-md max-[320px]:text-sm " +
              (LightCheck() ? "text-custom-black" : "text-custom-white")
            }
          >
            Using a mixture of extensive technologies, I strive to make
            brilliant web and native applications using simple yet effective
            tech stacks to build dreams.
          </ParaFadeUp>
        </DivFadeUp>

        <ul className="list-none flex gap-x-5 gap-y-10 items-center justify-center flex-wrap">
          {TECH_LIST.map((item, index) => (
            <LiFadeIn duration={1} key={index} delay={index}>
              <div className="flex flex-col gap-2 items-center justify-center relative group hover:scale-90 ease-in-out duration-150 dark:bg-gradient-to-br min-[300px]:dark:from-slate-700 min-[300px]:dark:to-slate-800 rounded-md min-[330px]:p-5 h-full p-2">
                <Image
                  src={`assets/images/technologies/${item.icon}`}
                  alt={item.title}
                  width={80}
                  height={50}
                />
                <h4 className="text-sm bg-custom-black text-custom-white dark:bg-custom-white dark:text-custom-black py-1 px-4 rounded-md absolute dark:min-[300px]:-bottom-8 dark:min-[300px]:group-hover:-bottom-10 -bottom-5 group-hover:-bottom-7  group-hover:opacity-100 opacity-0 duration-300 transition-all ease-in-out text-center">
                  {item.title}
                </h4>
              </div>
            </LiFadeIn>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}
