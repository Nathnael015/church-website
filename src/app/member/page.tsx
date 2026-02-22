import BackPill from "@/components/BackPill";

export default function VolunteerPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <BackPill href="/member" label="Back to Member Portal" />

      <h1 className="mt-6 text-3xl font-bold">Volunteer</h1>

      <p className="mt-4 opacity-80">
        Sign up to serve in church ministries, events, and community outreach.
      </p>

      <div className="mt-8 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Service Opportunities</h2>
        <p className="mt-2 text-sm opacity-70">
          Volunteer opportunities and ministry sign-up information will appear here.
        </p>
      </div>
    </main>
  );
}