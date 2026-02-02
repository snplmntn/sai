"use client";

import { useChat, type UIMessage } from "@ai-sdk/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Sparkles,
  X,
  Send,
  ArrowDown,
  Rocket,
  Award,
  Code,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { SaiLogo } from "@/components/sai-logo";

type ChatMessage = UIMessage;
type QuickAction = {
  label: string;
  question: string;
  answer: string;
  actionLink: string;
  actionLabel: string;
};

const QUICK_ACTIONS: QuickAction[] = [
  {
    label: "Tech Stack",
    question: "What is your tech stack?",
    answer:
      "Sean's stack includes JavaScript, TypeScript, Python, and Go. For frameworks, he uses React, Node.js, Express, FastAPI, and Chi. He's also proficient with AWS (S3, Lambda, EC2), Docker, and Supabase.",
    actionLink: "#tech",
    actionLabel: "View Tech Stack",
  },
  {
    label: "Experience",
    question: "Tell me about your experience.",
    answer:
      "Sean co-founded Laundry King MNL (₱400k+ Revenue) and has worked on AI architecture at Moss Manila. He also developed Baobab Vision, a computer vision integration for eyewear recommendations.",
    actionLink: "#experience",
    actionLabel: "See Timeline",
  },
  {
    label: "Projects",
    question: "What are your best projects?",
    answer:
      "Key projects include AInay & MedicAI (hackathon winners for polypharmacy risks and clinical documentation), AWS Cloud Club PUP LMS, and Budget Wingman.",
    actionLink: "#projects",
    actionLabel: "View Projects",
  },
  {
    label: "Contact",
    question: "How can I contact you?",
    answer:
      "You can reach Sean at 2136seanpaul@gmail.com. He's also reachable via LinkedIn and GitHub (@snplmntn).",
    actionLink: "mailto:2136seanpaul@gmail.com",
    actionLabel: "Send Email",
  },
  {
    label: "Education",
    question: "Where does Sean study?",
    answer:
      "Sean is a BS Computer Science student at PUP Manila (2024-Present) and an SM Foundation Scholar. He graduated High School with High Honors from PUP SHS (ICT Strand).",
    actionLink: "#education",
    actionLabel: "View Education",
  },
  {
    label: "Awards",
    question: "What awards has Sean received?",
    answer:
      "Sean won 3rd Place Overall for AInay and the Clinical Assistant Bounty for MedicAI at the Ship or Be Shipped Philippines hackathon, competing against 80+ developers.",
    actionLink: "#recognition",
    actionLabel: "View Awards",
  },
  {
    label: "Resume",
    question: "Can you send me Sean's resume?",
    answer: "Sure! I can provide Sean's resume for you.",
    actionLink: "/Resume Sean Paul M. Monton.pdf",
    actionLabel: "Download Resume",
  },
];

const INITIAL_ASSISTANT_MESSAGE: ChatMessage = {
  id: "initial-greeting",
  role: "assistant",
  parts: [
    {
      type: "text",
      text: "Hi there! I'm Sai, Sean's AI helpful assistant. 👋 Thanks for visiting! Feel free to ask me anything about Sean's experience, tech stack, or projects. How can I help you today?",
    },
  ],
};

