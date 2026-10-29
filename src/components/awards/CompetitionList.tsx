import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { COMPETITIONS } from "@/data/competitions";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

export const CompetitionList = () => {
  return (
    <section id="competitions" className="scroll-mt-24 border-b border-border/60 bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Competitions"
          title="Competitions we are hosting"
          description="Each competition has its own page — what it is for, and how to take part."
          className="mb-14"
        />
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMPETITIONS.map((competition, i) => (
            <Reveal key={competition.slug} delay={i * 80} className="h-full">
              <Link
                to={`/awards/${competition.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                {competition.image && (
                  <div
                    className={cn(
                      "flex aspect-[16/10] w-full items-center justify-center overflow-hidden",
                      competition.imageFit === "contain" && "bg-muted"
                    )}
                  >
                    <img
                      src={competition.image}
                      alt={competition.imageAlt ?? competition.title}
                      className={cn(
                        "transition-transform duration-500 group-hover:scale-105",
                        competition.imageFit === "contain"
                          ? "h-[58%] w-auto object-contain"
                          : "h-full w-full object-cover"
                      )}
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {competition.setting}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">{competition.title}</h3>
                  <p className="flex-1 leading-relaxed text-muted-foreground">{competition.summary}</p>
                  <span className="inline-flex items-center gap-1.5 font-medium text-primary transition-all group-hover:gap-2.5">
                    How to participate <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
