import BackPill from "@/components/BackPill";

export default function FormsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <BackPill href="/member" label="Back to Member Portal" />

      <h1 className="mt-6 text-3xl font-bold">Forms</h1>

      <p className="mt-4 opacity-80">
        Baptism, membership registration, sacramental forms, and other church documents
        will be available here.
      </p>

      <div className="mt-8 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Coming Soon</h2>
        <p className="mt-2 text-sm opacity-70">
          Digital and printable forms will be uploaded here for members.
        </p>
      </div>
    </main>
  );
}