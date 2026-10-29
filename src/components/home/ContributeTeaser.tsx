import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Building2, Users } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const PATHS = [
  {
    title: "As a Creator",
    description: "Join an ongoing challenge, or bring your content to the next Convention and Masterclass.",
    icon: Sparkles,
    to: "/awards#competitions",
  },
  {
    title: "As an Institution or Group",
    description: "Partner with us on the Convention and the WeBuddhist Influencer Masterclass.",
    icon: Building2,
    to: "/convention#partner",
  },
  {
    title: "Join Our Team",
    description: "Help us build the movement from the inside — we'd love to hear from you.",
    icon: Users,
    to: "/convention#team",
  },
];

export const ContributeTeaser = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Get Involved" title="How You Can Contribute" className="mb-14" />
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PATHS.map((path, i) => (
            <Reveal key={path.title} delay={i * 100} className="h-full">
              <Link
                to={path.to}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-border/50 bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <path.icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{path.title}</h3>
                <p className="flex-1 leading-relaxed text-muted-foreground">{path.description}</p>
                <span className="inline-flex items-center gap-1.5 font-medium text-primary transition-all group-hover:gap-2.5">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
