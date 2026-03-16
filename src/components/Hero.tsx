import Link from "next/link";
import DemoWindow from "./DemoWindow";
import LiquidGlass from "./LiquidGlass";

const NPM_URL = "https://www.npmjs.com/package/@jantokic/chtype";
const GITHUB_URL = "https://github.com/jantokic/chtype";

export default function Hero() {
  return (
    <section className="glow-hero overflow-hidden text-center">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-36 pb-8">
        <div className="mb-6">
          <span className="badge">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
            Open Source
          </span>
        </div>

        <h1 className="hero-heading text-[clamp(36px,6.5vw,72px)] font-light leading-[1] tracking-[-1.5px] mb-6 text-[#DFDFF2]">
          Type-safe ClickHouse
          <br />
          <span className="accent-serif text-[1.2em] tracking-[-1.5px]">for TypeScript</span>
        </h1>

        <p className="mx-auto mb-8 max-w-[560px] text-[clamp(16px,1.8vw,19px)] font-normal leading-relaxed text-muted">
          Generate types from your schema. Build queries with full autocomplete
          and compile-time validation. Catch errors before they hit production.
        </p>

        <div className="install-cmd mx-auto w-fit mb-8">
          <span className="text-accent">$</span>
          <span className="text-fg/80">npm install @jantokic/chtype</span>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-sm:flex-col max-sm:mx-auto max-sm:max-w-[320px]">
          <Link
            href={NPM_URL}
            className="btn-pill btn-primary"
          >
            Get Started
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link
            href={GITHUB_URL}
            className="btn-pill btn-secondary"
          >
            View on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
        </div>
      </div>

      <LiquidGlass />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 -mt-20 pb-8">
        <DemoWindow />
      </div>
    </section>
  );
}
