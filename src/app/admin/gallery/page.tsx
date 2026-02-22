import BackPill from "@/components/BackPill";

export default function AdminGalleryPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <BackPill href="/admin" label="Back to Admin Dashboard" />

      <h1 className="mt-6 text-3xl font-bold">Manage Gallery</h1>

      <p className="mt-4 opacity-80">
        Upload, remove, and organize photos for the public gallery.
      </p>

      <div className="mt-8 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Coming Soon</h2>
        <p className="mt-2 text-sm opacity-70">
          Image upload, reordering, captions, and album grouping will be added here.
        </p>
      </div>
    </main>
  );
}