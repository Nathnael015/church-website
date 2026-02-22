import BackPill from "@/components/BackPill";

export default function AnnouncementsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <BackPill href="/member" label="Back to Member Portal" />

      <h1 className="mt-6 text-3xl font-bold">Announcements</h1>

      <p className="mt-4 opacity-80">
        Important updates, reminders, and church communications will be posted here.
      </p>

      <div className="mt-8 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Latest Updates</h2>
        <p className="mt-2 text-sm opacity-70">
          Announcements from clergy and administration will be displayed here.
        </p>
      </div>
    </main>
  );
}