import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";

export const AwardsCTA = () => {
  return (
    <section className="bg-background py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal className="mx-auto max-w-4xl rounded-3xl bg-gradient-hero px-6 py-12 text-center shadow-elevated sm:px-10 md:px-14 md:py-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Next Up</p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white text-balance">
            The 2027 awards are open to creators like you.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-white/85">
            Every winner this year started by simply making something. Join the next Buddhist Creators Convention
            in Nepal and put your work in front of the sangha.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button
              size="lg"
              className="w-full rounded-full bg-white text-primary hover:bg-white/90 sm:w-auto"
              asChild
            >
              <Link to="/convention/2026#next">
                Join BCC 2027 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full rounded-full border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
              asChild
            >
              <a href="/images/convention/bcc-2026-report.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" /> Read the 2026 Report
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
