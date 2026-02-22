export const dynamic = "force-dynamic";

import { auth } from "@clerk/nextjs/server";

export default function DebugRolePage() {
  const { userId, sessionClaims } = auth();
  const role = (sessionClaims?.publicMetadata as any)?.role;

  const hasPk = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
  const sk = process.env.CLERK_SECRET_KEY || "";
  const hasSk = Boolean(sk);
  const skPrefix = sk.slice(0, 7);
  const skLen = sk.length;

  return (
    <main style={{ padding: 24 }}>
      <h1>Debug Role</h1>

      <p><b>userId:</b> {userId ?? "not signed in"}</p>
      <p><b>role (publicMetadata.role):</b> {role ?? "none"}</p>

      <hr style={{ margin: "16px 0" }} />

      <p><b>env publishable key loaded:</b> {String(hasPk)}</p>
      <p><b>env secret key loaded:</b> {String(hasSk)}</p>
      <p><b>secret key prefix:</b> {skPrefix || "(empty)"}</p>
      <p><b>secret key length:</b> {skLen}</p>

      <pre style={{ marginTop: 16, background: "#111", color: "#0f0", padding: 16, borderRadius: 8, overflow: "auto" }}>
        {JSON.stringify(sessionClaims, null, 2)}
      </pre>
    </main>
  );
}