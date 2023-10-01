"use client";
import { DivFadeUp, ParaFadeUp, LiFadeIn } from "@/src/components/animations";
import GlowBlur from "@/src/components/sections/GlowBlur";
import SectionContainer from "@/src/components/sections/SectionContainer";
import MainHeader from "@/src/components/utils/headers/MainHeader";
import { STATISTICS } from "@/src/utils/constants";
import React from "react";
import Image from "next/image";

export default function GeneralSection() {
  return (
    <SectionContainer className="min-[420px]:py-10 py-0">
      <DivFadeUp
        className="flex flex-col text-center w-full justify-center items-center relative"
        delay={2}
      >
        <MainHeader headerLight="header-light" headerDark="header-dark">
          Wonderful to meet you.
        </MainHeader>
        <DivFadeUp
          className="relative p-10 max-[400px]:p-6 lg:w-[400px] md:w-[350px] sm:w-[290px] min-[400px]:w-[260px] w-[220px] grid place-items-center"
          delay={3}
        >
          <GlowBlur headerType="header-3" force={true} />
          <Image
            src="/assets/images/pfp.svg"
            alt="Profile Picture"
            width="400"
            height="400"
            sizes="100vw"
            className="rounded-full hover:scale-95 duration-300 ease-in-out relative shadow-2xl border-2 border-border"
          />
        </DivFadeUp>
        <ParaFadeUp
          delay={4}
          className={`font-light text-center lg:w-[700px] md:w-[620px] sm:w-[450px] w-fit lg:text-xl md:text-lg text-base text-dark-grey dark:text-light-grey`}
        >
          Hi, I'm Ike, a{" "}
          <span className="text-primary">full-stack software developer</span>{" "}
          from Singapore. Making efficient and elegant is the main goal for all
          of my projects. I love building various{" "}
          <span className="text-primary">web and native applications</span>,
          using different technologies and frameworks that challenge me to
          become a better developer.
        </ParaFadeUp>
        <div className="p-10 w-full">
          <ul
            className={`flex gap-x-20 gap-y-10 flex-wrap items-center justify-center`}
          >
            {STATISTICS.map((item, index) => (
              <LiFadeIn
                key={index}
                delay={index + 2}
                className="flex flex-col gap-y-2 items-center justify-center brightness-90 dark:brightness-75 hover:brightness-100 dark:hover:brightness-100 duration-300 cursor-default"
              >
                <h1 className="text-primary font-bold text-4xl">
                  {item.progress}+
                </h1>
                <h4 className="dark:text-custom-white text-custom-black text-lg">
                  {item.tag}
                </h4>
              </LiFadeIn>
            ))}
          </ul>
        </div>
      </DivFadeUp>
    </SectionContainer>
  );
}
