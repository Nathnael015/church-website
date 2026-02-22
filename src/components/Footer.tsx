"use client";

import Link from "next/link";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-sm">
        <div className="opacity-80">© {new Date().getFullYear()} Church</div>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>

          {/* Admin Portal */}
          <SignedOut>
            <SignInButton mode="modal" forceRedirectUrl="/admin">
              <button className="font-semibold hover:underline">
                Admin Portal
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link href="/admin" className="font-semibold hover:underline">
              Admin Portal
            </Link>
          </SignedIn>
        </div>
      </div>
    </footer>
  );
}