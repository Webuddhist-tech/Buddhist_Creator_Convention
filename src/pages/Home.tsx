import { usePageMeta } from "@/hooks/use-page-meta";
import { HomeHero } from "@/components/home/HomeHero";
import { EditionArchive } from "@/components/convention/EditionArchive";

const Home = () => {
  usePageMeta({
    title: "Buddhist Creators",
    description:
      "We create, empower, and connect Buddhist creators throughout the globe — carrying the Dharma into the digital age together.",
  });

  return (
    <div>
      <HomeHero />
      <EditionArchive showIntro />
    </div>
  );
};

export default Home;
