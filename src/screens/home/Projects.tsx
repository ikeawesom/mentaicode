"use client";
import React, { useState } from "react";
import { PROJECTS } from "@/src/utils/constants";
import PrimaryButton from "@/src/components/utils/buttons/PrimaryButton";
import { DivFadeUp, ParaFadeUp } from "@/src/components/animations";
import DarkCard from "@/src/components/utils/cards/DarkCard";
import SectionContainer from "@/src/components/sections/SectionContainer";
import SectionContentCard from "@/src/components/sections/SectionContentCard";
import GlowBlur from "@/src/components/sections/GlowBlur";
import MainHeader from "@/src/components/utils/headers/MainHeader";
import { LightCheck } from "@/src/contexts/ThemeContext";
import Link from "next/link";
import { useLottie } from "lottie-react";
import ArrowRightPrimary from "@/public/assets/images/lottie/arrow-right-primary.json";

type ProjectType = {
  name: "Mademoiselle Angel" | "PassSafe" | "Project Econs";
};

export default function ProjectSection() {
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
        <GlowBlur headerType="header-3" />
        <DivFadeUp className="flex flex-col gap-3 items-center justify-center">
          <MainHeader headerDark="header-3" headerLight="header-3">
            Personal Favourites.
          </MainHeader>
          <ParaFadeUp
            className={`text-center font-light
              ${LightCheck() ? "text-custom-black" : "text-custom-white"}`}
          >
            Explore some of my featured projects and get a taste of what I can
            offer.
          </ParaFadeUp>
        </DivFadeUp>
        <div className="flex-col flex min-[440px]:gap-52 gap-20 justify-center items-center">
          <ProjectCard name="Mademoiselle Angel" />
          <ProjectCard name="PassSafe" />
          <ProjectCard name="Project Econs" />
        </div>
        <DivFadeUp>
          <Link
            href="/portfolio"
            className="text-primary font-semibold hover:brightness-110 duration-200 ease-in-out"
            onMouseOver={() => setHoverState(true)}
            onMouseLeave={() => setHoverState(false)}
          >
            <span className="flex gap-2 items-center justify-center">
              Peep at my other works<span>{arrow}</span>
            </span>
          </Link>
        </DivFadeUp>
      </SectionContentCard>
    </SectionContainer>
  );
}
export function ProjectCard({ name }: ProjectType) {
  const title = name;
  const src = PROJECTS[name].landing;
  const desc = PROJECTS[name].landingDesc;
  const url = PROJECTS[name].link;

  const buttonColor = PROJECTS[name].colors.accent;
  const bgColor = PROJECTS[name].colors.background;

  return (
    <DivFadeUp className={`w-full`}>
      <DarkCard className="group relative overflow-hidden shadow-xl bg-white dark:bg-transparent grid place-items-center">
        <img
          src={`/projects/${src}`}
          alt={title}
          className="max-h-[90vh] w-auto"
        />
        <div
          className={`group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto opacity-0 flex flex-col min-[500px]:gap-y-5 gap-y-2 flex-1 min-[350px]:items-start min-[350px]:justify-end items-center justify-center min-[350px]:text-start text-center absolute bottom-0 left-0 min-[350px]:bg-gradient-to-b max-[350px]:bg-black/80 min-[350px]:from-transparent ${bgColor} h-full w-full duration-500 ease-in-out min-[440px]:p-10 p-4`}
        >
          <h1
            className={`min-[500px]:text-3xl text-xl xl:text-4xl dark:text-custom-white min-[350px]:text-custom-black text-custom-white`}
          >
            {title}
          </h1>
          <p
            className={`min-[500px]:text-lg text-base max-[440px]:text-sm min-[350px]:text-dark-grey text-light-grey dark:text-light-grey`}
          >
            {desc}
          </p>
          <PrimaryButton
            link={url}
            text=""
            className={`w-fit ${buttonColor} text-custom-white min-[500px]:text-lg text-base max-[440px]:px-4`}
          >
            View Case Study
          </PrimaryButton>
        </div>
      </DarkCard>
    </DivFadeUp>
  );
}
