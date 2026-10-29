import { usePageMeta } from "@/hooks/use-page-meta";
import { ConventionPurposeBanner } from "@/components/convention/ConventionPurposeBanner";
import { EditionArchive } from "@/components/convention/EditionArchive";
import { ConventionMission } from "@/components/convention/ConventionMission";
import { ConventionTestimonials } from "@/components/convention/ConventionTestimonials";

const Convention = () => {
  usePageMeta({
    title: "Convention",
    description:
      "Our mission is to spread Buddhist wisdom and compassion to 100 million people by 2030. Revisit the January 2026 gathering in Bodh Gaya, or follow along for the next convention in Nepal.",
  });

  return (
    <div>
      <ConventionPurposeBanner />
      <ConventionMission />
      <EditionArchive />
      <ConventionTestimonials />
    </div>
  );
};

export default Convention;
