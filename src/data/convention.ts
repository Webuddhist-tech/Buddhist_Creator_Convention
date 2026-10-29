/**
 * BCC 2026 phase-by-phase program detail, sourced from the Buddhist Creators
 * Convention 2026 report (public/images/convention/bcc-2026-report.pdf, pp. 4-21).
 */

export interface ConventionPhase {
  id: string;
  phase: string;
  dates: string;
  title: string;
  summary: string;
}

export const CONVENTION_PHASES: ConventionPhase[] = [
  {
    id: "phase-1",
    phase: "Phase 1",
    dates: "29 – 30 January 2026",
    title: "Community Days & Opening Ceremony",
    summary:
      "Registration, an opening dinner at Shechen Monastery, the inaugural ceremony, a panel on Buddhism in the digital age, 27 lightning talks, and community circles — building the foundation for the week ahead.",
  },
  {
    id: "phase-2",
    phase: "Phase 2",
    dates: "31 January – 5 February 2026",
    title: "Masterclass: Marketing the Dharma",
    summary:
      "Six intensive days led by Mr. Milan Amin and Dr. Jaimin Shukla, covering six modules from digital marketing foundations to sustainable creator practice — 82% of participants rated it very effective.",
  },
  {
    id: "phase-3",
    phase: "Phase 3",
    dates: "6 February 2026",
    title: "Award Ceremony & Closing",
    summary:
      "A masterclass recap, the Buddhist Influencer of the Year 2026 awards, certificate distribution, a closing ceremony and prayer meet at the Mahabodhi Temple, and a gala dinner.",
  },
];

export const PHASE_ONE = {
  openingCeremony: {
    title: "The Opening Ceremony",
    body: "The stage came alive with a traditional Scarf Presentation offering, followed by the lighting of butter lamps in front of the Buddha statue. Mrs. Deepa Thakur led the assembly in chanting the Heart Sutra in Pali, grounding the gathering in the spiritual essence of the retreat.",
  },
  keynotes: [
    {
      name: "Shri Abhijit Halder",
      role: "Director General, International Buddhist Confederation",
      body: "Spoke on the intersection of social media and social responsibility, urging creators to adopt mindfulness as their core operating principle and to use their borderless platforms for the benefit of global society.",
    },
    {
      name: "Dzongsar Jamyang Khyentse Rinpoche",
      role: "Video message",
      body: "Reflected on the paradox of influence — we resist being influenced while wanting to influence others — and expressed hope that creators use their influence with good intentions and meaningful content.",
    },
    {
      name: "Shechen Ramjam Rinpoche",
      role: "Video message",
      body: "Underscored the importance of Buddhist content creation in an era of rapid change, and encouraged attendees to make teachings accessible while preserving their authentic message.",
    },
    {
      name: "Kyabje Trulshik Yangsi Rinpoche",
      role: "Video message",
      body: "In his first-ever address of this kind, Rinpoche shared that if even one viewer is inspired to cause a little less harm and do a little more good, the work is worthwhile — and asked participants to hold a pure motivation.",
    },
  ],
  panel: {
    title: "Future of Buddhism in the Digital Age",
    moderator: "Rahul Dongre",
    panelists: ["Aachen Tenzin Thupten", "Ayye Shakya Dhammadinna", "Quinthup Pema Bhutia"],
    body: "The panel examined authenticity, accessibility, and the digital divide — how creators maintain the integrity of Buddhist teachings while adapting them for digital formats and diverse, less-connected audiences.",
  },
  lightningTalks: {
    title: "Lightning Talks: Creator Showcase",
    presenterCount: 27,
    rooms: ["Lumbini", "Bodh Gaya", "Sarnath", "Kushinagar"],
    body: "27 presenters rotated across four concurrent rooms named for sites in the Buddha's life — each allotted 15 minutes (7 for their talk, 5 for Q&A, 2 to transition) so attendees could move freely between spaces based on their interests.",
  },
  whyBehindTheWhat: {
    title: "The Why Behind the What",
    speaker: "Ngawang Trinley",
    role: "Founder, OpenPecha Trust",
    videoMessage: "Yongey Mingyur Rinpoche",
    body: "A session on why the convention exists, opening with a video message from Yongey Mingyur Rinpoche on conveying timeless Buddhist wisdom to the modern world, followed by a presentation on the path to reaching 100 million people by 2030.",
  },
  communityCircles: {
    title: "Community Circles",
    facilitator: "Ms. Senge",
    body: "Participants split into seven thematic groups, each tackling a real problem statement tied to one of the masterclass's core topics, before presenting their proposed solutions back to the community.",
    themes: [
      {
        title: "Digital Bodhisattva",
        question:
          "How can we use platforms designed for 'ego-promotion' and 'distraction' to cultivate genuine selflessness and presence for our followers?",
      },
      {
        title: "Knowing the World's Needs",
        question:
          "How do we bridge the gap between the truth people need to hear and the content they want to click on, without compromising the Dharma?",
      },
      {
        title: "Storytelling",
        question:
          "The Dharma is timeless, but attention spans are shrinking — how do we turn a profound teaching into a story a distracted teenager would find unforgettable?",
      },
      {
        title: "AI as Assistant",
        question:
          "If AI can generate a perfect Dharma talk, what is the unique human or spiritual element only a practitioner can provide?",
      },
      {
        title: "Virality & Consistency",
        question:
          "How do we maintain a consistent daily posting rhythm without burning out or losing our meditative peace?",
      },
      {
        title: "Sustainability",
        question:
          "How can we redefine financial support as a form of Dana that sustains the wheel of Dharma, rather than contradicting non-attachment?",
      },
      {
        title: "On-Camera Presence",
        question:
          "How can we transform the camera into a window of compassion rather than a mirror of the ego?",
      },
    ],
  },
};

