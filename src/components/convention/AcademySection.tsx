import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { PARTNER_PRODUCTS } from "@/data/partners";

const ACADEMY = PARTNER_PRODUCTS.find((product) => product.id === "webuddhist-academy");

export const AcademySection = () => {
  if (!ACADEMY) return null;

  return (
    <section className="py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-4">
        <Reveal className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-border/50 bg-card shadow-soft p-7 md:p-9 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-1 space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Learn Online</p>
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">{ACADEMY.name}</h2>
                <p className="text-sm font-medium text-primary">{ACADEMY.tagline}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">{ACADEMY.description}</p>
            </div>
            <a
              href={ACADEMY.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-sm font-semibold text-primary shrink-0 hover:bg-primary/15 transition-colors"
            >
              Visit sherab.org <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
