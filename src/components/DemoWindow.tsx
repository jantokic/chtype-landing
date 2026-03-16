"use client";

import { useState } from "react";

const tabs = [
  { id: "before", label: "Before", icon: "✗" },
  { id: "after", label: "With chtype", icon: "✓" },
  { id: "output", label: "Generated SQL", icon: "→" },
];

function BeforeView() {
  return (
    <div className="p-5 font-mono text-[13px] leading-relaxed">
      <div className="animate-msg text-muted-2" style={{ animationDelay: "0.2s" }}>{"// Raw @clickhouse/client — no safety net"}</div>
      <div className="animate-msg mt-3" style={{ animationDelay: "0.4s" }}>
        <span className="text-[#c586c0]">const</span> <span className="text-fg/70">result</span> = <span className="text-[#c586c0]">await</span> <span className="text-fg/70">client</span>.<span className="text-[#dcdcaa]">query</span>({"{"}
      </div>
      <div className="animate-msg pl-2" style={{ animationDelay: "0.6s" }}>
        <span className="text-fg/70">query</span>: <span className="text-[#ce9178]">`</span>
      </div>
      <div className="animate-msg pl-4" style={{ animationDelay: "0.8s" }}>
        <span className="text-[#ce9178]">SELECT <span className="text-red-400/90 line-through decoration-red-400/60">usre_id</span>, count(*)</span>
        <span className="text-muted-2 ml-2">{"// ← typo, fails at runtime"}</span>
      </div>
      <div className="animate-msg pl-4" style={{ animationDelay: "1.0s" }}>
        <span className="text-[#ce9178]">FROM events</span>
      </div>
      <div className="animate-msg pl-4" style={{ animationDelay: "1.2s" }}>
        <span className="text-[#ce9178]">WHERE event_type = &apos;${"{"}<span className="text-red-400/90">untrusted</span>{"}"}&apos;</span>
        <span className="text-muted-2 ml-2">{"// ← SQL injection"}</span>
      </div>
      <div className="animate-msg pl-4" style={{ animationDelay: "1.4s" }}>
        <span className="text-[#ce9178]">GROUP BY usre_id</span>
      </div>
      <div className="animate-msg pl-4" style={{ animationDelay: "1.6s" }}>
        <span className="text-[#ce9178]">ORDER BY count(*) DESC</span>
      </div>
      <div className="animate-msg pl-4" style={{ animationDelay: "1.8s" }}>
        <span className="text-[#ce9178]">LIMIT 10</span>
      </div>
      <div className="animate-msg pl-2" style={{ animationDelay: "2.0s" }}>
        <span className="text-[#ce9178]">`</span>
      </div>
      <div className="animate-msg" style={{ animationDelay: "2.1s" }}>{"}"});</div>
      <div className="animate-msg mt-3" style={{ animationDelay: "2.4s" }}>
        <span className="text-muted-2">{"// result type: "}<span className="text-red-400/80">any</span> — no idea what shape this is</span>
      </div>
      <div className="animate-msg mt-1" style={{ animationDelay: "2.6s" }}>
        <span className="text-muted-2">{"// no autocomplete, no validation, hope for the best"}</span>
      </div>
    </div>
  );
}

