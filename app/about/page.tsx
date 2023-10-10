import React from "react";
import { Metadata } from "next";
import AnimationWrapper from "@/src/components/animations/AnimationWrapper";
import GeneralSection from "@/src/screens/about/General";
import PageWrapper from "@/src/components/PageWrapper";
import Stack from "@/src/screens/about/Stack";
import EducationSection from "@/src/screens/about/Education";

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
      </PageWrapper>
    </AnimationWrapper>
  );
}
