export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative flex h-8 w-8 items-center justify-center rounded-lg gradient-brand shadow-glow">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M4 20 L12 4 L20 20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 14 L16 14" strokeLinecap="round" />
      </svg>
    </div>
    <span className="text-lg font-semibold tracking-tight">
      Ananta<span className="text-brand-gradient">Ops</span>
    </span>
  </div>
);