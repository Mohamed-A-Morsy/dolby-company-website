export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        {/* Globe/World shape */}
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
        
        {/* Trading/Exchange arrows forming a square inside globe */}
        <path d="M 12 20 L 20 12 L 28 20 L 20 28 Z" fill="currentColor" opacity="0.8" />
        
        {/* Decorative dots for trading network */}
        <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="28" cy="12" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="28" cy="28" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="12" cy="28" r="2" fill="currentColor" opacity="0.6" />
      </svg>
      <span className="text-xl font-bold text-primary hidden sm:inline">GlobalTrade</span>
    </div>
  );
}
