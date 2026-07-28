import { FeatureSection } from "@/components/feature-section";
import { HeroSection } from "@/components/hero-section/hero-section";
import { SupportSection } from "@/components/support-section";
import { UserStorySection } from "@/components/user-story-section";

export default function Home() {
  return (
      <article className='flex flex-col'>
        <HeroSection />
        <FeatureSection/>
        <SupportSection/>
        <UserStorySection/>
      </article>
  );
}
 