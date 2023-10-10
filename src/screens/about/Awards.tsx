"use client";
import { DivFadeUp } from "@/src/components/animations";
import GlowBlur from "@/src/components/sections/GlowBlur";
import SectionContainer from "@/src/components/sections/SectionContainer";
import SectionContentCard from "@/src/components/sections/SectionContentCard";
import DarkCard from "@/src/components/utils/cards/DarkCard";
import MainHeader from "@/src/components/utils/headers/MainHeader";
import { AWARDS } from "@/src/utils/constants";
import React from "react";

export default function AwardsSection() {
  return (
    <SectionContainer className="py-8">
      <SectionContentCard className="w-full">
        <GlowBlur headerType="header-3" />
        <DivFadeUp className="flex flex-col gap-3 items-center justify-center">
          <MainHeader headerDark="header-3" headerLight="header-3">
            Awards
          </MainHeader>
        </DivFadeUp>
        <ul className="flex flex-col gap-8 items-center justify-center w-full">
          {AWARDS.map((item, index) => (
            <li key={index} className="w-full">
              <DivFadeUp>
                <DarkCard
                  force={true}
                  className="w-full flex flex-col gap-3 min-[330px]:items-start items-center justify-center"
                >
                  <div className="flex flex-col gap-1 min-[330px]:items-start items-center justify-center min-[330px]:text-start text-center">
                    <h1 className="text-primary sm:text-3xl text-xl">
                      {item.name}
                    </h1>
                    <h4 className="sm:text-xl text-base dark:text-custom-white text-custom-black">
                      {item.awarded_by}
                    </h4>
                    <p className="text-dark-grey dark:text-light-grey sm:text-base text-sm italic">
                      {item.date}
                    </p>
                  </div>
                  <div className="lex flex-col gap-2 min-[330px]:items-start items-center justify-center text-custom-black dark:text-custom-white min-[330px]:text-start text-center">
                    <h4 className="sm:text-lg text-base">{item.desc}</h4>
                  </div>
                </DarkCard>
              </DivFadeUp>
            </li>
          ))}
        </ul>
      </SectionContentCard>
    </SectionContainer>
  );
}
