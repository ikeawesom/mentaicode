"use client";
import React from "react";
import { PROJECTS } from "@/src/utils/constants";
import PrimaryButton from "@/src/components/utils/buttons/PrimaryButton";
import { DivFadeUp, ParaFadeUp } from "@/src/components/animations";
import DarkCard from "@/src/components/utils/cards/DarkCard";
import SectionContainer from "@/src/components/sections/SectionContainer";
import SectionContentCard from "@/src/components/sections/SectionContentCard";
import GlowBlur from "@/src/components/sections/GlowBlur";
import MainHeader from "@/src/components/utils/headers/MainHeader";
import { LightCheck } from "@/src/contexts/ThemeContext";

type ProjectType = {
  name: "Mademoiselle Angel" | "PassSafe" | "Project Econs";
};

export default function ProjectSection() {
  return (
    <SectionContainer>
      <SectionContentCard className="flex flex-col gap-8 max-w-6xl">
        <GlowBlur headerType="header-3" />
        <DivFadeUp className="flex flex-col gap-3 items-center justify-center">
          <MainHeader headerDark="header-3" headerLight="header-3">
            Personal Favourites.
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
        <ProjectCard name="Mademoiselle Angel" />
        <ProjectCard name="Mademoiselle Angel" />
        <ProjectCard name="Mademoiselle Angel" />
      </SectionContentCard>
    </SectionContainer>
  );
}
export function ProjectCard({ name }: ProjectType) {
  const title = name;
  const src = PROJECTS[name].landing;
  const desc = PROJECTS[name].landingDesc;
  const url = PROJECTS[name].link;

  const headerColor = PROJECTS[name].colors.header;
  const paraColor = PROJECTS[name].colors.para;
  const buttonColor = PROJECTS[name].colors.accent;
  const buttonTextColor = PROJECTS[name].colors.buttonText;
  const bgColor = PROJECTS[name].colors.background;

  return (
    <DivFadeUp className={`min-h-[80vh] w-full`}>
      <DarkCard className="group relative overflow-hidden shadow-lg grid place-items-center">
        <img
          src={`/projects/${src}`}
          alt={title}
          className="max-h-[80vh] w-auto"
        />
        <div
          className={`group-hover:opacity-100 opacity-0 flex flex-col gap-y-5 flex-1 items-start justify-start absolute bottom-0 left-0 bg-gradient-to-b from-transparent ${bgColor} pt-80 w-full duration-500 ease-in-out p-10`}
        >
          <h1 className={`${headerColor}`}>{title}</h1>
          <p className={`${paraColor}`}>{desc}</p>
          <PrimaryButton
            link={url}
            text=""
            className={`w-fit ${buttonColor} ${buttonTextColor}`}
          >
            View Case Study
          </PrimaryButton>
        </div>
      </DarkCard>
    </DivFadeUp>
  );
}
