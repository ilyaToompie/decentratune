export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Top layer - Cyan to Blue gradient */}
        <path
          d="M4 8 L28 8 L26 12 L2 12 Z"
          fill="url(#gradient1)"
        />
        
        {/* Middle layer - Blue to Purple gradient */}
        <path
          d="M6 16 L30 16 L28 20 L4 20 Z"
          fill="url(#gradient2)"
        />
        
        {/* Bottom layer - Purple to Pink gradient */}
        <path
          d="M2 24 L26 24 L24 28 L0 28 Z"
          fill="url(#gradient3)"
        />
        
        <defs>
          {/* Cyan to Blue gradient */}
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          
          {/* Blue to Purple gradient */}
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          
          {/* Purple to Pink gradient */}
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}