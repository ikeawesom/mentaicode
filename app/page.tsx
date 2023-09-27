import Hero, { HeroButtons } from "@/src/components/Hero";
import { LandingPage, TechnologiesSection } from "@/src/screens/home";

export default function Home() {
  return (
    <>
      <LandingPage>
        <Hero
          header="Empower Your Digital Journey with Innovative Solutions."
          subtext="Hi, I'm Ike, a skilled full-stack developer dedicated to turning ideas into innovative software applications. Explore my latest projects and articles, discover templates and courses, and let's craft something incredible together."
        >
          <HeroButtons />
        </Hero>
      </LandingPage>
      <TechnologiesSection />
    </>
  );
}
