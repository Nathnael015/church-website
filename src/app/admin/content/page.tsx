import BackPill from "@/components/BackPill";

export default function AdminContentPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <BackPill href="/admin" label="Back to Admin Dashboard" />

      <h1 className="mt-6 text-3xl font-bold">Edit Site Content</h1>

      <p className="mt-4 opacity-80">
        This is where admins will edit page sections like Home, About, and other public pages.
      </p>

      <div className="mt-8 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Coming Soon</h2>
        <p className="mt-2 text-sm opacity-70">
          Tools for editing text, headings, and section order will live here.
        </p>
      </div>
    </main>
  );
}