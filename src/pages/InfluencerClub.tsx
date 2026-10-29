import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { PageIntro } from "@/components/shared/PageIntro";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CLUBS = ["Tergar Influencer Club", "Dzongsar Influencer Club"];

const START_STEPS = [
  {
    step: "1",
    title: "Fill the form to start a club",
    description: "Tell us who you are and the club you want to open. We will follow up from there.",
  },
  {
    step: "2",
    title: "Organize the WeBuddhist Creators Starter Course",
    description:
      "The course runs for one and a half months, two hours a day. Once your club members take the course, they are ready.",
  },
];

const StartClubForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clubName, setClubName] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Start an Influencer Club");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nClub name: ${clubName}\n\n${note}`.trim(),
    );
    window.location.href = `mailto:hello@buddhistcreators.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-xl space-y-5 rounded-2xl border border-border/50 bg-card p-7 shadow-soft">
      <div className="space-y-2">
        <Label htmlFor="club-organizer">Your name</Label>
        <Input
          id="club-organizer"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="club-email">Email</Label>
        <Input
          id="club-email"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="club-name">Club name</Label>
        <Input
          id="club-name"
          required
          value={clubName}
          onChange={(e) => setClubName(e.target.value)}
          placeholder="Name of the club you want to start"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="club-note">A note</Label>
        <Textarea
          id="club-note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Where the club will meet, and anything else we should know"
          className="min-h-28"
        />
      </div>
      <Button type="submit" size="lg" className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary-light">
        <Send className="h-4 w-4" /> Start a Club
      </Button>
    </form>
  );
};

const InfluencerClub = () => {
  usePageMeta({
    title: "Influencer Clubs",
    description:
      "Tergar Influencer Club and Dzongsar Influencer Club, and how to start a club with the WeBuddhist Creators Starter Course.",
  });

  return (
    <div>
      <PageIntro
        title="Influencer Clubs"
        description="A local or online sangha where Buddhist creators practice, create, and share together."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Clubs" title="Clubs gathering now" className="mb-14" />
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {CLUBS.map((club, i) => (
              <Reveal key={club} delay={i * 100} className="h-full">
                <div className="flex h-full items-center rounded-2xl border border-border/50 bg-card p-8 shadow-soft">
                  <h3 className="text-2xl font-semibold text-foreground">{club}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="start-club" className="py-20 md:py-28 bg-gradient-section">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="How to Start a Club" title="Two steps to open a club" className="mb-14" />
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {START_STEPS.map((item, i) => (
              <Reveal key={item.step} delay={i * 80} className="h-full">
                <div className="h-full rounded-2xl border border-border/50 bg-card p-7 shadow-soft">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Step {item.step}
                  </p>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <StartClubForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default InfluencerClub;
