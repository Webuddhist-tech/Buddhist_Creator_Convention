/**
 * Competitions hosted under Awards.
 * Category copy follows the 2026 ceremony in src/data/awards.ts.
 */

export interface CompetitionStep {
  title: string;
  description: string;
}

export interface Competition {
  slug: string;
  title: string;
  /** One line on the Awards list. */
  summary: string;
  /** Where someone takes part. */
  setting: string;
  image?: string;
  imageAlt?: string;
  /** Logo marks stay whole. Photos fill the card. */
  imageFit?: "cover" | "contain";
  about: string;
  steps: CompetitionStep[];
  /** 2026 winner anchor on /awards, when this competition already has one. */
  winnerId?: string;
  cta: {
    label: string;
    href: string;
    external?: boolean;
  };
}

const ENTRY_MAIL = "mailto:hello@buddhistcreators.com?subject=Best%20Buddha%20Image%20of%20the%20Year";
const CONSIDER_MAIL =
  "mailto:hello@buddhistcreators.com?subject=Buddhist%20Influencer%20of%20the%20Year";

/** Shown on award competition cards in place of a ceremony photo. */
const AWARD_MARK = {
  image: "/images/brand/logo-dark.png",
  imageAlt: "Buddhist Creators",
  imageFit: "contain" as const,
};

export const COMPETITIONS: Competition[] = [
  {
    slug: "best-buddha-image",
    title: "Best Buddha Image of the Year",
    summary: "One image that holds a Buddhist teaching, verse, or moment.",
    setting: "Open to practitioners",
    image: "/images/competition/best-buddha.jpg",
    imageAlt: "A simple seated Buddha statue",
    about:
      "Best Buddha Image of the Year is a creative competition for a single frame. Share a Buddhist teaching, verse, or moment that resonates with you — a photograph or still that captures the Dharma on its own.",
    steps: [
      {
        title: "Make one image",
        description:
          "Create a photograph or still. It should carry a Buddhist teaching, a verse, or a moment from practice, and be able to stand on its own.",
      },
      {
        title: "Say what it holds",
        description: "Write a short note on the teaching, verse, or moment, and why you chose it.",
      },
      {
        title: "Send it in",
        description:
          "Email the image and your note to hello@buddhistcreators.com with the subject line Best Buddha Image of the Year.",
      },
    ],
    cta: { label: "Send your image", href: ENTRY_MAIL, external: true },
  },
  {
    slug: "influencer-of-the-year",
    title: "Buddhist Influencer of the Year",
    summary: "The highest honour, for a creator who has shared the Dharma through the year.",
    setting: "Presented at the convention",
    ...AWARD_MARK,
    about:
      "Buddhist Influencer of the Year is the most prestigious recognition of the ceremony. It honours a digital creator who has consistently shared Buddhist content through the year. A specialist committee judges global reach and audience growth alongside the integrity, authenticity, and innovation they bring to sharing the Dharma online.",
    steps: [
      {
        title: "Share the Dharma through the year",
        description: "Keep creating Buddhist content that people can find, trust, and return to.",
      },
      {
        title: "Be considered by the committee",
        description:
          "A specialist committee shortlists nominees. In 2026 the award was chosen from eight nominees, and presented in the presence of Chokyong Palga Rinpoche.",
      },
      {
        title: "Meet the sangha at the convention",
        description:
          "The award is presented at the Buddhist Creators Convention. Write to hello@buddhistcreators.com if you would like a creator considered for the next ceremony.",
      },
    ],
    winnerId: "influencer-of-the-year",
    cta: { label: "Put a creator forward", href: CONSIDER_MAIL, external: true },
  },
  {
    slug: "rising-star",
    title: "Rising Star Award",
    summary: "For the creator who shows the most potential across the convention.",
    setting: "Creators at the convention",
    ...AWARD_MARK,
    about:
      "The Rising Star Award celebrates the creator who demonstrates the most remarkable potential and progress over the days of the convention. Coaches invite the nominees on stage, and the margin between them is often narrow.",
    steps: [
      {
        title: "Attend the convention",
        description: "This award is open to creators who are present at the gathering.",
      },
      {
        title: "Create during the program",
        description:
          "Coaches look at research quality, uniqueness of niche, originality of approach, video style, view counts, storytelling, and how the Dharma is applied in the work.",
      },
      {
        title: "The coaches decide",
        description: "Nominees are called on stage together, and the coaches name the creator who progressed the most.",
      },
    ],
    winnerId: "rising-star",
    cta: { label: "Explore the Convention", href: "/convention" },
  },
  {
    slug: "audience-choice",
    title: "Audience Choice Award",
    summary: "Chosen by a live vote of everyone at the convention.",
    setting: "Creators at the convention",
    ...AWARD_MARK,
    about:
      "The Audience Choice Award places the decision with the participants. Videos made during the convention are curated, screened for the whole room, and the audience votes.",
    steps: [
      {
        title: "Attend and make a video",
        description: "Create a video during the convention. Only work made at the gathering is in the running.",
      },
      {
        title: "Be screened for the room",
        description:
          "The board team curates films and screens them for everyone present. In 2026, nine videos were shown.",
      },
      {
        title: "The audience votes",
        description: "Participants vote live. In 2026 the vote ran through Mentimeter, and the winner took 33% of all votes.",
      },
    ],
    winnerId: "audience-choice",
    cta: { label: "Explore the Convention", href: "/convention" },
  },
  {
    slug: "most-creative-video",
    title: "Most Creative Video Award",
    summary: "For the outstanding video made during the convention.",
    setting: "Creators at the convention",
    ...AWARD_MARK,
    about:
      "The Most Creative Video Award recognises the most outstanding video produced during the convention. It is for creators who push creativity, technology, and innovation while the gathering is underway.",
    steps: [
      {
        title: "Make a video at the convention",
        description: "The film has to be produced during the gathering, on your own or with other participants.",
      },
      {
        title: "Reach the shortlist",
        description: "A top group of films is set aside for a closer look. In 2026 that group was five.",
      },
      {
        title: "Coaches and panelists vote",
        description:
          "They judge use of AI, lighting, camera work, storytelling, authenticity, and emotional depth.",
      },
    ],
    winnerId: "most-creative-video",
    cta: { label: "Explore the Convention", href: "/convention" },
  },
  {
    slug: "most-followers-gained",
    title: "Most Followers Gained Award",
    summary: "For the participant whose audience grows the most across the convention.",
    setting: "Creators at the convention",
    ...AWARD_MARK,
    about:
      "The Most Followers Gained Award recognises the participant who grows their audience the most across the convention. The count at registration is compared with the count the day before the ceremony.",
    steps: [
      {
        title: "Register and share your count",
        description: "On arrival, your follower count is recorded. That number is the starting line.",
      },
      {
        title: "Keep sharing through the gathering",
        description: "Create and publish across the days of the convention, up to the day before the ceremony.",
      },
      {
        title: "The committee compares the two counts",
        description:
          "The Selection Committee measures growth from registration to the day before the ceremony. In 2026 the winning growth was over 16% in eight days.",
      },
    ],
    winnerId: "most-followers-gained",
    cta: { label: "Explore the Convention", href: "/convention" },
  },
];

export const getCompetition = (slug: string | undefined) =>
  COMPETITIONS.find((competition) => competition.slug === slug);
