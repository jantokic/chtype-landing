import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "chtype — Type-safe ClickHouse queries for TypeScript",
  description:
    "Generate TypeScript types from your ClickHouse schema. Build queries with full autocomplete and compile-time validation. Zero runtime overhead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {/* Cloudflare Web Analytics: cookieless, no consent banner needed */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "ae8c226a73584d24aa16be8cf0fe47d8"}'
        />
      </body>
    </html>
  );
}
