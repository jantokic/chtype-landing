"use client";

import { useEffect, useRef } from "react";

interface Feature {
  tag: string;
  title: string;
  titleAccent?: string;
  description: string;
  visual: React.ReactNode;
  reverse?: boolean;
  id?: string;
}

function CodegenVisual() {
  return (
    <div className="flex flex-col gap-3 font-mono text-[12px]">
      <div className="flex items-center gap-2 rounded-xl bg-accent/[0.06] border border-accent/10 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
        <span className="text-xs font-sans font-medium text-fg/80">Schema Codegen</span>
        <span className="text-[10px] text-muted-2 ml-auto font-sans">npx chtype generate</span>
      </div>
      <div className="rounded-xl bg-black/40 border border-white/[0.06] p-4 leading-relaxed">
        <div className="text-muted-2">{"// Generated from ClickHouse"}</div>
        <div><span className="text-[#c586c0]">export type</span> <span className="text-accent">EventsRow</span> = {"{"}</div>
        <div className="pl-4"><span className="text-fg/70">id</span>: <span className="text-[#4ec9b0]">string</span>;</div>
        <div className="pl-4"><span className="text-fg/70">timestamp</span>: <span className="text-[#4ec9b0]">Date</span>;</div>
        <div className="pl-4"><span className="text-fg/70">user_id</span>: <span className="text-[#4ec9b0]">string</span>;</div>
        <div className="pl-4"><span className="text-fg/70">event_type</span>: <span className="text-[#4ec9b0]">string</span>;</div>
        <div className="pl-4"><span className="text-fg/70">properties</span>: <span className="text-[#4ec9b0]">string</span>;</div>
        <div>{"}"};</div>
        <div className="mt-2"><span className="text-[#c586c0]">export type</span> <span className="text-accent">EventsInsert</span> = {"{"}</div>
        <div className="pl-4"><span className="text-fg/70">id</span>?: <span className="text-[#4ec9b0]">string</span>; <span className="text-muted-2">{"// DEFAULT"}</span></div>
        <div className="pl-4"><span className="text-fg/70">timestamp</span>: <span className="text-[#4ec9b0]">Date</span>;</div>
        <div className="pl-4"><span className="text-muted-2">{"// ..."}</span></div>
        <div>{"}"};</div>
      </div>
    </div>
  );
}

function QueryBuilderVisual() {
  return (
    <div className="flex flex-col gap-3 font-mono text-[12px]">
      <div className="flex items-center gap-2 rounded-xl bg-accent/[0.06] border border-accent/10 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-sans font-medium text-fg/80">Full Autocomplete</span>
        <span className="text-[10px] text-muted-2 ml-auto font-sans">compile-time checked</span>
      </div>
      <div className="rounded-xl bg-black/40 border border-white/[0.06] p-4 leading-relaxed">
        <div><span className="text-[#c586c0]">const</span> <span className="text-fg/70">query</span> = <span className="text-accent">db</span></div>
        <div className="pl-2">.<span className="text-[#dcdcaa]">selectFrom</span>(<span className="text-[#ce9178]">&quot;events&quot;</span>)</div>
        <div className="pl-2">.<span className="text-[#dcdcaa]">select</span>([<span className="text-[#ce9178]">&quot;id&quot;</span>, <span className="text-[#ce9178]">&quot;user_id&quot;</span>, <span className="text-[#ce9178]">&quot;timestamp&quot;</span>])</div>
        <div className="pl-2">.<span className="text-[#dcdcaa]">where</span>(<span className="text-[#ce9178]">&quot;user_id&quot;</span>, <span className="text-[#ce9178]">&quot;=&quot;</span>, userId)</div>
        <div className="pl-2">.<span className="text-[#dcdcaa]">orderBy</span>(<span className="text-[#ce9178]">&quot;timestamp&quot;</span>, <span className="text-[#ce9178]">&quot;DESC&quot;</span>)</div>
        <div className="pl-2">.<span className="text-[#dcdcaa]">limit</span>(<span className="text-[#b5cea8]">100</span>);</div>
        <div className="mt-3 text-muted-2">{"// "}<span className="text-red-400/80">Error:</span> &quot;usre_id&quot; not in Events</div>
        <div className="text-muted-2">{"// "}<span className="text-green-400/80">Autocomplete:</span> id | user_id | ...</div>
      </div>
    </div>
  );
}

