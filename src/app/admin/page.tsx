export default function AdminPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* Header */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="mt-3 opacity-80">
          Manage website content, member resources, and uploads.
        </p>
      </section>

      {/* Quick Actions */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <a
          href="/admin/content"
          className="rounded-2xl border p-6 transition hover:shadow-md hover:-translate-y-1"
        >
          <h2 className="text-xl font-semibold">Edit Site Content</h2>
          <p className="mt-2 text-sm opacity-70">
            Update Home, About, and other page sections.
          </p>
        </a>

        <a
          href="/admin/gallery"
          className="rounded-2xl border p-6 transition hover:shadow-md hover:-translate-y-1"
        >
          <h2 className="text-xl font-semibold">Manage Gallery</h2>
          <p className="mt-2 text-sm opacity-70">
            Upload, remove, and organize photos.
          </p>
        </a>

        <a
          href="/admin/forms"
          className="rounded-2xl border p-6 transition hover:shadow-md hover:-translate-y-1"
        >
          <h2 className="text-xl font-semibold">Manage Forms</h2>
          <p className="mt-2 text-sm opacity-70">
            Upload and publish member-only forms.
          </p>
        </a>

        <a
          href="/admin/resources"
          className="rounded-2xl border p-6 transition hover:shadow-md hover:-translate-y-1"
        >
          <h2 className="text-xl font-semibold">Other Resources</h2>
          <p className="mt-2 text-sm opacity-70">
            Add or update curated external links.
          </p>
        </a>

        <a
          href="/admin/users"
          className="rounded-2xl border p-6 transition hover:shadow-md hover:-translate-y-1"
        >
          <h2 className="text-xl font-semibold">Users & Roles</h2>
          <p className="mt-2 text-sm opacity-70">
            View members and manage admin access later.
          </p>
        </a>
      </section>
    </main>
  );
}