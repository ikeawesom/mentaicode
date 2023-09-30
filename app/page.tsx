import PageWrapper from "@/src/components/PageWrapper";
import AnimationWrapper from "@/src/components/animations/AnimationWrapper";
import Hero, { HeroButtons } from "@/src/components/sections/Hero";
import {
  LandingPage,
  TechnologiesSection,
  TestimonialsSection,
  ProjectSection,
  ActionCallSection,
} from "@/src/screens/home";

export default function Home() {
  return (
    <PageWrapper>
      <AnimationWrapper>
        <LandingPage>
          <Hero
            header="Empower Your Digital Journey with Innovative Solutions."
            subtext="Hi, I'm Ike, a skilled full-stack developer dedicated to turning ideas into innovative software applications. Explore my latest projects and articles, discover templates and courses, and let's craft something incredible together."
          >
            <HeroButtons />
          </Hero>
        </LandingPage>
        <TechnologiesSection />
        <TestimonialsSection />
        <ProjectSection />
        <ActionCallSection />
      </AnimationWrapper>
    </PageWrapper>
  );
}