function ClickHouseNativeVisual() {
  return (
    <div className="flex flex-col gap-3 font-mono text-[12px]">
      <div className="flex items-center gap-2 rounded-xl bg-accent/[0.06] border border-accent/10 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
        <span className="text-xs font-sans font-medium text-fg/80">ClickHouse-Native</span>
        <span className="text-[10px] text-muted-2 ml-auto font-sans">not a generic ORM</span>
      </div>
      <div className="rounded-xl bg-black/40 border border-white/[0.06] p-4 leading-relaxed">
        <div className="text-muted-2">{"// Deduplicate ReplacingMergeTree"}</div>
        <div><span className="text-accent">db</span>.<span className="text-[#dcdcaa]">selectFrom</span>(<span className="text-[#ce9178]">&quot;users&quot;</span>)</div>
        <div className="pl-2">.<span className="text-[#dcdcaa]">select</span>([<span className="text-[#ce9178]">&quot;id&quot;</span>, <span className="text-[#ce9178]">&quot;name&quot;</span>, <span className="text-[#ce9178]">&quot;email&quot;</span>])</div>
        <div className="pl-2">.<span className="text-[#dcdcaa]">argMax</span>()  <span className="text-muted-2">{"// auto version column"}</span></div>
        <div className="pl-2">.<span className="text-[#dcdcaa]">groupBy</span>([<span className="text-[#ce9178]">&quot;id&quot;</span>])</div>
        <div className="mt-3 text-muted-2">{"// FINAL modifier for debug"}</div>
        <div><span className="text-accent">db</span>.<span className="text-[#dcdcaa]">selectFrom</span>(<span className="text-[#ce9178]">&quot;users&quot;</span>, {"{"} <span className="text-fg/70">final</span>: <span className="text-[#569cd6]">true</span> {"}"})</div>
        <div className="mt-3 text-muted-2">{"// Query-level SETTINGS"}</div>
        <div className="pl-2">.<span className="text-[#dcdcaa]">settings</span>({"{"} <span className="text-fg/70">max_threads</span>: <span className="text-[#b5cea8]">4</span> {"}"})</div>
      </div>
    </div>
  );
}

function ZeroOverheadVisual() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 rounded-xl bg-accent/[0.06] border border-accent/10 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-medium text-fg/80">Zero Runtime Overhead</span>
        <span className="text-[10px] text-muted-2 ml-auto">compiles to plain SQL</span>
      </div>
      <div className="flex flex-col gap-2.5">
        {[
          { label: "Parameterized queries", desc: "SQL injection impossible by design" },
          { label: "Row vs Insert types", desc: "DEFAULT columns optional, MATERIALIZED excluded" },
          { label: "Engine metadata", desc: "ReplacingMergeTree version column tracking" },
          { label: "CTE support", desc: "WITH clauses with column type inference" },
          { label: "Escape hatches", desc: "fn.raw() for anything non-standard" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3 transition-all duration-300 hover:bg-white/[0.06] hover:border-accent/15 cursor-pointer"
          >
            <span className="text-accent text-sm font-bold">+</span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-fg/90">{item.label}</div>
              <div className="text-[11px] text-muted-2">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const features: Feature[] = [
  {
    tag: "Codegen",
    title: "Types from your",
    titleAccent: "actual schema.",
    description:
      "Run one command and get TypeScript types for every table. Row types for reads, Insert types for writes — with DEFAULT columns optional and MATERIALIZED columns excluded automatically.",
    visual: <CodegenVisual />,
  },
  {
    tag: "Query Builder",
    title: "Autocomplete",
    titleAccent: "everything.",
    description:
      "Column names, operators, sort directions — all validated at compile time. Typo a column name? TypeScript catches it before you even save the file. No more runtime surprises.",
    visual: <QueryBuilderVisual />,
    reverse: true,
  },
  {
    tag: "ClickHouse-Native",
    title: "Built for ClickHouse,",
    titleAccent: "not bolted on.",
    description:
      "argMax for ReplacingMergeTree deduplication, FINAL modifier, query-level SETTINGS, engine-aware types. Features that generic query builders like Kysely or Drizzle simply can't offer.",
    visual: <ClickHouseNativeVisual />,
    id: "how",
  },
  {
    tag: "Lightweight",
    title: "Zero overhead.",
    titleAccent: "Full power.",
    description:
      "chtype compiles down to plain parameterized SQL. No ORM magic, no runtime reflection, no query overhead. Just type-safe queries that run exactly as fast as hand-written SQL.",
    visual: <ZeroOverheadVisual />,
    reverse: true,
  },
];

function RevealWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className ?? ""}`}>
      {children}
    </div>
  );
}

export { RevealWrapper };

export default function Features() {
  return (
    <section id="features" className="px-6 py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="mt-12 flex flex-col gap-32">
          {features.map((f) => (
            <RevealWrapper key={f.tag}>
              <div id={f.id} className="grid items-center gap-12 md:gap-16 md:grid-cols-2">
                <div className={`flex flex-col gap-5 ${f.reverse ? "md:order-2" : ""}`}>
                  <span className="badge w-fit">{f.tag}</span>
                  <h3 className="text-[clamp(26px,3.2vw,40px)] font-semibold leading-[1.15] tracking-tight">
                    {f.title}
                    {f.titleAccent && (
                      <>{" "}<span className="accent-serif">{f.titleAccent}</span></>
                    )}
                  </h3>
                  <p className="max-w-[460px] text-base leading-relaxed text-muted">{f.description}</p>
                </div>
                <div className={`glass-card flex min-h-[320px] flex-col justify-center p-6 ${f.reverse ? "md:order-1" : ""}`}>
                  {f.visual}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
