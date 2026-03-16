"use client";

import { useState } from "react";
import { RevealWrapper } from "./Features";

const tabs = [
  { id: "codegen", label: "Codegen", icon: "+" },
  { id: "query", label: "Query", icon: ">" },
  { id: "terminal", label: "Terminal", icon: "$" },
];

function CodegenView() {
  return (
    <div className="p-5 font-mono text-[13px] leading-relaxed">
      <div className="animate-msg text-muted-2" style={{ animationDelay: "0.2s" }}>{"// schema.ts — auto-generated from ClickHouse"}</div>
      <div className="animate-msg mt-2" style={{ animationDelay: "0.4s" }}>
        <span className="text-[#c586c0]">export type</span> <span className="text-accent">EventsRow</span> = {"{"}
      </div>
      <div className="animate-msg pl-4" style={{ animationDelay: "0.6s" }}>
        <span className="text-fg/70">id</span>: <span className="text-[#4ec9b0]">string</span>;
      </div>
      <div className="animate-msg pl-4" style={{ animationDelay: "0.7s" }}>
        <span className="text-fg/70">timestamp</span>: <span className="text-[#4ec9b0]">Date</span>;
      </div>
      <div className="animate-msg pl-4" style={{ animationDelay: "0.8s" }}>
        <span className="text-fg/70">user_id</span>: <span className="text-[#4ec9b0]">string</span>;
      </div>
      <div className="animate-msg pl-4" style={{ animationDelay: "0.9s" }}>
        <span className="text-fg/70">event_type</span>: <span className="text-[#4ec9b0]">string</span>;
      </div>
      <div className="animate-msg pl-4" style={{ animationDelay: "1.0s" }}>
        <span className="text-fg/70">properties</span>: <span className="text-[#4ec9b0]">string</span>;
      </div>
      <div className="animate-msg" style={{ animationDelay: "1.1s" }}>{"}"};</div>
      <div className="animate-msg mt-3" style={{ animationDelay: "1.3s" }}>
        <span className="text-[#c586c0]">export type</span> <span className="text-accent">EventsInsert</span> = {"{"}
      </div>
      <div className="animate-msg pl-4" style={{ animationDelay: "1.5s" }}>
        <span className="text-fg/70">id</span>?: <span className="text-[#4ec9b0]">string</span>; <span className="text-muted-2">{"// has DEFAULT → optional"}</span>
      </div>
      <div className="animate-msg pl-4" style={{ animationDelay: "1.6s" }}>
        <span className="text-fg/70">timestamp</span>: <span className="text-[#4ec9b0]">Date</span>;
      </div>
      <div className="animate-msg pl-4" style={{ animationDelay: "1.7s" }}>
        <span className="text-fg/70">user_id</span>: <span className="text-[#4ec9b0]">string</span>;
      </div>
      <div className="animate-msg pl-4" style={{ animationDelay: "1.8s" }}>
        <span className="text-fg/70">event_type</span>: <span className="text-[#4ec9b0]">string</span>;
      </div>
      <div className="animate-msg pl-4" style={{ animationDelay: "1.9s" }}>
        <span className="text-fg/70">properties</span>: <span className="text-[#4ec9b0]">string</span>;
      </div>
      <div className="animate-msg" style={{ animationDelay: "2.0s" }}>{"}"};</div>
      <div className="animate-msg mt-3 text-muted-2" style={{ animationDelay: "2.2s" }}>{"// MATERIALIZED columns excluded from Insert type"}</div>
    </div>
  );
}

function QueryView() {
  return (
    <div className="p-5 font-mono text-[13px] leading-relaxed">
      <div className="animate-msg text-muted-2" style={{ animationDelay: "0.2s" }}>{"// Full autocomplete on every method"}</div>
      <div className="animate-msg mt-2" style={{ animationDelay: "0.4s" }}>
        <span className="text-[#c586c0]">const</span> <span className="text-fg/70">result</span> = <span className="text-[#c586c0]">await</span> <span className="text-accent">db</span>
      </div>
      <div className="animate-msg pl-2" style={{ animationDelay: "0.6s" }}>
        .<span className="text-[#dcdcaa]">selectFrom</span>(<span className="text-[#ce9178]">&quot;events&quot;</span>)
      </div>
      <div className="animate-msg pl-2" style={{ animationDelay: "0.8s" }}>
        .<span className="text-[#dcdcaa]">select</span>([<span className="text-[#ce9178]">&quot;user_id&quot;</span>, <span className="text-[#dcdcaa]">fn</span>.<span className="text-[#dcdcaa]">count</span>()])
      </div>
      <div className="animate-msg pl-2" style={{ animationDelay: "1.0s" }}>
        .<span className="text-[#dcdcaa]">where</span>(<span className="text-[#ce9178]">&quot;event_type&quot;</span>, <span className="text-[#ce9178]">&quot;=&quot;</span>, <span className="text-[#ce9178]">&quot;purchase&quot;</span>)
      </div>
      <div className="animate-msg pl-2" style={{ animationDelay: "1.2s" }}>
        .<span className="text-[#dcdcaa]">groupBy</span>([<span className="text-[#ce9178]">&quot;user_id&quot;</span>])
      </div>
      <div className="animate-msg pl-2" style={{ animationDelay: "1.4s" }}>
        .<span className="text-[#dcdcaa]">orderBy</span>(<span className="text-[#dcdcaa]">fn</span>.<span className="text-[#dcdcaa]">count</span>(), <span className="text-[#ce9178]">&quot;DESC&quot;</span>)
      </div>
      <div className="animate-msg pl-2" style={{ animationDelay: "1.6s" }}>
        .<span className="text-[#dcdcaa]">limit</span>(<span className="text-[#b5cea8]">10</span>)
      </div>
      <div className="animate-msg pl-2" style={{ animationDelay: "1.8s" }}>
        .<span className="text-[#dcdcaa]">execute</span>();
      </div>
      <div className="animate-msg mt-3" style={{ animationDelay: "2.2s" }}>
        <span className="text-muted-2">{"// result type: { user_id: string; count: number }[]"}</span>
      </div>
      <div className="animate-msg mt-1" style={{ animationDelay: "2.4s" }}>
        <span className="text-muted-2">{"// "}<span className="text-green-400/80">Parameterized:</span> no SQL injection possible</span>
      </div>
    </div>
  );
}

