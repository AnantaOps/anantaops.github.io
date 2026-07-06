import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "@/components/Logo";

const links = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Company", href: "#about" },
  { label: "Blog", href: "https://articles.anantaops.com/" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border/60 bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground lg:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="hero" size="sm" asChild className="hidden sm:inline-flex">
            <a href="#products">Explore Products</a>
          </Button>
          <button
            className="rounded-md p-2 text-muted-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};