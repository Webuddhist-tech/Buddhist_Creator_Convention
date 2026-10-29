import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { getCompetition } from "@/data/competitions";
import { PageIntro } from "@/components/shared/PageIntro";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NotFound from "./NotFound";

const CompetitionDetail = () => {
  const { slug } = useParams();
  const competition = getCompetition(slug);

  usePageMeta({
    title: competition?.title ?? "Page Not Found",
    description: competition?.about,
  });

  if (!competition) return <NotFound />;

  return (
    <div>
      <PageIntro eyebrow={competition.setting} title={competition.title} description={competition.summary}>
        <Link
          to="/awards#competitions"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-light"
        >
          <ArrowLeft className="h-4 w-4" /> All competitions
        </Link>
      </PageIntro>

      {competition.image && (
        <section className="border-b border-border/60 bg-background">
          <div className="container mx-auto px-4 py-10 md:py-14">
            <Reveal className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border/50 bg-card shadow-soft">
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
                    competition.imageFit === "contain" ? "h-[58%] w-auto object-contain" : "h-full w-full object-cover"
                  )}
                />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="About" title="What this competition is about" align="left" className="mb-8" />
          <Reveal>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{competition.about}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-gradient-section py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Take part" title="How to participate" className="mb-14" />
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {competition.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 80} className="h-full">
                <div className="h-full rounded-2xl border border-border/50 bg-card p-7 shadow-soft">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Step {i + 1}
                  </p>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} className="mt-12 flex flex-col items-center gap-4">
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary-light" asChild>
              {competition.cta.external ? (
                <a href={competition.cta.href}>
                  {competition.cta.label} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <Link to={competition.cta.href}>
                  {competition.cta.label} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}
            </Button>
            {competition.winnerId && (
              <Link
                to={`/awards#${competition.winnerId}`}
                className="text-sm font-medium text-primary transition-colors hover:text-primary-light"
              >
                See the 2026 winner
              </Link>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default CompetitionDetail;
