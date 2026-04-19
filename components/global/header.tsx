'use client';

import Link from 'next/link';
import { ThemeSwitcherButton } from './theme-switcher-button';

export function Header() {
  const navLinks = ['About', 'Works', 'News', 'Gaming'];

  return (
    <header className="border-border bg-background border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo and Title */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="text-foreground text-2xl font-bold">Tuan Dat</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden gap-8 sm:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-foreground hover:text-muted-foreground text-sm font-medium transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Theme Switcher */}
        <ThemeSwitcherButton />
      </div>
    </header>
  );
}
