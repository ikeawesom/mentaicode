import Hero, { HeroButtons } from "@/components/Hero";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <div>
      <LandingPage>
        <Hero
          header="Empower Your Digital Journey with Innovative Solutions."
          subtext="Hi, I'm Ike, a junior developer passionate about creating digital magic. Explore my work, discover templates and courses, and let's craft something incredible together."
        >
          <HeroButtons />
        </Hero>
      </LandingPage>
    </div>
  );
}
