import BackPill from "@/components/BackPill";

export default function AdminUsersPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <BackPill href="/admin" label="Back to Admin Dashboard" />

      <h1 className="mt-6 text-3xl font-bold">Users & Roles</h1>

      <p className="mt-4 opacity-80">
        This page will be used to manage admin access and member permissions.
      </p>

      <div className="mt-8 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Coming Soon</h2>
        <p className="mt-2 text-sm opacity-70">
          Admin role assignment and member management will be added here later.
        </p>
      </div>
    </main>
  );
}