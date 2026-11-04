## About This Portfolio

I am Sean Paul Monton, and I build the systems that businesses actually run on, while I am still finishing my BS in Computer Science. This site is my interactive portfolio, namely a 3D hero, animated sections, and an AI assistant (Sai) that answers questions about my experience, tech stack, and projects.

### About Me

- Founding Software Engineer @ Amplify; Co-Founder & Lead Full Stack Developer @ Kalinga Spa and Laundry King MNL
- BS Computer Science @ Polytechnic University of the Philippines; SM Foundation Scholar
- ₱1.1M+ in revenue shipped across two companies, using Go and PostgreSQL, TypeScript, Python, and AWS
- Based in Pasay City, Philippines, and open to speaking opportunities

## Highlights

- Theme-aware, responsive UI (light/dark)
- AI chat assistant with quick actions and markdown replies
- Sections for About, Experience, Education, Projects, Awards, and Contact
- Animated hero plus playful accents (floating tech, pacman trail)
- Accessible components via shadcn/ui primitives

## Tech Stack

- Next.js App Router
- Tailwind CSS + shadcn/ui
- Framer Motion animations
- Lucide icons
- Vercel AI SDK chat client

## Run Locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

### Environment

Copy `.env.example` to `.env.local` and set:

```
DEEPSEEK_API_KEY=your_api_key_here
```

The AI chat requires a valid DeepSeek API key.

## Project Map

- [app/page.tsx](app/page.tsx) - page composition
- [app/layout.tsx](app/layout.tsx) - global shell and providers
- [components/ai-fab.tsx](components/ai-fab.tsx) - Sai chat assistant
- [components](components) - hero, sections, navbar, theming, and shared UI
- [lib](lib) - utilities and AI client
- [public](public) - static assets (favicons, resume, logos)

## Contact

- Email: snplmntn@gmail.com
- LinkedIn: https://linkedin.com/in/snplmntn
- GitHub: https://github.com/snplmntn
