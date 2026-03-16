import Link from "next/link";

const GITHUB_URL = "https://github.com/jantokic/chtype";
const NPM_URL = "https://www.npmjs.com/package/@jantokic/chtype";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] px-6 py-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <Link href="#" className="text-base font-semibold text-muted tracking-tight">
            <span className="text-accent">ch</span>type
          </Link>
          <ul className="flex list-none gap-6">
            <li>
              <Link
                href={GITHUB_URL}
                className="text-sm text-muted-2 transition-colors hover:text-fg"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href={NPM_URL}
                className="text-sm text-muted-2 transition-colors hover:text-fg"
              >
                npm
              </Link>
            </li>
            <li>
              <Link
                href={`${GITHUB_URL}/issues`}
                className="text-sm text-muted-2 transition-colors hover:text-fg"
              >
                Issues
              </Link>
            </li>
            <li>
              <Link
                href="#features"
                className="text-sm text-muted-2 transition-colors hover:text-fg"
              >
                Features
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-8 border-t border-white/[0.04] pt-6 text-sm text-muted-2">
          &copy; 2026 chtype. Open source under MIT.
        </div>
      </div>
    </footer>
  );
}
