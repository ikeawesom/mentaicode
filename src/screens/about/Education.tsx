"use client";
import React from "react";
import { DivFadeUp } from "@/src/components/animations";
import GlowBlur from "@/src/components/sections/GlowBlur";
import SectionContainer from "@/src/components/sections/SectionContainer";
import SectionContentCard from "@/src/components/sections/SectionContentCard";
import MainHeader from "@/src/components/utils/headers/MainHeader";
import { EDUCATION } from "@/src/utils/constants";
import DarkCard from "@/src/components/utils/cards/DarkCard";

export default function EducationSection() {
  return (
    <SectionContainer className="py-10">
      <SectionContentCard>
        <GlowBlur headerType="header-2" />
        <DivFadeUp className="flex flex-col gap-3 items-center justify-center">
          <MainHeader headerDark="header-2" headerLight="header-2">
            Education
          </MainHeader>
        </DivFadeUp>
        <ul className="flex flex-col gap-8 items-center justify-center w-full">
          {EDUCATION.map((item, index) => (
            <li key={index} className="w-full">
              <DivFadeUp>
                <DarkCard
                  force={true}
                  className="w-full flex flex-col gap-2 min-[330px]:items-start items-center justify-center"
                >
                  <div className="flex flex-col gap-1 min-[330px]:items-start items-center justify-center min-[330px]:text-start text-center">
                    <h1 className="text-primary sm:text-3xl text-xl">
                      {item.name}
                    </h1>
                    <p className="text-dark-grey dark:text-light-grey sm:text-base text-sm italic">
                      {item.start_year} - {item.end_year}
                    </p>
                  </div>
                  <div className="lex flex-col gap-2 min-[330px]:items-start items-center justify-center text-custom-black dark:text-custom-white min-[330px]:text-start text-center">
                    <h4 className="sm:text-lg text-base">
                      {item.achievements}
                    </h4>
                    <h4 className="sm:text-lg text-base">{item.res}</h4>
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
