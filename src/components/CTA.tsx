"use client";

import Link from "next/link";
import { RevealWrapper } from "./Features";

const NPM_URL = "https://www.npmjs.com/package/@jantokic/chtype";
const GITHUB_URL = "https://github.com/jantokic/chtype";

export default function CTA() {
  return (
    <RevealWrapper>
      <div className="relative px-6 py-32 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-accent/[0.04] blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[400px] h-[200px] rounded-full bg-[#D4B106]/[0.06] blur-[80px]" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />

        <div className="relative z-10">
          <h2 className="mb-4 text-[clamp(28px,4vw,44px)] font-semibold tracking-tight">
            Stop writing ClickHouse queries <span className="accent-serif">in the dark.</span>
          </h2>
          <p className="mb-6 text-muted text-lg max-w-[460px] mx-auto">
            Type safety, autocomplete, and codegen. All in one lightweight package.
          </p>

          <div className="install-cmd mx-auto w-fit mb-8">
            <span className="text-accent">$</span>
            <span className="text-fg/80">npm install @jantokic/chtype</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href={NPM_URL} className="btn-pill btn-accent text-base px-8 py-3">
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href={GITHUB_URL} className="btn-pill btn-secondary text-base px-8 py-3">
              View Source
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </RevealWrapper>
  );
}
