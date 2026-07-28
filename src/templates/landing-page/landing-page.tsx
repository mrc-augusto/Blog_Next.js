import {
  CallToAction,
  FeatureSection,
  HeroSection,
  SupportSection,
  UserStorySection,
} from "@/templates/landing-page/sections";

export function LandingPage() {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <UserStorySection />
      <CallToAction />
    </article>
  );
}
