import { Activity, GitCommit, MessageSquare, Sparkles, Box, AlertTriangle } from "lucide-react";

export const DashboardMock = () => (
  <div className="relative">
    <div className="absolute -inset-8 -z-10 gradient-brand opacity-20 blur-3xl" />

    <div className="relative rounded-2xl border border-border bg-card/80 p-4 shadow-elevated backdrop-blur-xl animate-float">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md gradient-brand">
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold">InsightOps</span>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">AI</span>
        </div>
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
          <span className="h-2 w-2 rounded-full bg-green-400/70" />
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-border bg-muted/40 p-3">
        <p className="text-xs text-muted-foreground">Ask InsightOps</p>
        <p className="mt-1 text-sm font-medium">Why are deliveries failing today?</p>
      </div>

      <div className="mt-3 rounded-lg border border-primary/20 bg-primary/5 p-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-semibold text-primary">Root cause identified</span>
        </div>
        <p className="mt-1.5 text-xs leading-relaxed text-foreground/80">
          Deployment <span className="font-mono text-primary">api-gateway-v2.4.1</span> introduced a Redis timeout. 3 pods crashlooping in <span className="font-mono">prod-east</span>.
        </p>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          { label: "Pods", val: "47/50", color: "text-yellow-500" },
          { label: "Latency", val: "218ms", color: "text-green-500" },
          { label: "Errors", val: "12", color: "text-red-500" },
        ].map((m) => (
          <div key={m.label} className="rounded-md border border-border bg-background/60 p-2">
            <p className="text-[10px] text-muted-foreground">{m.label}</p>
            <p className={`text-sm font-semibold ${m.color}`}>{m.val}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-md border border-border bg-background/60 p-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-muted-foreground">Request rate</span>
          <span className="text-[10px] font-medium text-green-500">+12%</span>
        </div>
        <svg viewBox="0 0 200 40" className="mt-1 h-8 w-full">
          <defs>
            <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 30 L20 25 L40 28 L60 20 L80 22 L100 15 L120 18 L140 10 L160 14 L180 8 L200 12 L200 40 L0 40 Z" fill="url(#spark)" />
          <path d="M0 30 L20 25 L40 28 L60 20 L80 22 L100 15 L120 18 L140 10 L160 14 L180 8 L200 12" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="mt-3 space-y-2">
        {[
          { icon: GitCommit, text: "deploy: rollback api-gateway", time: "2m", color: "text-primary" },
          { icon: MessageSquare, text: "#incidents · @on-call notified", time: "4m", color: "text-secondary" },
          { icon: AlertTriangle, text: "Redis timeout · prod-east", time: "6m", color: "text-yellow-500" },
        ].map((a, i) => (
          <div key={i} className="flex items-center gap-2 rounded-md border border-border/60 bg-background/40 px-2 py-1.5">
            <a.icon className={`h-3.5 w-3.5 ${a.color}`} />
            <span className="flex-1 truncate text-xs">{a.text}</span>
            <span className="text-[10px] text-muted-foreground">{a.time}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="absolute -left-6 top-16 hidden rounded-xl border border-border bg-card p-3 shadow-elevated animate-float md:block" style={{ animationDelay: "1s" }}>
      <div className="flex items-center gap-2">
        <Box className="h-4 w-4 text-secondary" />
        <div>
          <p className="text-[10px] text-muted-foreground">Kubernetes</p>
          <p className="text-xs font-semibold">3 clusters · healthy</p>
        </div>
      </div>
    </div>
    <div className="absolute -right-4 bottom-24 hidden rounded-xl border border-border bg-card p-3 shadow-elevated animate-float md:block" style={{ animationDelay: "2s" }}>
      <div className="flex items-center gap-2">
        <Activity className="h-4 w-4 text-primary" />
        <div>
          <p className="text-[10px] text-muted-foreground">Uptime</p>
          <p className="text-xs font-semibold">99.98%</p>
        </div>
      </div>
    </div>
  </div>
);