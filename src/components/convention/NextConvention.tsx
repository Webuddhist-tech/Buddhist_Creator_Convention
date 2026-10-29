import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";

export const NextConvention = () => {
  return (
    <section id="next" className="relative py-24 md:py-32 overflow-hidden scroll-mt-24">
      <div className="absolute inset-0">
        <img
          src="/images/home/upcoming-gathering.jpg"
          alt="Buddhist Creators community celebrating together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/85" />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <Reveal className="max-w-2xl mx-auto text-center space-y-5 text-secondary-foreground">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">Stay Tuned</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-balance">
            Buddhist Creators Convention 2027
          </h2>
          <p className="text-lg text-secondary-foreground/85 leading-relaxed">
            The January 2026 gathering is in the archive. The next convention of Buddhist creators will be in Nepal.
            Dates and details will follow.
          </p>
          <div className="flex flex-wrap justify-center gap-6 py-2">
            <p className="flex items-center gap-2"><Calendar className="w-5 h-5 text-primary-light" /> Date TBD</p>
            <p className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary-light" /> Nepal</p>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary-light text-primary-foreground rounded-full" asChild>
            <a href="mailto:hello@buddhistcreators.com?subject=BCC%202027%20Updates">Stay Tuned for 2027</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};
