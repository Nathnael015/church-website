import BackPill from "@/components/BackPill";

export default function AdminResourcesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <BackPill href="/admin" label="Back to Admin Dashboard" />

      <h1 className="mt-6 text-3xl font-bold">Manage Other Resources</h1>

      <p className="mt-4 opacity-80">
        Add, edit, and organize the external link tiles shown on the Other Resources page.
      </p>

      <div className="mt-8 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Coming Soon</h2>
        <p className="mt-2 text-sm opacity-70">
          A simple editor for resource groups and tile links will be added here.
        </p>
      </div>
    </main>
  );
}