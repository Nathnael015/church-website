import { auth } from "@clerk/nextjs/server";

export default async function DebugRolePage() {
  const { userId, sessionClaims } = await auth();

  const role =
    (sessionClaims as any)?.metadata?.role ??
    (sessionClaims as any)?.publicMetadata?.role ??
    null;

  const hasPk = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
  const hasSk = Boolean(process.env.CLERK_SECRET_KEY);

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold">Debug Role</h1>

      <div className="mt-6 space-y-3 rounded-2xl border p-6">
        <p>
          <span className="font-semibold">Signed in:</span>{" "}
          {userId ? "Yes" : "No"}
        </p>

        <p>
          <span className="font-semibold">Role:</span> {role ?? "none"}
        </p>

        <p>
          <span className="font-semibold">ENV:</span>{" "}
          PK {hasPk ? "✅" : "❌"} / SK {hasSk ? "✅" : "❌"}
        </p>
      </div>
    </main>
  );
}