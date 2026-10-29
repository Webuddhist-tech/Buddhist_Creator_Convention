import { Instagram, Quote } from "lucide-react";
import { CATEGORY_WINNERS } from "@/data/awards";
import { WinnerPortrait } from "@/components/awards/WinnerPortrait";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export const CategoryWinners = () => {
  return (
    <section className="bg-gradient-section py-16 scroll-mt-20 sm:py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Category awards"
          title="Four more creators recognised at BCC 2026"
          description="Nominations for these categories were open exclusively to creators present at the convention, judged on work they made during the nine days in Bodh Gaya."
          className="mb-12 md:mb-16"
        />

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
          {CATEGORY_WINNERS.map((winner, i) => (
            <Reveal key={winner.id} delay={i * 90} className="h-full">
              <article
                id={winner.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card shadow-soft transition-all duration-300 scroll-mt-24 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="flex items-center gap-4 p-5 sm:gap-5 sm:p-6">
                  <WinnerPortrait
                    name={winner.name}
                    photo={winner.photo}
                    className="h-20 w-20 shrink-0 rounded-2xl sm:h-24 sm:w-24"
                    monogramClassName="text-xl sm:text-2xl"
                  />
                  <div className="min-w-0 space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                      {winner.category}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground">{winner.name}</h3>
                    {winner.affiliation && (
                      <p className="text-sm text-muted-foreground">{winner.affiliation}</p>
                    )}
                    {winner.instagram && (
                      <a
                        href={`https://www.instagram.com/${winner.instagram}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="relative z-10 mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Instagram className="h-3.5 w-3.5" /> @{winner.instagram}
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 px-5 pb-5 sm:px-6 sm:pb-6">
                  <p className="font-medium leading-relaxed text-foreground/90">{winner.citation}</p>

                  {winner.stats && (
                    <div className="flex flex-wrap gap-2">
                      {winner.stats.map((stat) => (
                        <span
                          key={stat.label}
                          className="rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary"
                        >
                          <strong className="font-semibold">{stat.value}</strong>{" "}
                          <span className="text-primary/80">{stat.label}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-sm leading-relaxed text-muted-foreground">{winner.story}</p>

                  {winner.quote && (
                    <blockquote className="relative mt-auto rounded-xl bg-muted/60 p-4 pl-10">
                      <Quote className="absolute left-3 top-4 h-4 w-4 text-primary/50" />
                      <p className="text-sm italic leading-relaxed text-foreground/80">{winner.quote}</p>
                    </blockquote>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
