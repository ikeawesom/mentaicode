import AnimationWrapper from "@/src/components/animations/AnimationWrapper";
import PageWrapper from "@/src/components/PageWrapper";
import GlowBlur from "@/src/components/sections/GlowBlur";
import SectionContentCard from "@/src/components/sections/SectionContentCard";
import FeaturedSection from "@/src/screens/portfolio/FeaturedSection";
import General from "@/src/screens/portfolio/General";
import React from "react";

export default function PortfolioPage() {
  return (
    <AnimationWrapper className="pt-[10vh]">
      <PageWrapper>
        <SectionContentCard className="flex flex-col gap-4 max-w-6xl">
          <GlowBlur headerType="header-1" />
          <General />
          <FeaturedSection />
        </SectionContentCard>
      </PageWrapper>
    </AnimationWrapper>
  );
}
