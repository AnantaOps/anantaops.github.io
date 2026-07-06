import { useState } from "react";
import { CursorSpotlight } from "@/components/landing/CursorSpotlight";
import {
  ArrowRight,
  Sparkles,
  GitBranch,
  Cloud,
  Layers,
  Github,
  Linkedin,
  Mail,
  Check,
  X,
  Brain,
  Workflow,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/landing/Nav";
import { DashboardMock } from "@/components/landing/DashboardMock";
import { Logo } from "@/components/Logo";

const Hero = () => (
  <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
    <div className="absolute inset-0 grid-pattern" />
    <div className="absolute inset-0 gradient-hero" />
    <div className="container relative">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-medium text-muted-foreground">AI-Native Engineering Company</span>
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Engineering <span className="text-brand-gradient">Intelligence</span>
            <br />
            for Modern Software Teams
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            AnantaOps builds AI-powered engineering products that help teams automate infrastructure, deploy confidently, investigate incidents faster, and scale cloud-native applications with ease.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="hero" size="lg" asChild>
              <a href="#products">Explore Products <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Book Consultation</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> SOC2 ready</span>
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Cloud-native</span>
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Open ecosystem</span>
          </div>
        </div>
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <DashboardMock />
        </div>
      </div>
    </div>
  </section>
);

const stack = [
  "Kubernetes","Docker","Go","Rust","Python","Terraform",
  "AWS","Azure","GCP","OpenAI","Anthropic","PostgreSQL",
  "Redis","Kafka","GitHub","GitLab","Prometheus","Grafana",
];

const Trust = () => (
  <section id="technologies" className="border-t border-border bg-muted/20 py-24 lg:py-32">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-primary">Technologies</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          The stack we <span className="text-brand-gradient">build on</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Modern, cloud-native, and AI-first — the tools we use to ship reliable engineering platforms.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9">
        {stack.map((s) => (
          <div
            key={s}
            className="flex items-center justify-center rounded-lg border border-border bg-card px-3 py-3 text-sm font-medium text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground"
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const insightFeatures = [
  "Root Cause Analysis","Engineering AI Assistant","Slack Integration",
  "GitHub Integration","Kubernetes Intelligence","Incident Investigation",
  "Observability","Knowledge Retrieval",
];

const otherProducts = [
  { name: "AnantaDeploy", status: "Coming Soon", desc: "GitOps-powered deployment platform for Kubernetes.", icon: GitBranch },
  { name: "AnantaObserve", status: "Coming Soon", desc: "AI-powered observability platform.", icon: TrendingUp },
  { name: "AnantaFlow", status: "Coming Soon", desc: "Engineering workflow automation platform.", icon: Workflow },
  { name: "More Products", status: "In R&D", desc: "We are building an ecosystem of intelligent engineering platforms.", icon: Sparkles },
];

const Products = () => (
  <section id="products" className="py-24 lg:py-32">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-primary">Products</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Building the future of <span className="text-brand-gradient">engineering operations</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">A growing ecosystem of AI-powered platforms for modern engineering teams.</p>
      </div>

      <div className="relative mt-16 overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
        <div className="absolute inset-0 gradient-hero opacity-60" />
        <div className="relative grid gap-8 p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-brand shadow-glow">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">Public Beta</span>
            </div>
            <h3 className="mt-5 text-3xl font-semibold tracking-tight">InsightOps</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              AI-powered engineering intelligence that connects Slack, Jira, GitHub, Gmail, Kubernetes, monitoring tools, and cloud providers.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Instead of searching dashboards and logs, ask <span className="font-medium text-foreground">"Why are deliveries failing today?"</span> — InsightOps investigates across your stack and explains the root cause in plain English.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2">
              {insightFeatures.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <Button variant="hero" asChild>
                <a href="https://insightsops.anantaops.com/#cta" target="_blank" rel="noopener noreferrer">
                  Join Beta <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://insightsops.anantaops.com/" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block"><DashboardMock /></div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {otherProducts.map((p) => (
          <div key={p.name} className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full gradient-brand opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20" />
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
              <span className="mt-1 inline-block rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">{p.status}</span>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const solutions = [
  { icon: Cloud, title: "Cloud Platform Engineering", desc: "Production-ready Kubernetes platforms with GitOps, security, and observability built in." },
  { icon: GitBranch, title: "DevOps Automation", desc: "CI/CD, GitOps, and Infrastructure as Code delivered with modern engineering practices." },
  { icon: Brain, title: "AI Engineering", desc: "LLMs, RAG, agents, and automation applied to real engineering workflows." },
  { icon: Layers, title: "Platform Architecture", desc: "Cloud-native system design for high-growth startups and enterprises." },
];

const Solutions = () => (
  <section id="solutions" className="border-t border-border bg-muted/20 py-24 lg:py-32">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-primary">Solutions</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Engineering Solutions</h2>
        <p className="mt-4 text-lg text-muted-foreground">Beyond our products, our team helps you architect, build, and operate at scale.</p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {solutions.map((s) => (
          <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-muted to-background shadow-sm transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-elevated">
              <s.icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const traditional = ["Multiple dashboards","Manual debugging","Context switching","Alert fatigue","Slow incident response"];
const withAnanta = ["AI understands your systems","Natural language investigations","Connected engineering knowledge","Automated workflows","Faster incident resolution"];

const Why = () => (
  <section id="why" className="py-24 lg:py-32">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-primary">Why AnantaOps</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">One intelligent layer for the engineering stack</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Modern engineering teams juggle too many disconnected tools. AnantaOps unifies them with AI so engineers can ask questions naturally and act with confidence.
        </p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8">
          <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Traditional Engineering</h3>
          <ul className="mt-6 space-y-4">
            {traditional.map((t) => (
              <li key={t} className="flex items-start gap-3 text-muted-foreground">
                <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500/70" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card p-8 shadow-elevated">
          <div className="absolute inset-0 gradient-hero opacity-40" />
          <div className="relative">
            <h3 className="text-sm font-medium uppercase tracking-wider text-brand-gradient">AnantaOps</h3>
            <ul className="mt-6 space-y-4">
              {withAnanta.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const roadmap = [
  { year: "2026", label: "Now", items: ["Cloud Engineering","DevOps","Infrastructure Consulting","InsightOps Beta"] },
  { year: "2027", label: "Next", items: ["InsightOps GA","AnantaDeploy","AnantaObserve","Engineering AI Agents"] },
  { year: "Future", label: "Vision", items: ["Complete AI Engineering Platform","Autonomous Operations","Enterprise Platform"] },
];

const Roadmap = () => (
  <section id="roadmap" className="py-24 lg:py-32">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-primary">Roadmap</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Where we're headed</h2>
      </div>
      <div className="relative mt-16 grid gap-8 md:grid-cols-3">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
        {roadmap.map((r) => (
          <div key={r.year} className="relative">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full gradient-brand shadow-glow" />
              <span className="font-mono text-sm text-muted-foreground">{r.label}</span>
            </div>
            <p className="mt-2 text-3xl font-semibold tracking-tight">{r.year}</p>
            <ul className="mt-5 space-y-3">
              {r.items.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="border-t border-border bg-muted/20 py-24 lg:py-32">
    <div className="container">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="text-sm font-medium text-primary">About</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Software engineering, made <span className="text-brand-gradient">intelligent</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            AnantaOps is an AI-native engineering company building the tools and platforms that modern software teams need to move faster with confidence. We combine deep cloud-native expertise with applied AI to remove operational friction from the way engineers work.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our products investigate incidents, reason across systems, and automate the repetitive work that slows teams down — while our engineering services help organizations architect, ship, and scale production platforms.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We're a small, senior team obsessed with craft, reliability, and the future of autonomous engineering.
          </p>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-elevated md:p-14">
            <div className="absolute inset-0 gradient-hero opacity-70" />
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full gradient-brand opacity-10 blur-3xl" />
            <div className="relative">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Our Slogan</span>
              <p className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                <span className="text-brand-gradient">Engineering intelligence,</span>
                <br />
                infinite possibilities.
              </p>
              <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                <span className="text-foreground font-medium">Ananta</span> means <em>infinite</em> — a reminder that engineering, when paired with intelligence, has no ceiling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formspree.io/f/xaqpbdkd", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("sent"); form.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };
  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 gradient-hero" />
      <div className="container relative">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-8 shadow-elevated md:p-14">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Ready to build <span className="text-brand-gradient">smarter engineering</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">Talk to us about InsightOps, engineering solutions, or partnerships.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#products">Explore InsightOps <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:ops.is.ananta@gmail.com">Email us</a>
              </Button>
            </div>
          </div>
          <form onSubmit={onSubmit} className="mx-auto mt-12 max-w-2xl space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" type="text" required maxLength={100} placeholder="Your name" className="h-11 rounded-lg border border-border bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
              <input name="email" type="email" required maxLength={255} placeholder="you@company.com" className="h-11 rounded-lg border border-border bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
            <textarea name="message" required maxLength={2000} rows={4} placeholder="What are you building?" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
            <div className="flex flex-col items-center gap-3">
              <Button type="submit" variant="hero" size="lg" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Start a Conversation"} <ArrowRight className="h-4 w-4" />
              </Button>
              {status === "sent" && <p className="text-sm text-primary">Message sent — we'll be in touch.</p>}
              {status === "error" && <p className="text-sm text-destructive">Something went wrong. Please try again.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const footerCols: { title: string; links: [string, string][] }[] = [
  { title: "Products", links: [["InsightOps", "#products"], ["Future Products", "#products"]] },
  { title: "Solutions", links: [["Cloud Engineering", "#solutions"], ["DevOps", "#solutions"], ["AI Engineering", "#solutions"], ["Platform Architecture", "#solutions"]] },
  { title: "Resources", links: [["Documentation", "#"], ["GitHub", "https://github.com/AnantaOps"], ["Blog", "#"]] },
  { title: "Company", links: [["About", "#about"], ["Roadmap", "#roadmap"], ["Contact", "#contact"], ["LinkedIn", "https://www.linkedin.com/in/ananta-ops-5214223b7/"]] },
];

const Footer = () => (
  <footer className="border-t border-border">
    <div className="container py-16">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Engineering intelligence, infinite possibilities. Building AI-native engineering platforms for modern teams.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="https://github.com/AnantaOps" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/ananta-ops-5214223b7/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:ops.is.ananta@gmail.com" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
        {footerCols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold">{c.title}</h4>
            <ul className="mt-4 space-y-3">
              {c.links.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
        <span>AnantaOps © {new Date().getFullYear()} · Engineering Intelligence, Infinite Possibilities.</span>
        <span className="font-mono text-xs">Built with intent.</span>
      </div>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    {/* Background watermark — decorative, behind everything */}
    <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden">
      <img
        src="/anantaops-logo.png"
        alt=""
        width={900}
        height={900}
        className="opacity-10 dark:brightness-0 dark:invert"
      />
    </div>
    <CursorSpotlight />
    <Nav />
    <main>
      <Hero />
      <Products />
      <Solutions />
      <Why />
      <Roadmap />
      <About />
      <Trust />
      <CTA />
    </main>
    <Footer />
  </div>
);

export default Index;