import { Reveal } from "@/components/shared/Reveal";

export const ConventionMission = () => {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <Reveal className="rounded-2xl overflow-hidden shadow-elevated aspect-[4/3]">
            <img
              src="/images/about/mission.jpg"
              alt="Close-up of a Buddha statue"
              className="w-full h-full object-cover"
            />
          </Reveal>
          <Reveal delay={120} className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Mission</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance">
              Let's spread Buddhist wisdom and compassion to{" "}
              <span className="text-primary">100 million people</span> by 2030
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe the Dharma belongs online as much as it does in the monastery. By supporting the
              creators already doing this work — and training the next generation — we're building a global
              sangha equipped for the digital age. Every gathering, award, and masterclass we run is one step
              toward that goal.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
