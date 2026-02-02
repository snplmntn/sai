import { model } from "@/lib/ai";
import { streamText, convertToModelMessages, type LanguageModel } from "ai";

export const maxDuration = 30;

const PORTFOLIO_DATA = {
  about: {
    name: "Sean Paul Monton",
    title:
      "2nd Year Computer Science Student & Aspiring Full Stack AI Engineer",
    location: "Pasay City, Philippines",
    status: "Open for Internship & Freelance",
    bio: "Building Software Solutions with Purpose & Impact. 2nd Year BSCS student at PUP Manila and an SM Foundation Scholar. Blends academic rigor with real-world execution, bridging the gap between complex AI capabilities and intuitive user experiences.",
    highlights: [
      "2nd Year BSCS at Polytechnic University of the Philippines (PUP Manila)",
      "SM Foundation Scholar",
      "Specializes in high-availability platforms and AI-native solutions",
      "Shipped 8+ freelance projects and won multiple hackathons",
    ],
    techStack: [
      "AI Native",
      "TypeScript",
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
      company: "Laundry King MNL",
      role: "Co-founder, Lead Full Stack Developer",
      period: "July 2025 - Present",
      link: "https://laundrykingmnl.com/",
      achievements: [
        "Solely architected, engineered and deployed a highly available RESTful API using MERN with TypeScript",
        "Integrating AWS S3 for secure cloud storage with 100% backend test coverage",
        "Enabled ₱400,000+ in revenue by implementing an efficient order management system for 80+ active users (300+ total customers)",
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
      institution: "Polytechnic University of the Philippines – SHS",
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
      project: "Alnay & MedicAI",
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
      title: "Alnay & MedicAI",
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
Sean is a BSCS student at PUP Manila and an SM Scholar.

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
