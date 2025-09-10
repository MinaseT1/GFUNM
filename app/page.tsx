import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import AboutUsSection from "@/components/ui/about-us-section";
import FeaturedBooks from "@/components/ui/featured-books";

export default function Home() {
  return (
    <div>
      <HeroGeometric 
        badge="Gospel For Unreached Nation Ministry"
        title1="Spreading the Gospel"
        title2="To Every Nation"
      />
      <FeaturedBooks />
      <AboutUsSection />
    </div>
  );
}
