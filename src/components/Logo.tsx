export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <img
      src={`${import.meta.env.BASE_URL}anantaops-logo.png`}
      alt="AnantaOps"
      className="h-8 w-8 object-contain dark:invert"
    />
    <span className="text-lg font-semibold tracking-tight">
      Ananta<span className="text-brand-gradient">Ops</span>
    </span>
  </div>
);