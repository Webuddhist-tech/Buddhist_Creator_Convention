import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const HomeHero = () => {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/home/hero.jpg"
          alt="Buddhist creators from around the world gathered together at the Buddhist Creators Convention"
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pb-16 pt-40 md:pb-24 md:pt-48">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
            A Global Sangha of Creators
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold text-white leading-[1.02] text-balance">
            Buddhist Creators
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
            We create, empower, and connect Buddhist creators throughout the globe — carrying the Dharma into
            the digital age together.
          </p>
          <p className="inline-flex w-fit items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent ring-1 ring-white/25 backdrop-blur-sm">
            BCC 2026 · January · Archived
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="lg" className="bg-primary hover:bg-primary-light text-primary-foreground shadow-elevated text-base px-8 py-6 rounded-full" asChild>
              <Link to="/convention/2026">Revisit January 2026</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/40 text-white hover:bg-white/20 hover:text-white text-base px-8 py-6 rounded-full backdrop-blur-sm" asChild>
              <Link to="/awards#winners">See the Winners</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
