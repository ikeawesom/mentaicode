import React from "react";
import { Metadata } from "next";
import AnimationWrapper from "@/src/components/animations/AnimationWrapper";
import GeneralSection from "@/src/screens/about/General";
import PageWrapper from "@/src/components/PageWrapper";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <AnimationWrapper className="pt-[10vh]">
      <PageWrapper>
        <GeneralSection />
      </PageWrapper>
    </AnimationWrapper>
  );
}
