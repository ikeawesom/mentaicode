import Hero, { HeroButtons } from "@/components/Hero";
import LandingPage from "@/components/LandingPage";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <LandingPage>
        <Hero
          header="Empower Your Digital Journey with Innovative Solutions."
          subtext="Hi, I'm Ike, a skilled full-stack developer dedicated to turning ideas into innovative software applications. Explore my latest projects and articles, discover templates and courses, and let's craft something incredible together."
        >
          <HeroButtons />
        </Hero>
      </LandingPage>
      <div className="w-full h-screen"></div>
    </PageWrapper>
  );
}
