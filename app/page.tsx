import { CompetitionSection } from "@/components/competetion";
import Hero from "@/components/hero";
import { SponsorsSection } from "@/components/sponsors";
import { TimelineSection } from "@/components/timeline";

export default function Home() {
  return (
    <section>
      <Hero />
      <CompetitionSection />
      <TimelineSection />
      <SponsorsSection />
    </section>
  );
}
