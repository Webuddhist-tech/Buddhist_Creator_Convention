import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { CONVENTION_PHASES } from "@/data/convention";

export const ConventionPrograms = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="From the Archive"
          title="Nine Days, Three Phases"
          description="In January 2026, over a hundred Buddhist creators from more than a dozen countries gathered in Bodh Gaya — the first global sangha of its kind."
          className="mb-14"
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CONVENTION_PHASES.map((phase, i) => (
            <Reveal key={phase.id} delay={i * 100}>
              <a href={`#${phase.id}`} className="block h-full rounded-2xl border border-border/50 bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                  {phase.phase} · {phase.dates}
                </p>
                <h3 className="text-xl font-semibold text-foreground mb-3">{phase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{phase.summary}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
