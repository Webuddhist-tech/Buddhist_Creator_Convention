import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/use-page-meta";
import { PageIntro } from "@/components/shared/PageIntro";
import { StatsStrip } from "@/components/home/StatsStrip";
import { DocumentaryFeature } from "@/components/shared/DocumentaryFeature";
import { ImageMarquee } from "@/components/shared/ImageMarquee";
import { ConventionPrograms } from "@/components/convention/ConventionPrograms";
import { PhaseOne } from "@/components/convention/PhaseOne";
import { PhaseTwo } from "@/components/convention/PhaseTwo";
import { PhaseThree } from "@/components/convention/PhaseThree";
import { Collaborators } from "@/components/shared/Collaborators";
import { PartnerSection } from "@/components/get-involved/PartnerSection";
import { TeamSection } from "@/components/get-involved/TeamSection";
import { ConventionGallery } from "@/components/convention/ConventionGallery";
import { AcademySection } from "@/components/convention/AcademySection";
import { NextConvention } from "@/components/convention/NextConvention";
import { ConventionFAQ } from "@/components/convention/ConventionFAQ";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { ARCHIVED_EDITION } from "@/data/editions";
import { REPORT_PDF_PATH } from "@/data/impact";

const MARQUEE_IMAGES = [
  { src: "/images/convention/hero-1.jpg", alt: "Convention stage in Bodh Gaya" },
  { src: "/images/convention/hero-2.jpg", alt: "Speaker presenting to attendees" },
  { src: "/images/convention/hero-3.jpg", alt: "Attendees registering at the welcome desk" },
  { src: "/images/home/gallery-1.jpg", alt: "Creator capturing a moment on her phone" },
  { src: "/images/home/gallery-2.jpg", alt: "A creator smiling with fellow attendees" },
  { src: "/images/home/gallery-3.jpg", alt: "Creators in conversation at the Convention" },
  { src: "/images/home/masterclass.jpg", alt: "A monastic and coach reviewing content on a tablet" },
  { src: "/images/home/upcoming-gathering.jpg", alt: "Attendees dancing together at BCC 2026" },
  { src: "/images/awards/quinthup-pema-bhutia.jpg", alt: "Buddhist Influencer of the Year 2026 award presentation" },
  { src: "/images/awards/tashi-chosgon.jpg", alt: "Audience Choice Award presentation" },
  { src: "/images/awards/tenzin-chime.jpg", alt: "Most Creative Video Award presentation" },
  { src: "/images/awards/sonam-dolma.jpg", alt: "Most Followers Gained Award presentation" },
];

const ConventionArchive = () => {
  usePageMeta({
    title: "2026 Convention",
    description:
      "Archive of the Buddhist Creators Convention, January 2026 in Bodh Gaya — the first global gathering of Buddhist creators — and a first look at the next gathering in Nepal.",
  });

  return (
    <div>
      <PageIntro
        eyebrow={`Archive · ${ARCHIVED_EDITION.annual}`}
        title="Buddhist Creators Convention 2026"
        description="From 29 January to 6 February 2026, the first global sangha of creators gathered in Bodh Gaya. This page is its record."
      >
        <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1 text-sm font-medium">
          <a href="#documentary" className="text-primary transition-colors hover:text-primary-light">
            Watch the documentary
          </a>
          <Link to="/awards" className="text-primary transition-colors hover:text-primary-light">
            See the winners
          </Link>
          <a
            href={REPORT_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary transition-colors hover:text-primary-light"
          >
            Download the report
          </a>
        </div>
      </PageIntro>
      <StatsStrip />
      <DocumentaryFeature />
      <ImageMarquee images={MARQUEE_IMAGES} />
      <ConventionPrograms />
      <PhaseOne />
      <PhaseTwo />
      <PhaseThree />
      <Collaborators eyebrow="Collaborators" title="Organisations Behind BCC 2026" />
      <PartnerSection />
      <TeamSection />
      <ConventionGallery />
      <AcademySection />
      <NextConvention />
      <ConventionFAQ />
      <NewsletterSection />
    </div>
  );
};

export default ConventionArchive;
