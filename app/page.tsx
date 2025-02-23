import { CompetitionSection } from "@/components/competetion";
import { FAQSection } from "@/components/faq";
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
      <FAQSection />
    </section>
  );
}
