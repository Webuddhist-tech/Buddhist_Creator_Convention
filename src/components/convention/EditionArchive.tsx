import { Link } from "react-router-dom";
import { CONVENTION_EDITIONS, type ConventionEdition } from "@/data/editions";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

interface EditionArchiveProps {
  /** The edition whose page you are already on. That card is marked current. */
  active?: ConventionEdition["year"];
  /** Home uses a short introduction. The convention page uses the cards alone. */
  showIntro?: boolean;
}

const EditionCard = ({
  edition,
  current,
}: {
  edition: ConventionEdition;
  current: boolean;
}) => {
  const body = (
    <>
      <img src={edition.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />
      <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white ring-1 ring-white/30 backdrop-blur-sm">
        {current ? "Viewing this archive" : edition.status}
      </span>
      <div className="relative z-10 mt-auto space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{edition.annual}</p>
        <p className="font-display text-5xl font-semibold leading-none text-white sm:text-6xl">{edition.year}</p>
        <p className="pt-2 text-sm text-white/85">{edition.detail}</p>
        <p className="text-sm text-white/70">{edition.note}</p>
      </div>
    </>
  );

  const className = cn(
    "group relative flex min-h-[18rem] flex-col overflow-hidden rounded-3xl p-6 text-left shadow-soft sm:min-h-[20rem] sm:p-8",
    current ? "ring-2 ring-accent" : "ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated hover:ring-accent/50",
  );

  if (current) {
    return (
      <article aria-current="page" className={className}>
        {body}
      </article>
    );
  }

  return (
    <Link to={edition.href} className={className}>
      {body}
    </Link>
  );
};

export const EditionArchive = ({ active, showIntro = false }: EditionArchiveProps) => {
  return (
    <section id="editions" className="scroll-mt-24 border-b border-border/60 bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        {showIntro && (
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">The Convention</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground text-balance sm:text-4xl">
              January 2026 is in the archive
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The first Buddhist Creators Convention gathered in Bodh Gaya this January and has concluded.
              Relive that record, or follow along for the next gathering in Nepal. Dates are still to be announced.
            </p>
          </Reveal>
        )}
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          {CONVENTION_EDITIONS.map((edition, i) => (
            <Reveal key={edition.year} delay={i * 80}>
              <EditionCard edition={edition} current={active === edition.year} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
