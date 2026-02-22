"use client";

import { useAuth, useUser } from "@clerk/nextjs";

export default function DebugClientPage() {
  const { isLoaded, isSignedIn, userId } = useAuth();
  const { user } = useUser();

  if (!isLoaded) return <div className="p-6">Loading auth…</div>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Debug Client</h1>
      <p className="mt-2"><b>isSignedIn:</b> {String(isSignedIn)}</p>
      <p><b>userId:</b> {userId ?? "none"}</p>
      <p><b>email:</b> {user?.primaryEmailAddress?.emailAddress ?? "none"}</p>
    </main>
  );
}