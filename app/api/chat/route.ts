import { model } from "@/lib/ai";
import { streamText, convertToModelMessages, type LanguageModel } from "ai";

export const maxDuration = 30;

const PORTFOLIO_DATA = {
  about: {
    name: "Sean Paul Monton",
    title:
      "Founding Software Engineer at Amplify, Co-Founder & Lead Full Stack Developer at Kalinga Spa and Laundry King MNL",
    location: "Pasay City, Philippines",
    status: "Open for Volunteer Work",
    bio: "Co-founder of Kalinga Spa and Laundry King MNL, and Founding Software Engineer at Amplify, while finishing a BSCS at PUP Manila as an SM Foundation Scholar. Builds the platform a business actually runs on.",
    highlights: [
      "Founding Software Engineer at Amplify (May 2026 - Present)",
      "Co-Founder & Lead Full Stack Developer at Kalinga Spa (June 2026 - Present) and Laundry King MNL (July 2025 - Present)",
      "₱1.1M+ in revenue shipped across Kalinga Spa (₱731,000) and Laundry King MNL (₱400,000+)",
      "BSCS at Polytechnic University of the Philippines (PUP Manila), SM Foundation Scholar",
      "Specializes in high-availability platforms, operations tooling, and AI-native products",
    ],
    techStack: [
      "AI Native",
      "TypeScript",
      "PostgreSQL",
      "Python",
      "AWS (S3, Lambda, EC2)",
      "Next.js",
      "MERN",
      "Supabase",
      "React",
      "Node.js",
      "FastAPI",
      "Go",
      "Flutter",
      "Socket.IO",
      "Google ML Kit",
      "OpenAI",
      "NLP",
      "Big Data",
      "Docker",
    ],
  },
  experience: [
    {
      company: "Kalinga Spa",
      role: "Co-founder, Lead Full Stack Developer",
      period: "June 2026 - Present",
      achievements: [
        "Shipped the Go/PostgreSQL platform now running the whole business: ₱731,000 revenue over 677 bookings and 1,378 service hours in 2 months, at a ₱370,000/month run rate",
        "Replaced spreadsheet payouts with automated commission splits, wallets, and payroll, reconciling ₱248,000 in therapist earnings against ₱483,000 profit across 1,335 ledger records with zero manual computation",
      ],
    },
    {
      company: "Amplify",
      role: "Founding Software Engineer",
      period: "May 2026 - Present",
      link: "https://withamplify.ai/",
      achievements: [
        "Sole engineer on the self-serve product that replaced the agency service, built and shipped in 6 weeks, removing the per-client operator cost that capped the business at 5 brands",
        "Automated the workflow 7 operators ran by hand across 200 personas, converting a headcount-bound service into a platform that scales without hiring",
      ],
    },
    {
      company: "Nummeals",
      role: "Software Engineer Intern",
      period: "April 2026 - August 2026",
      link: "https://www.nummeals.com/",
      achievements: [
        "Automated rider routing across 33 riders and 27 delivery areas: 25 assignment rules replacing a manual spreadsheet, 603 reassignments processed, preview and one-click rollback on every run",
        "Shipped the rider delivery app across 38,773 stops and 2,904 rider-days: offline stop list, proof-of-delivery photos, and idempotent replay so no stop double-posts on reconnect",
        "Secured the operations console for 14 staff over 11,414 orders and 3,486 customers: role-based permissions enforced at the database row level, across 42 API endpoints",
      ],
    },
    {
      company: "Amplify",
      role: "Software Engineer Intern",
      period: "February 2026 - May 2026",
      link: "https://withamplify.ai/",
      achievements: [
        "Scaled the content engine to 120 accounts across 5 client brands: 8,647 posts in 30 days (288/day), 5.3M views, 33,000+ followers, 162,000-view top post",
        "Shipped Copy Photo, the platform's most-used feature: viral photo to on-brand persona shot in 2 minutes from 10, reclaiming ~1,150 operator hours monthly and yielding 54 posts over 5,000 views",
        "Automated compliance QA on all 8,647 monthly posts, cutting review from 5 minutes to 30 seconds and saving ~650 hours monthly across 11 blocking prescription-medicine and ad-disclosure checks",
      ],
    },
    {
      company: "Laundry King MNL",
      role: "Co-founder, Lead Full Stack Developer",
      period: "July 2025 - Present",
      link: "https://laundrykingmnl.com/",
      achievements: [
        "Solely architected, engineered and deployed a highly available RESTful API using MERN with TypeScript",
        "Integrating AWS S3 for secure cloud storage with 100% backend test coverage",
        "Enabled ₱400,000+ in revenue by implementing an efficient order management system for 80+ weekly active users (300+ total customers)",
      ],
    },
    {
      company: "Freelance",
      role: "Full Stack Mobile & Web Developer",
      period: "Jan 2024 - Present",
      achievements: [
        "Moss Manila: Engineered a MERN-based collaboration platform using Socket.IO for low-latency messaging and a Node.js/Express AI matching engine with vector-based semantic search (reduced spec time by 25%)",
        "Baobab Vision: Built a Flutter mobile application leveraging Google ML Kit for face shape analysis and OpenAI for personalized eyewear recommendations",
      ],
    },
  ],
  education: [
    {
      institution: "Polytechnic University of the Philippines",
      degree: "Bachelor of Science in Computer Science",
      location: "Sta. Mesa, Manila, Philippines",
      period: "2024 - Present",
      highlights: [
        "SM Foundation Scholar",
        "Object Oriented Programming",
        "Data Structures and Algorithms",
      ],
    },
    {
      institution: "Polytechnic University of the Philippines - SHS",
      degree: "Information and Communications Technology Strand",
      location: "Sta. Mesa, Manila, Philippines",
      period: "2022 - 2024",
      highlights: ["Graduated with High Honors"],
    },
  ],
  awards: [
    {
      name: "1st Runner Up - PMAX-EMAX Innovation Expo",
      project: "TickTrack",
      stats: "2-Hour AI Native Sprint",
      date: "December 2025",
    },
    {
      name: "3rd Place Overall & Clinical Assistant Bounty - Ship or Be Shipped Philippines",
      project: "AInay & MedicAI",
      stats: "Dual-Awarded (76% medication non-adherence focus)",
      date: "December 2025",
    },
  ],
  affiliations: {
    active: [
      {
        role: "Web Development Lead",
        org: "PUP Manila Microsoft Student Community",
        period: "Sept 2025 - Present",
        type: "Leadership",
      },
      {
        role: "Backend Developer",
        org: "AWS Cloud Club PUP",
        period: "Oct 2025 - Present",
        type: "Technical",
      },
      {
        role: "Team Lead - Lead Dev",
        org: "Team CoolPals (Hackathon Team)",
        period: "Nov 2025 - Present",
        type: "Leadership",
      },
    ],
    previous: [
      {
        role: "Back End Developer",
        org: "AWS Cloud Club Philippines",
        period: "Oct 2024 - Aug 2025",
        type: "Technical",
      },
      {
        role: "Junior Web Developer",
        org: "PUP Manila Microsoft Student Community",
        period: "Dec 2024 - Aug 2025",
        type: "Technical",
      },
      {
        role: "Senior Artificial Intelligence Specialist",
        org: "AWS Cloud Club PUP",
        period: "Nov 2024 - Aug 2025",
        type: "AI/ML",
      },
    ],
  },
  projects: [
    {
      title: "TickTrack",
      role: "Full Stack Developer (Team CoolPals)",
      desc: "Built a working AI-powered operational communication prototype in under 2 hours, competing against industry vets. 1st Runner Up at PMAX-EMAX Innovation Expo.",
      stats: "2-Hour Sprint",
      stack: ["AI Native", "Rapid Prototyping", "Next.js"],
      date: "December 2025",
    },
    {
      title: "AInay & MedicAI",
      role: "Team Lead, Full Stack Developer",
      desc: "Architected platforms for FDA registries and Kaggle datasets. Targeted addresses 76% medication non-adherence rate. 3rd Place Overall & Clinical Assistant Bounty.",
      stats: "Dual-Awarded",
      stack: ["MERN", "TypeScript", "Big Data"],
      date: "December 2025",
    },
    {
      title: "AWS Cloud Club PUP LMS",
      role: "Backend Developer",
      desc: "Developed auth & data layer for 300+ members.",
      stats: "Cloud Native",
      stack: ["TypeScript", "Supabase"],
      date: "November 2025",
    },
    {
      title: "Budget Wingman",
      role: "Team Lead, Full Stack Developer",
      desc: "Built chatbot extraction logic in a 24-hour sprint. Translates natural language into structured financial database entries.",
      stats: "AI Architecture",
      stack: ["Express.js", "OpenAI", "NLP"],
      date: "April 2025",
    },
  ],
  contacts: {
    email: "2136seanpaul@gmail.com",
    github: "https://github.com/snplmntn",
    linkedin: "https://www.linkedin.com/in/snplmntn",
    calendly: "https://calendly.com/2136seanpaul/30min",
    resumeUrl: "/Resume Sean Paul M. Monton.pdf",
  },
};

