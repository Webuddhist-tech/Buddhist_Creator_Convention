import { usePageMeta } from "@/hooks/use-page-meta";
import { PageIntro } from "@/components/shared/PageIntro";
import { CompetitionList } from "@/components/awards/CompetitionList";
import { WinnersRoll } from "@/components/awards/WinnersRoll";
import { InfluencerOfTheYear } from "@/components/awards/InfluencerOfTheYear";
import { CategoryWinners } from "@/components/awards/CategoryWinners";
import { DocumentaryFeature } from "@/components/shared/DocumentaryFeature";
import { AwardsCTA } from "@/components/awards/AwardsCTA";

const Awards = () => {
  usePageMeta({
    title: "Awards",
    description:
      "Competitions for Buddhist creators — Best Buddha Image of the Year, Influencer of the Year, and the awards presented at the convention — plus the 2026 winners.",
  });

  return (
    <div>
      <PageIntro
        title="Awards"
        description="Competitions we are hosting, and the creators honoured at the 2026 ceremony in Bodh Gaya."
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#competitions"
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            Competitions
          </a>
          <a
            href="#winners"
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            Winners
          </a>
        </div>
      </PageIntro>
      <CompetitionList />
      <WinnersRoll />
      <InfluencerOfTheYear />
      <CategoryWinners />
      <DocumentaryFeature size="compact" />
      <AwardsCTA />
    </div>
  );
};

export default Awards;
