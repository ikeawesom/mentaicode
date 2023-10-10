"use client";
import React from "react";
import SectionContainer from "@/src/components/sections/SectionContainer";
import { ICONS_SIZE, TECH_CAT, TECH_LIST } from "@/src/utils/constants";
import Image from "next/image";
import DarkCard from "@/src/components/utils/cards/DarkCard";
import GlowBlur from "@/src/components/sections/GlowBlur";
import { DivFadeUp, LiFadeIn, ParaFadeUp } from "@/src/components/animations";
import MainHeader from "@/src/components/utils/headers/MainHeader";
import { LightCheck } from "@/src/contexts/ThemeContext";

export default function Stack() {
  return (
    <SectionContainer className="min-[420px]:py-10 py-0 flex flex-col gap-10 pb-20">
      <DivFadeUp className="flex flex-col gap-3 items-center justify-center">
        <MainHeader headerDark="header-1" headerLight="header-1">
          My Stack
        </MainHeader>
        <ParaFadeUp
          className={`text-center font-light
              ${LightCheck() ? "text-custom-black" : "text-custom-white"}`}
        >
          With a variety of advanced technologies, I create amazing web and
          native apps using efficient and effective solutions to turn digital
          dreams into reality.
        </ParaFadeUp>
      </DivFadeUp>
      <ul className="flex gap-10 items-stretch justify-stretch flex-wrap">
        {TECH_CAT.map((cat, catindex) => (
          <DarkCard
            key={catindex}
            className={`hover:opacity-100 opacity-75 duration-200 ease-in-out transition-opacity relative ${
              cat.small ? "flex-1" : "w-full"
            }`}
            force={true}
          >
            <GlowBlur
              headerType={catindex % 2 === 0 ? "header-3" : "header-1"}
            />
            <li className="flex flex-col gap-4 items-center justify-center">
              <h4 className="text-center dark:text-slate-50 text-lg font-bold">
                {cat.title}
              </h4>
              <ul className="flex items-center justify-around w-full flex-wrap gap-4">
                {TECH_LIST.map((tech, techindex) => {
                  if (tech.cat.includes(cat.id)) {
                    return (
                      <LiFadeIn delay={2} duration={0.3} key={techindex}>
                        <div className="flex flex-col gap-2 items-center justify-center relative group hover:scale-90 ease-in-out duration-150 h-full p-2">
                          <Image
                            src={`assets/images/technologies/${tech.icon}`}
                            alt={tech.title}
                            width={ICONS_SIZE}
                            height={ICONS_SIZE}
                          />
                          <h4 className="text-sm bg-custom-black text-custom-white dark:bg-custom-white dark:text-custom-black py-1 px-4 rounded-md absolute -bottom-5 group-hover:-bottom-7  group-hover:opacity-100 opacity-0 duration-300 transition-all ease-in-out text-center">
                            {tech.title}
                          </h4>
                        </div>
                      </LiFadeIn>
                    );
                  }
                })}
              </ul>
            </li>
          </DarkCard>
        ))}
      </ul>
    </SectionContainer>
  );
}