function AfterView() {
  return (
    <div className="p-5 font-mono text-[13px] leading-relaxed">
      <div className="animate-msg text-muted-2" style={{ animationDelay: "0.2s" }}>{"// chtype — every mistake caught at compile time"}</div>
      <div className="animate-msg mt-3" style={{ animationDelay: "0.4s" }}>
        <span className="text-[#c586c0]">const</span> <span className="text-fg/70">result</span> = <span className="text-[#c586c0]">await</span> <span className="text-accent">db</span>
      </div>
      <div className="animate-msg pl-2" style={{ animationDelay: "0.6s" }}>
        .<span className="text-[#dcdcaa]">selectFrom</span>(<span className="text-[#ce9178]">&quot;events&quot;</span>)
      </div>
      <div className="animate-msg pl-2" style={{ animationDelay: "0.8s" }}>
        .<span className="text-[#dcdcaa]">select</span>([<span className="text-[#ce9178]">&quot;user_id&quot;</span>, <span className="text-[#dcdcaa]">fn</span>.<span className="text-[#dcdcaa]">count</span>()])
        <span className="text-muted-2 ml-2">{"// ← autocomplete"}</span>
      </div>
      <div className="animate-msg pl-2" style={{ animationDelay: "1.0s" }}>
        .<span className="text-[#dcdcaa]">where</span>(<span className="text-[#ce9178]">&quot;event_type&quot;</span>, <span className="text-[#ce9178]">&quot;=&quot;</span>, <span className="text-[#ce9178]">&quot;purchase&quot;</span>)
        <span className="text-muted-2 ml-2">{"// ← parameterized"}</span>
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
        <span className="text-muted-2">{"// result: "}<span className="text-green-400/80">{"{ user_id: string; count: number }[]"}</span></span>
      </div>
      <div className="animate-msg mt-1" style={{ animationDelay: "2.4s" }}>
        <span className="text-muted-2">{"// "}<span className="text-green-400/80">✓</span> type-safe  <span className="text-green-400/80">✓</span> autocomplete  <span className="text-green-400/80">✓</span> injection-proof</span>
      </div>
    </div>
  );
}

function OutputView() {
  return (
    <div className="p-5 font-mono text-[13px] leading-relaxed">
      <div className="animate-msg text-muted-2" style={{ animationDelay: "0.2s" }}>{"// What chtype compiles to — zero overhead"}</div>
      <div className="animate-msg mt-3" style={{ animationDelay: "0.5s" }}>
        <span className="text-accent">SELECT</span>
      </div>
      <div className="animate-msg pl-2" style={{ animationDelay: "0.7s" }}>
        <span className="text-fg/80">user_id</span>,
      </div>
      <div className="animate-msg pl-2" style={{ animationDelay: "0.9s" }}>
        <span className="text-[#dcdcaa]">count</span><span className="text-fg/80">(*)</span>
      </div>
      <div className="animate-msg" style={{ animationDelay: "1.1s" }}>
        <span className="text-accent">FROM</span> <span className="text-fg/80">events</span>
      </div>
      <div className="animate-msg" style={{ animationDelay: "1.3s" }}>
        <span className="text-accent">WHERE</span> <span className="text-fg/80">event_type</span> = <span className="text-[#ce9178]">{"{"}<span className="text-accent">$0</span>: <span className="text-[#4ec9b0]">String</span>{"}"}</span>
      </div>
      <div className="animate-msg" style={{ animationDelay: "1.5s" }}>
        <span className="text-accent">GROUP BY</span> <span className="text-fg/80">user_id</span>
      </div>
      <div className="animate-msg" style={{ animationDelay: "1.7s" }}>
        <span className="text-accent">ORDER BY</span> <span className="text-[#dcdcaa]">count</span><span className="text-fg/80">(*)</span> <span className="text-accent">DESC</span>
      </div>
      <div className="animate-msg" style={{ animationDelay: "1.9s" }}>
        <span className="text-accent">LIMIT</span> <span className="text-[#b5cea8]">10</span>
      </div>
      <div className="animate-msg mt-4 rounded-lg bg-accent/[0.06] border border-accent/10 px-4 py-3" style={{ animationDelay: "2.3s" }}>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-green-400 text-xs font-bold font-sans">✓</span>
          <span className="text-xs font-sans font-medium text-fg/80">Parameterized query</span>
        </div>
        <div className="text-[11px] text-muted font-sans">Values are passed as typed parameters, never interpolated into the SQL string. Injection is structurally impossible.</div>
      </div>
    </div>
  );
}

export default function DemoWindow() {
  const [activeTab, setActiveTab] = useState("after");

  return (
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
              <span className={`text-[11px] ${tab.id === "before" ? "text-red-400/80" : "text-accent"}`}>{tab.icon}</span>
              <span className="max-sm:hidden">{tab.label}</span>
            </button>
          ))}
        </div>
        <span className="text-[10px] text-muted-2 max-sm:hidden">query.ts</span>
      </div>
      <div className="min-h-[380px]">
        {activeTab === "before" && <BeforeView />}
        {activeTab === "after" && <AfterView />}
        {activeTab === "output" && <OutputView />}
      </div>
    </div>
  );
}
