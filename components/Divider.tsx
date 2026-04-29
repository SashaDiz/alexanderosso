export default function Divider() {
  return (
    <div className="max-w-container mx-auto px-5 w-full" aria-hidden="true">
      <div className="flex items-center gap-2 py-1">
        <div
          className="flex-1 border-t border-dashed border-foreground/30"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 70%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 70%)",
          }}
        />
        <span className="w-1 h-1 rounded-full bg-foreground/45 shrink-0" />
        <div
          className="flex-1 border-t border-dashed border-foreground/30"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, black 30%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, black 30%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
}
