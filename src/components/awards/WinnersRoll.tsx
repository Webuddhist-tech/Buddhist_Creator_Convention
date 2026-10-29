import { ALL_WINNERS } from "@/data/awards";
import { WinnerPortrait } from "@/components/awards/WinnerPortrait";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

/** The 2026 winners, listed apart from the open competitions. */
export const WinnersRoll = () => {
  return (
    <section id="winners" className="scroll-mt-24 bg-gradient-section py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Winners"
          title="Winners of BCC 2026"
          description="The creators honoured at the closing ceremony in Bodh Gaya."
          className="mb-14"
        />
        <ul className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_WINNERS.map((winner, i) => (
            <Reveal key={winner.id} delay={i * 70} className="h-full">
              <li className="h-full">
                <a
                  href={`#${winner.id}`}
                  className="group flex h-full flex-col gap-4 rounded-2xl border border-border/50 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
                >
                  <WinnerPortrait
                    name={winner.name}
                    photo={winner.photo}
                    className="h-16 w-16 shrink-0 rounded-full"
                    monogramClassName="text-lg"
                  />
                  <span className="min-w-0 space-y-1">
                    <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      {winner.category}
                    </span>
                    <span className="block text-xl font-semibold text-foreground">{winner.name}</span>
                    <span className="block leading-relaxed text-muted-foreground">{winner.citation}</span>
                  </span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};
