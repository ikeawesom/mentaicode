import React from "react";
import { Metadata } from "next";
import AnimationWrapper from "@/src/components/animations/AnimationWrapper";
import GeneralSection from "@/src/screens/about/General";
import PageWrapper from "@/src/components/PageWrapper";
import Stack from "@/src/screens/about/Stack";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <AnimationWrapper className="pt-[10vh]">
      <PageWrapper>
        <GeneralSection />
        <Stack />
      </PageWrapper>
    </AnimationWrapper>
  );
}
