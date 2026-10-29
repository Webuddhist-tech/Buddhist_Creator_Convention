import { usePageMeta } from "@/hooks/use-page-meta";
import { PageIntro } from "@/components/shared/PageIntro";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const CreatorStudio = () => {
  usePageMeta({
    title: "Creator Studio",
    description:
      "Creator Studio will help Buddhist creators make content with an AI agent. Coming soon.",
  });

  return (
    <div>
      <PageIntro
        title="Creator Studio"
        description="A place to craft Dharma content with the support of our AI agent."
      >
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          Coming soon
        </span>
      </PageIntro>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="What's Ahead"
            title="A studio for Buddhist-created content"
            description="We're building a space where creators can script, refine, and grow Dharma content with AI guidance — keeping practice and integrity at the centre."
            className="mb-10"
          />
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Creator Studio is not open yet. Check back soon, or write to{" "}
              <a
                href="mailto:hello@buddhistcreators.com?subject=Creator%20Studio"
                className="font-medium text-primary hover:text-primary-light transition-colors"
              >
                hello@buddhistcreators.com
              </a>{" "}
              if you'd like to be notified when it launches.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default CreatorStudio;
