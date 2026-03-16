import Link from "next/link";

const NPM_URL = "https://www.npmjs.com/package/@jantokic/chtype";
const GITHUB_URL = "https://github.com/jantokic/chtype";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/70 backdrop-blur-xl border-b border-white/[0.04]">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-6">
        <Link
          href="#"
          className="text-lg font-semibold tracking-tight text-fg transition-opacity hover:opacity-80"
        >
          <span className="text-accent">ch</span>type
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full bg-white/[0.04] border border-white/[0.06] px-1.5 py-1.5 backdrop-blur-xl">
          <Link
            href="#features"
            className="px-4 py-1.5 text-sm text-muted rounded-full transition-colors hover:text-fg hover:bg-white/[0.06]"
          >
            Features
          </Link>
          <Link
            href="#code"
            className="px-4 py-1.5 text-sm text-muted rounded-full transition-colors hover:text-fg hover:bg-white/[0.06]"
          >
            Code
          </Link>
          <Link
            href={NPM_URL}
            className="px-4 py-1.5 text-sm text-muted rounded-full transition-colors hover:text-fg hover:bg-white/[0.06]"
          >
            npm
          </Link>
        </nav>

        <Link
          href={GITHUB_URL}
          className="btn-pill btn-primary text-[13px] py-2 px-5 font-semibold"
        >
          GitHub
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
