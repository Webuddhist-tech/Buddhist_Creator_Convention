import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";

const CHALLENGES = [
  {
    title: "Bodhisattva Challenge",
    description:
      "A year-long daily practice inspired by The Way of the Bodhisattva, delivered through the WeBuddhist Creator Assistant.",
    image: "/images/home/challenge-bodhisattva.jpg",
  },
  {
    title: "My Buddha Moment",
    description:
      "A creative reel challenge inviting practitioners to share a Buddhist teaching, verse, or moment that resonates with them.",
    image: "/images/home/challenge-buddha-moment.jpg",
  },
];

export const CreatorSection = () => {
  return (
    <section id="creator" className="scroll-mt-24 bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="As a Creator"
          title="Join a challenge, or bring your own content to the community"
          description="Two ongoing challenges are open right now — and every Convention, Masterclass, and Award season is another chance to create alongside the community."
          className="mb-12"
        />

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {CHALLENGES.map((challenge, i) => (
            <Reveal key={challenge.title} delay={i * 100}>
              <div className="h-full overflow-hidden rounded-2xl border border-border/50 bg-card shadow-soft transition-all duration-300 hover:shadow-elevated">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img src={challenge.image} alt={challenge.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="space-y-2 p-6">
                  <h3 className="text-xl font-semibold text-foreground">{challenge.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{challenge.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mx-auto mt-10 max-w-4xl rounded-2xl border border-border/50 bg-card p-6 shadow-soft sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Looking for the next Convention or Masterclass?</h3>
              <p className="max-w-xl leading-relaxed text-muted-foreground">
                Our ongoing programs — the annual Convention, the WeBuddhist Influencer Masterclass, and the
                Buddhist Influencer of the Year awards — are where creators go deeper together.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="rounded-full" asChild>
                <Link to="/awards#competitions">
                  See Competitions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary-light" asChild>
                <Link to="/convention">Explore the Convention</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
