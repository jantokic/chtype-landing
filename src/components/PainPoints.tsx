"use client";

import { RevealWrapper } from "./Features";

export default function PainPoints() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[720px]">
        <RevealWrapper>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-semibold leading-[1.2] tracking-tight text-center mb-12">
            Using raw <span className="accent-serif">@clickhouse/client?</span>
          </h2>
        </RevealWrapper>

        <div className="flex flex-col gap-6">
          <RevealWrapper>
            <div className="glass-card p-6">
              <p className="text-[15px] leading-relaxed text-muted">
                <span className="text-fg/90 font-medium">No type safety</span> — column names are plain strings. Typo in a column name? You won&apos;t know until runtime. In production. At 3am.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div className="glass-card p-6">
              <p className="text-[15px] leading-relaxed text-muted">
                <span className="text-fg/90 font-medium">No autocomplete</span> — your IDE can&apos;t help you. Every query is a black box of string concatenation. Want to know what columns exist? Go check the ClickHouse console.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div className="glass-card p-6">
              <p className="text-[15px] leading-relaxed text-muted">
                <span className="text-fg/90 font-medium">No schema codegen</span> — every time you add a column, you manually update TypeScript interfaces. They drift apart. Nobody notices until the wrong data flows through.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div className="glass-card p-6">
              <p className="text-[15px] leading-relaxed text-muted">
                <span className="text-fg/90 font-medium">No ClickHouse features</span> — Kysely doesn&apos;t know about <code className="text-xs bg-white/[0.06] px-1.5 py-0.5 rounded">FINAL</code>, <code className="text-xs bg-white/[0.06] px-1.5 py-0.5 rounded">argMax</code>, <code className="text-xs bg-white/[0.06] px-1.5 py-0.5 rounded">SETTINGS</code>, or <code className="text-xs bg-white/[0.06] px-1.5 py-0.5 rounded">ReplacingMergeTree</code>. Prisma and Drizzle don&apos;t even support ClickHouse.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div className="glass-card p-6 border-accent/10 bg-accent/[0.03]">
              <p className="text-[15px] leading-relaxed text-fg/80">
                <span className="font-medium">chtype</span> generates types directly from your ClickHouse schema, then gives you a query builder that catches every mistake at compile&nbsp;time.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
