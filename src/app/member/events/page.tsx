import BackPill from "@/components/BackPill";

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <BackPill href="/member" label="Back to Member Portal" />

      <h1 className="mt-6 text-3xl font-bold">Events</h1>

      <p className="mt-4 opacity-80">
        Upcoming services, feast days, and community gatherings will be displayed here.
      </p>

      <div className="mt-8 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Upcoming Events</h2>
        <p className="mt-2 text-sm opacity-70">
          Event listings and schedules will appear in this section.
        </p>
      </div>
    </main>
  );
}