export const MASTERCLASS_MODULES = [
  {
    number: 1,
    title: "Digital Marketing Foundations",
    body: "How digital platforms and algorithms function, content strategy aligned with dharma principles, audience personas, and analytics that matter for spiritual teachers.",
  },
  {
    number: 2,
    title: "Content Creation Excellence",
    body: "Storytelling for the digital age, video production basics, podcast and audio quality, engaging captions, and visual design for social media.",
  },
  {
    number: 3,
    title: "Platform-Specific Strategies",
    body: "YouTube SEO and playlists, Instagram engagement, Facebook community building, podcast distribution, blog SEO, and evaluating emerging platforms like TikTok and Threads.",
  },
  {
    number: 4,
    title: "Ethical Marketing of Dharma",
    body: "Growing an audience without compromising authenticity, avoiding commercialisation pitfalls, respecting lineage and tradition, and cultural sensitivity across global audiences.",
  },
  {
    number: 5,
    title: "Community Engagement",
    body: "Building online sanghas that support genuine practice, handling questions and criticism with grace, interactive experiences, and converting followers into committed practitioners.",
  },
  {
    number: 6,
    title: "Sustainable Creator Practice",
    body: "Time management and content planning, avoiding burnout, ethical approaches to monetisation and Dana, partnerships, and long-term strategy as a dharma teacher.",
  },
];

export const PHASE_TWO = {
  coaches: [
    {
      name: "Milan Amin",
      title: "Senior Brand Strategist",
    },
    {
      name: "Dr. Jaimin Shukla",
      title: "Global Chief Marketing Officer",
    },
  ],
  programStructure: [
    "A balanced mix of theory and hands-on practice",
    "Daily one-hour doubt-clearing sessions at the end of each day",
    "Interactive engagement through Mentimeter and open-mic Q&A",
    "Daily workbooks shared via Sherab.org in English, Hindi, Nepali, and Tibetan",
    "Community sharing and networking each evening",
  ],
  specialSession: {
    title: "Special Session with Chokyong Palga Rinpoche",
    body: "On the final day of the masterclass, Rinpoche shared his life story and delivered accessible, relevant teachings, followed by an interactive question-and-answer segment.",
  },
  effectiveness: {
    veryEffective: "82%",
    somewhatEffective: "12%",
  },
};

export const PHASE_THREE = {
  recap: {
    title: "Masterclass Recap",
    body: "A holistic review of the six-day masterclass, giving participants a chance to see how each session linked together and to raise any lingering questions before the closing ceremony.",
  },
  certificateDistribution: {
    title: "Certificate Distribution",
    body: "All participants received Masterclass Certificates from the coaches, and members of the organising team were honoured with Certificates of Acknowledgement.",
  },
  closingCeremony: {
    title: "Closing Ceremony & Prayer Meet",
    body: "Dignitaries from Shechen Monastery, the Mahabodhi Society, and a Tibetan Member of Parliament joined the closing ceremony, followed by a prayer ceremony at the Mahabodhi Temple led by Palga Rinpoche and a group photo for the record.",
  },
  galaDinner: {
    title: "The Gala Dinner and Expression",
    body: "An evening of singing, dance, and poetry from participants, with performances from Ladakh Phuntsok and a Tara performance by Deepa Ji — a bittersweet, joyous close to the convention.",
  },
};