// stream chat responses from deepseek to the ui
type ChatRole = "user" | "assistant" | "system";
type ChatMessage = {
  role: ChatRole;
  content?: string;
  parts?: { type: "text"; text?: string }[];
};

type ChatRequestBody = { messages: ChatMessage[] };
type UiTextPart = { type: "text"; text: string };
type UiMessage = { role: ChatRole; parts: UiTextPart[] };
const chatModel: LanguageModel = model;

export async function POST(req: Request): Promise<Response> {
  const { messages } = (await req.json()) as ChatRequestBody;

  const normalizedMessages: UiMessage[] = messages.map((m) => {
    const parts: UiTextPart[] = m.parts
      ? m.parts.map((p) => ({ type: "text", text: p.text ?? "" }))
      : m.content
        ? [{ type: "text", text: m.content }]
        : [];

    return { role: m.role, parts };
  });

  const systemPrompt = `You are Sai, Sean Paul Monton's AI assistant. You are friendly, professional, and directly helpful.
Sean is the Founding Software Engineer at Amplify, co-founder and lead full stack developer of Kalinga Spa and Laundry King MNL, and a BSCS student at PUP Manila and an SM Scholar.

### KNOWLEDGE BASE:
${JSON.stringify(PORTFOLIO_DATA, null, 2)}

### CRITICAL RULES:
1. PHONE NUMBER: NEVER share Sean's phone number. Redirect to Email or LinkedIn.
2. STYLE: Be extremely concise, direct, and professional. Avoid small talk.
3. RESUME: If asked for a resume or CV, always respond with exactly: "[Download Resume](/Resume%20Sean%20Paul%20M.%20Monton.pdf)"

Direct visitors to the official contact links (Email, LinkedIn, GitHub, Calendly) when they want to connect.`;

  const result = await streamText({
    model: chatModel,
    messages: await convertToModelMessages(normalizedMessages),
    system: systemPrompt,
  });

  return result.toUIMessageStreamResponse();
}
