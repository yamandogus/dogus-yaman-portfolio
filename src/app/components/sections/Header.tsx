"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <Link
              href="mailto:yamandogus251@gmail.com"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              yamandogus251@gmail.com
            </Link>
            <Link
              href="/cv"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              CV
            </Link>
          </nav>
          <nav className="flex items-center space-x-6">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              GitHub
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 