export function AiFab() {
  const idCounterRef = useRef(0);
  const nextId = () => {
    idCounterRef.current += 1;
    return `local-${idCounterRef.current}`;
  };

  const createTextMessage = (
    role: ChatMessage["role"],
    text: string,
    id?: string,
  ): ChatMessage => ({
    id: id ?? nextId(),
    role,
    parts: [{ type: "text", text }],
  });

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const [input, setInput] = useState("");
  const { messages, sendMessage, status, setMessages } = useChat<ChatMessage>({
    messages: [INITIAL_ASSISTANT_MESSAGE],
  });

  const isLoading = status === "submitted" || status === "streaming";

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e?: { preventDefault?: () => void }) => {
    e?.preventDefault?.();
    if (!input.trim() || isLoading) return;

    const currentInput = input;
    setInput("");
    await sendMessage({ text: currentInput });
  };

  const getMessageText = (m: ChatMessage) =>
    m.parts
      .filter(
        (p): p is { type: "text"; text: string } =>
          p?.type === "text" &&
          typeof (p as { text?: string }).text === "string",
      )
      .map((p) => p.text)
      .join("");
  const { resolvedTheme } = useTheme();
  const [mounted] = useState(() => typeof window !== "undefined");
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chipsContainer = chipsRef.current;
    if (!chipsContainer) return;

    const handleWheel = (e: WheelEvent) => {
      // prevent default vertical scroll from reaching the page
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        chipsContainer.scrollLeft += e.deltaY;
      }
    };

    // attach non-passive listener
    chipsContainer.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      chipsContainer.removeEventListener("wheel", handleWheel);
    };
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleChipClick = async (action: QuickAction) => {
    if (isTyping || isLoading) return;

    setIsTyping(true);
    const userMsg = createTextMessage("user", action.question);

    // optimistically show user message
    setMessages((prev) => [...prev, userMsg]);

    // simulate thinking delay
    await delay(600);

    const assistantMsgId = nextId();
    const words = action.answer.split(" ");
    let streamedContent = "";

    // stream the response
    for (let idx = 0; idx < words.length; idx += 1) {
      const word = words[idx];
      streamedContent += word + " ";
      setMessages((prev) => {
        const withoutAssistant = prev.filter(
          (msg) => msg.id !== assistantMsgId,
        );
        return [
          ...withoutAssistant,
          createTextMessage(
            "assistant",
            streamedContent.trimEnd(),
            assistantMsgId,
          ),
        ];
      });
      // deterministic cadence between 30ms and 70ms to appease purity rules
      await delay(30 + ((idx * 13) % 40));
    }

    setIsTyping(false);
  };

  const [currentNotification, setCurrentNotification] = useState(0);
  const NOTIFICATIONS = [
    { text: "Ask me anything about Sean!", icon: Sparkles },
    { text: "Curious about the tech stack?", icon: Sparkles },
    { text: "See how this portfolio was built", icon: Rocket },
    { text: "Let's schedule a call!", icon: Send },
    { text: "Check out my academic honors", icon: Award },
    { text: "Discover my latest projects", icon: Code },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % NOTIFICATIONS.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const getActionForMessage = (m: ChatMessage) => {
    const text = getMessageText(m);
    return QUICK_ACTIONS.find(
      (a) => text.includes(a.answer.trim()) || a.answer.includes(text.trim()),
    );
  };

  const CurrentIcon = NOTIFICATIONS[currentNotification].icon;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-4 max-w-[calc(100vw-2rem)]">
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            key={currentNotification}
            className="absolute bottom-20 right-0"
          >
            <div className="relative bg-background/95 backdrop-blur-md border border-border/50 text-foreground px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-2 pr-7">
              <div className="bg-primary/10 p-1 rounded-full shrink-0">
                <CurrentIcon className="h-3 w-3 text-primary" />
              </div>
              <span className="text-[10px] sm:text-xs font-medium whitespace-nowrap">
                {NOTIFICATIONS[currentNotification].text}
              </span>

              {/* close button style dismiss (visual only for now) */}
              <button className="absolute top-1.5 right-1.5 text-muted-foreground/50 hover:text-foreground transition-colors">
                <X className="h-3 w-3" />
              </button>

              {/* speech bubble tail */}
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-background border-r border-b border-border/50 rotate-45 transform"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-[90vw] sm:w-[380px] max-w-full"
          >
            <Card className="flex flex-col h-[min(600px,80vh)] border-border/60 shadow-2xl bg-card/95 backdrop-blur-md overflow-hidden">
              <div className="p-2 px-3 border-b flex justify-between items-center shrink-0">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="bg-primary/10 p-1.5 rounded-full ring-1 ring-primary/20">
                      <SaiLogo className="h-7 w-7" glow={false} />
                    </div>
                    <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500 border-2 border-background shadow-sm" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-xs leading-tight">
                      Chat with Sai
                    </h3>
                    <div className="flex items-center gap-1">
                      <div className="h-1 w-1 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[9px] text-muted-foreground font-medium uppercase tracking-wider">
                        Online
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-muted"
                  onClick={toggleOpen}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-3 space-y-3 scroll-smooth"
              >
                {messages.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full text-muted-foreground text-sm space-y-4 opacity-70">
                    <SaiLogo className="h-16 w-16 opacity-40" glow={false} />
                    <p className="max-w-[200px] text-center text-xs">
                      Ask about Sean&apos;s experience, tech stack, or projects.
                    </p>
                  </div>
                )}
                {messages.map((m: ChatMessage) => {
                  const messageText = getMessageText(m);
                  const action =
                    m.role === "assistant" ? getActionForMessage(m) : null;

                  return (
                    <div
                      key={m.id}
                      className={`flex flex-col gap-2 ${m.role === "user" ? "items-end" : "items-start"}`}
                    >
                      {messageText && (
                        <div
                          className={`rounded-2xl px-3 py-2 max-w-[85%] text-sm ${
                            m.role === "user"
                              ? "bg-primary text-primary-foreground rounded-br-none"
                              : "bg-muted rounded-bl-none"
                          }`}
                        >
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              p: ({ ...props }) => (
                                <p className="mb-1 last:mb-0" {...props} />
                              ),
                              ul: ({ ...props }) => (
                                <ul
                                  className="list-disc ml-4 mb-1"
                                  {...props}
                                />
                              ),
                              ol: ({ ...props }) => (
                                <ol
                                  className="list-decimal ml-4 mb-1"
                                  {...props}
                                />
                              ),
                              li: ({ ...props }) => (
                                <li className="mb-0.5" {...props} />
                              ),
                              a: ({ href, children, ...props }) => {
                                // check if this is a resume link and add download attribute
                                const isResumeLink = href?.includes(".pdf");
                                return (
                                  <a
                                    href={href}
                                    className="text-primary underline hover:opacity-80 break-all cursor-pointer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download={
                                      isResumeLink
                                        ? "Resume Sean Paul M. Monton.pdf"
                                        : undefined
                                    }
                                    {...props}
                                  >
                                    {children}
                                  </a>
                                );
                              },
                              strong: ({ ...props }) => (
                                <strong className="font-bold" {...props} />
                              ),
                            }}
                          >
                            {messageText}
                          </ReactMarkdown>
                        </div>
                      )}

                      {action && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-7 text-xs gap-1 ml-1 bg-background/50 backdrop-blur"
                          asChild
                        >
                          <a
                            href={action.actionLink}
                            target={
                              action.actionLink.startsWith("#")
                                ? undefined
                                : "_blank"
                            }
                          >
                            {action.actionLabel}
                            <ArrowDown className="h-3 w-3 -rotate-90" />
                          </a>
                        </Button>
                      )}
                    </div>
                  );
                })}
                {(isLoading || isTyping) && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-2xl rounded-bl-none px-3 py-2 flex gap-1 items-center">
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0,
                        }}
                        className="h-1.5 w-1.5 rounded-full bg-foreground/50"
                      />
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0.2,
                        }}
                        className="h-1.5 w-1.5 rounded-full bg-foreground/50"
                      />
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0.4,
                        }}
                        className="h-1.5 w-1.5 rounded-full bg-foreground/50"
                      />
                    </div>
                  </div>
                )}
                {/* invisible element to auto-scroll */}
                <div />
              </div>

              <div
                ref={chipsRef}
                className="px-3 py-1.5 bg-background/50 border-t border-border/20 overflow-x-auto flex gap-2 scrollbar-hide shrink-0 overscroll-x-contain"
              >
                {QUICK_ACTIONS.map((action) => (
                  <Button
                    key={action.label}
                    variant="outline"
                    size="sm"
                    disabled={isTyping || isLoading}
                    className="h-7 text-xs whitespace-nowrap bg-background/80 backdrop-blur hover:bg-primary/10 hover:text-primary transition-colors rounded-full px-3"
                    onClick={() => handleChipClick(action)}
                  >
                    {action.label}
                  </Button>
                ))}
              </div>

              <div className="p-2 border-t bg-background/80 shrink-0">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    value={input}
                    onChange={handleInputChange}
                    placeholder={
                      isTyping ? "Sai is typing..." : "Type a message..."
                    }
                    disabled={isTyping || isLoading}
                    className="bg-muted/50 border-0 h-9 text-xs focus-visible:ring-1 focus-visible:ring-primary/20"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="shrink-0 rounded-full h-9 w-9"
                    disabled={isTyping || isLoading}
                  >
                    <Send className="h-3.5 w-3.5" />
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={toggleOpen}
        size="lg"
        className="rounded-full h-14 w-14 shadow-2xl bg-primary hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 relative"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        <div
          className={`transition-transform duration-300 ${isOpen ? "rotate-180 scale-0 opacity-0" : "scale-100 opacity-100"}`}
        >
          <SaiLogo
            className="h-10 w-10 sm:h-11 sm:w-11"
            invert={mounted ? resolvedTheme === "light" : false}
          />
        </div>
        <span
          className={`absolute transition-all duration-300 ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 rotate-180"}`}
        >
          <X className="h-6 w-6 text-primary-foreground" />
        </span>
      </Button>
    </div>
  );
}
