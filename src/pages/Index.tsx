import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Server, GitBranch, Cloud, Code2 } from "lucide-react";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
    <div className="container flex h-14 items-center justify-between">
      <a href="#" className="font-mono text-lg font-medium tracking-tight">
        Ananta<span className="text-primary">Ops</span>
      </a>
      <nav className="hidden items-center gap-6 font-mono text-sm text-muted-foreground md:flex">
        <a href="#services" className="transition-colors duration-200 hover:text-foreground">Services</a>
        <a href="#approach" className="transition-colors duration-200 hover:text-foreground">Approach</a>
        <a href="#about" className="transition-colors duration-200 hover:text-foreground">About</a>
        <a href="#contact" className="transition-colors duration-200 hover:text-foreground">Contact</a>
      </nav>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button variant="hero" size="sm" className="hidden md:inline-flex">
          Book a Consultation
        </Button>
      </div>
    </div>
  </header>
);


const Hero = () => (
  <section className="relative flex min-h-screen items-center justify-center grid-pattern">
    <div className="hero-glow absolute inset-0" />
    <div className="container relative z-10 py-32 text-center">
      <p className="mb-4 font-mono text-sm text-primary">Cloud-Native Engineering Studio</p>
      <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
        Reliable Cloud Infrastructure for Modern Startups
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
        AnantaOps helps startups build scalable, reliable infrastructure using Kubernetes, DevOps automation, and cloud-native engineering.
      </p>
      <div className="mt-10 flex items-center justify-center gap-4">
        <Button variant="hero" size="lg">Book a Consultation</Button>
        <Button variant="heroOutline" size="lg">
          <a href="#services">View Services</a>
        </Button>
      </div>
    </div>
  </section>
);

const services = [
  { icon: Server, title: "Kubernetes Infrastructure", desc: "Design, deploy, and manage production-grade Kubernetes clusters." },
  { icon: GitBranch, title: "DevOps Automation", desc: "CI/CD pipelines, infrastructure-as-code, automated deployments." },
  { icon: Cloud, title: "Cloud Architecture", desc: "Design scalable systems on AWS, GCP, or other cloud platforms." },
  { icon: Code2, title: "Backend Systems", desc: "High-performance backend services using modern engineering practices." },
];

const Services = () => (
  <section id="services" className="border-t border-border py-24">
    <div className="container">
      <p className="mb-2 font-mono text-sm text-primary">Services</p>
      <h2 className="text-3xl font-semibold md:text-4xl">What We Do</h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-md border border-border bg-card p-6 transition-all duration-200 hover:border-primary/40 hover:shadow-[0_0_20px_hsla(217,91%,60%,0.06)]"
          >
            <s.icon className="mb-4 h-5 w-5 text-secondary" />
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const approach = [
  { num: "01", title: "Engineering First", desc: "Focus on reliability, scalability, and maintainable infrastructure." },
  { num: "02", title: "Startup Friendly", desc: "Flexible engagement for early-stage and growing companies." },
  { num: "03", title: "Production Ready", desc: "Solutions designed for real-world workloads." },
];

const Approach = () => (
  <section id="approach" className="border-t border-border py-24">
    <div className="container">
      <p className="mb-2 font-mono text-sm text-primary">Process</p>
      <h2 className="text-3xl font-semibold md:text-4xl">How We Work</h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {approach.map((a) => (
          <div key={a.num}>
            <span className="font-mono text-3xl font-medium text-primary/30">{a.num}</span>
            <h3 className="mt-3 text-lg font-semibold">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="border-t border-border py-24">
    <div className="container max-w-3xl">
      <p className="mb-2 font-mono text-sm text-primary">About</p>
      <h2 className="text-3xl font-semibold md:text-4xl">About AnantaOps</h2>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        AnantaOps is a cloud-native engineering studio focused on building reliable infrastructure for modern applications. We specialize in Kubernetes, DevOps automation, and backend systems to help startups move faster without sacrificing stability.
      </p>
    </div>
  </section>
);

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formspree.io/f/xaqpbdkd", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="container max-w-3xl">
        <div className="text-center">
          <p className="mb-2 font-mono text-sm text-primary">Contact</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Let's Build Reliable Infrastructure</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            If your startup needs help scaling infrastructure or improving DevOps workflows, we'd love to talk.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block font-mono text-sm text-muted-foreground">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                placeholder="Your name"
                className="flex h-10 w-full rounded-md border border-border bg-card px-3 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block font-mono text-sm text-muted-foreground">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                placeholder="you@company.com"
                className="flex h-10 w-full rounded-md border border-border bg-card px-3 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-sm text-muted-foreground">Message</label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={2000}
              rows={5}
              placeholder="Tell us about your project..."
              className="flex w-full rounded-md border border-border bg-card px-3 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button
              type="submit"
              variant="hero"
              size="lg"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </Button>
            {status === "sent" && (
              <p className="font-mono text-sm text-primary">Message sent — we'll be in touch!</p>
            )}
            {status === "error" && (
              <p className="font-mono text-sm text-destructive">Something went wrong. Please try again.</p>
            )}
          </div>
        </form>

        <div className="mt-10 flex items-center justify-center gap-6 font-mono text-sm text-muted-foreground">
          <a href="mailto:ops.is.ananta@gmail.com" className="transition-colors duration-200 hover:text-foreground">ops.is.ananta@gmail.com</a>
          <a href="https://www.linkedin.com/in/ananta-ops-5214223b7/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-foreground">LinkedIn</a>
          <a href="https://github.com/AnantaOps" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-foreground">GitHub</a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
      <span className="font-mono">AnantaOps © {new Date().getFullYear()}</span>
      <div className="flex gap-6 font-mono">
        <a href="https://github.com/AnantaOps" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-foreground">GitHub</a>
        <a href="https://www.linkedin.com/in/ananta-ops-5214223b7/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-foreground">LinkedIn</a>
      </div>
    </div>
  </footer>
);

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Services />
      <Approach />
      <About />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
