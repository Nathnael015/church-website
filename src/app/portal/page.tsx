export const dynamic = "force-dynamic";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function PortalPage() {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Portal</h1>
      <p className="mt-2 opacity-80">You are signed in.</p>

      <div className="mt-6 flex gap-3">
        <a className="underline" href="/debug/role">Debug role</a>
        <a className="underline" href="/dashboard/forms">Admin Forms</a>
        <a className="underline" href="/forms">Public Forms</a>
      </div>
    </main>
  );
}