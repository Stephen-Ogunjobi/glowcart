export default function Loading() {
  return (
    <div
      className="min-h-[60vh] flex items-center justify-center px-4"
      aria-busy
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full border-4 border-[rgba(183,110,121,0.28)] border-t-[var(--color-rose-gold)] animate-spin" />
        <p className="text-sm text-[color:var(--text-primary)]]">Loading...</p>
      </div>
    </div>
  );
}
