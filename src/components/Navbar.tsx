"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/live", label: "Live" },
  { href: "/other-resources", label: "Other Resources" },
];

export default function Navbar() {
  const pathname = usePathname();

  const tabBase =
    "text-lg font-bold tracking-wide px-4 py-2 rounded-xl transition whitespace-nowrap";
  const tabActive = "bg-gray-200 shadow-md dark:bg-gray-800";
  const tabInactive = "hover:bg-gray-100 dark:hover:bg-gray-700";

  const isMemberActive = pathname === "/member";

  // Dark mode state
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark((v) => !v);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white dark:bg-black transition">
      {/* FULL WIDTH header row */}
      <div className="w-full px-6 py-4">
        {/* relative so right controls can be pinned to screen edge */}
        <div className="relative flex items-center justify-center">
          {/* CENTER NAV (constrained width, centered) */}
          <nav className="flex items-center justify-center gap-10 whitespace-nowrap">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${tabBase} ${active ? tabActive : tabInactive}`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Member Portal */}
            <SignedOut>
              <SignInButton mode="modal" forceRedirectUrl="/member">
                <button
                  className={`${tabBase} ${
                    isMemberActive ? tabActive : tabInactive
                  }`}
                >
                  Member Portal
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Link
                href="/member"
                className={`${tabBase} ${
                  isMemberActive ? tabActive : tabInactive
                }`}
              >
                Member Portal
              </Link>
            </SignedIn>
          </nav>

          {/* FAR RIGHT controls pinned to the browser edge */}
          <div className="absolute right-0 flex items-center gap-4 whitespace-nowrap">
            {/* Language button (placeholder) */}
            <button className={`${tabBase} ${tabInactive}`}>🌐 Language</button>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="relative h-7 w-14 rounded-full bg-gray-300 dark:bg-gray-700 transition"
            >
              <span
                className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow-md transition-transform ${
                  dark ? "translate-x-7" : ""
                }`}
              />
            </button>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}