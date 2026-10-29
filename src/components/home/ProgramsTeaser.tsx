import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const PROGRAMS = [
  {
    title: "Buddhist Creators Convention",
    description:
      "Our annual global gathering, where creators, monastics, and practitioners meet in person to learn, connect, and create together.",
    image: "/images/home/bcc-recap.jpg",
    to: "/convention",
  },
  {
    title: "Buddhist Influencer of the Year",
    description:
      "A global award ceremony honoring the creator who best represents the movement's voice to the world that year.",
    image: "/images/home/award-ceremony.jpg",
    to: "/awards",
  },
  {
    title: "WeBuddhist Influencer Masterclass",
    description:
      "An intensive training — 80% practice, 20% theory — equipping creators with the skills to share the Dharma online.",
    image: "/images/home/masterclass.jpg",
    to: "/convention#masterclass-2026",
  },
];

export const ProgramsTeaser = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Our Programs"
          title="Join Us in Bringing the Dharma to the Digital Age"
          className="mb-14"
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PROGRAMS.map((program, i) => (
            <Reveal key={program.title} delay={i * 100} className="h-full">
              <Link
                to={program.to}
                className="group flex flex-col h-full rounded-2xl overflow-hidden border border-border/50 bg-card shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-2 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-foreground">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{program.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-primary font-medium pt-1 group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
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
