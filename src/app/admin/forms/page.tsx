import BackPill from "@/components/BackPill";

export default function AdminFormsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <BackPill href="/admin" label="Back to Admin Dashboard" />

      <h1 className="mt-6 text-3xl font-bold">Manage Forms</h1>

      <p className="mt-4 opacity-80">
        Upload and publish member-only forms.
      </p>

      <div className="mt-8 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Coming Soon</h2>
        <p className="mt-2 text-sm opacity-70">
          Form upload, categories, and visibility controls will be added here.
        </p>
      </div>
    </main>
  );
}