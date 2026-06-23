export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Aurora blobs */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[oklch(0.5_0.25_295)] opacity-30 blur-[140px] animate-aurora" />
      <div
        className="absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full bg-[oklch(0.55_0.22_250)] opacity-30 blur-[160px] animate-aurora"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-[oklch(0.6_0.22_350)] opacity-25 blur-[140px] animate-aurora"
        style={{ animationDelay: "-8s" }}
      />
      {/* Grid */}
      <div className="absolute inset-0 grid-bg radial-fade opacity-60" />
      {/* Noise/vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, transparent 0%, oklch(0.08 0.02 280) 80%)",
        }}
      />
    </div>
  );
}
