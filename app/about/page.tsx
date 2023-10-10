import React from "react";
import { Metadata } from "next";
import AnimationWrapper from "@/src/components/animations/AnimationWrapper";
import GeneralSection from "@/src/screens/about/General";
import PageWrapper from "@/src/components/PageWrapper";
import Stack from "@/src/screens/about/Stack";
import EducationSection from "@/src/screens/about/Education";
import AwardsSection from "@/src/screens/about/Awards";
import SectionContainer from "@/src/components/sections/SectionContainer";
import NextButton from "@/src/components/utils/buttons/NextButton";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <AnimationWrapper className="pt-[10vh]">
      <PageWrapper>
        <GeneralSection />
        <Stack />
        <EducationSection />
        <AwardsSection />
        <SectionContainer className="py-8 pb-20">
          <p className="text-dark-grey dark:text-light-grey">Impressed?</p>
          <NextButton
            text="Take a look at what I've done."
            delay={2}
            link="/portfolio"
          />
        </SectionContainer>
      </PageWrapper>
    </AnimationWrapper>
  );
}
