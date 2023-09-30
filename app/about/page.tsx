import React from "react";
import { Metadata } from "next";
import AnimationWrapper from "@/src/components/animations/AnimationWrapper";
import GeneralSection from "@/src/screens/about/General";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <AnimationWrapper className="pt-[10vh]">
      <GeneralSection />
    </AnimationWrapper>
  );
}