function TerminalView() {
  const lines = [
    { prompt: true, text: "npx chtype generate --url http://localhost:8123" },
    { prompt: false, text: "  Connecting to ClickHouse..." },
    { prompt: false, text: "✓ Connected to localhost:8123" },
    { prompt: false, text: "✓ Introspecting schema..." },
    { prompt: false, text: "✓ Found 6 tables in 'default' database" },
    { prompt: false, text: "✓ Generated types → src/db/schema.ts" },
    { prompt: false, text: "  - events (EventsRow, EventsInsert)" },
    { prompt: false, text: "  - users (UsersRow, UsersInsert)" },
    { prompt: false, text: "  - sessions (SessionsRow, SessionsInsert)" },
    { prompt: false, text: "  - metrics (MetricsRow, MetricsInsert)" },
    { prompt: false, text: "  - logs (LogsRow, LogsInsert)" },
    { prompt: false, text: "  - profiles (ProfilesRow, ProfilesInsert)" },
    { prompt: false, text: "✓ Generated Database type with all tables" },
    { prompt: false, text: "✓ Done in 340ms" },
  ];

  return (
    <div className="p-5 font-mono text-[13px]">
      {lines.map((line, i) => (
        <div key={i} className="animate-msg leading-relaxed" style={{ animationDelay: `${0.3 + i * 0.3}s` }}>
          {line.prompt ? (
            <span>
              <span className="text-accent">$</span>{" "}
              <span className="text-fg/80">{line.text}</span>
            </span>
          ) : (
            <span className={`${line.text.startsWith("✓") ? "text-green-400/80" : "text-muted-2"}`}>
              {line.text}
            </span>
          )}
        </div>
      ))}
      <div className="animate-msg mt-2" style={{ animationDelay: `${0.3 + lines.length * 0.3}s` }}>
        <span className="text-accent">$</span>{" "}
        <span className="inline-block w-2 h-4 bg-fg/60 animate-pulse align-text-bottom" />
      </div>
    </div>
  );
}

export default function CodeDemo() {
  const [activeTab, setActiveTab] = useState("query");

  return (
    <section id="code" className="relative px-6 py-28">
      <div className="mx-auto max-w-[1200px] relative z-10">
        <RevealWrapper>
          <div className="text-center mb-12">
            <span className="badge mx-auto">See it in action</span>
            <h2 className="mx-auto mt-6 text-[clamp(30px,4.5vw,48px)] font-semibold leading-[1.1] tracking-tight">
              From schema to <span className="accent-serif">type-safe query</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-[17px] text-muted">
              One command generates your types. Then your IDE does the rest.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <div className="mx-auto max-w-[920px] glass-card-strong overflow-hidden shadow-2xl shadow-accent/[0.04]">
            <div className="flex items-center border-b border-white/[0.06] px-4 py-2.5">
              <div className="flex gap-1.5 mr-4">
                <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/60 transition-colors hover:bg-[#ff5f57]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/60 transition-colors hover:bg-[#febc2e]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]/60 transition-colors hover:bg-[#28c840]" />
              </div>
              <div className="flex items-center gap-0.5 flex-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-white/[0.08] text-fg/90"
                        : "text-muted-2 hover:text-muted hover:bg-white/[0.03]"
                    }`}
                  >
                    <span className="text-[11px] font-mono text-accent">{tab.icon}</span>
                    <span className="max-sm:hidden">{tab.label}</span>
                  </button>
                ))}
              </div>
              <span className="text-[10px] text-muted-2 max-sm:hidden">chtype</span>
            </div>
            <div className="min-h-[400px]">
              {activeTab === "codegen" && <CodegenView />}
              {activeTab === "query" && <QueryView />}
              {activeTab === "terminal" && <TerminalView />}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
