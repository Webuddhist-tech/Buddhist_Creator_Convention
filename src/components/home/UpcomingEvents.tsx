import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";

const EVENTS = [
  {
    title: "WeBuddhist Influencer Masterclass 2026",
    date: "1 – 6 November 2026",
    location: "Dzongsar Khyentse Chokyi Lodro Institute, Himachal Pradesh, India",
    description: "Hosted by Khyentse Foundation.",
    image: "/images/home/masterclass.jpg",
    featured: true,
    to: "/convention#masterclass-2026",
  },
  {
    title: "Lhabab Duechen Challenge",
    date: "11 November 2026",
    location: "Online — Google Meet",
    description: "A day of collective practice and reflection, open to the whole community.",
    image: "/images/home/join-globe.jpg",
    featured: false,
    to: null,
  },
  {
    title: "Buddhist Creators Convention 2027",
    date: "Date TBD",
    location: "Nepal",
    description: "The next global gathering, building on the momentum of 2026's first convention.",
    image: "/images/home/upcoming-gathering.jpg",
    featured: false,
    to: "/convention#next",
  },
];

export const UpcomingEvents = () => {
  return (
    <section id="upcoming" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="What's Next" title="Upcoming Buddhist Events" className="mb-14" />
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {EVENTS.map((event, i) => {
            const Wrapper = event.to ? Link : "div";
            const wrapperProps = event.to ? { to: event.to } : {};
            return (
              <Reveal key={event.title} delay={i * 100}>
                <Wrapper
                  {...(wrapperProps as never)}
                  className={`block h-full rounded-2xl overflow-hidden border shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${
                    event.featured ? "border-primary/40 bg-primary/[0.03]" : "border-border/50 bg-card"
                  }`}
                >
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6 space-y-3">
                    {event.featured && (
                      <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                    <h3 className="text-xl font-semibold text-foreground leading-snug">{event.title}</h3>
                    <div className="space-y-1.5 text-sm text-muted-foreground">
                      <p className="flex items-start gap-2">
                        <Calendar className="w-4 h-4 mt-0.5 shrink-0 text-primary" /> {event.date}
                      </p>
                      <p className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" /> {event.location}
                      </p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="text-center mt-10">
          <Button variant="outline" className="rounded-full" asChild>
            <a href="mailto:hello@buddhistcreators.com?subject=Event%20Updates">Get Notified About Future Events</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};
