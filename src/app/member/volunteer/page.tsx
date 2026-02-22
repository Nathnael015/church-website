import Link from "next/link";

export default function VolunteerPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <Link
        href="/member"
        className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition hover:shadow-md"
      >
        ← Back to Member Portal
      </Link>

      <h1 className="mt-6 text-3xl font-bold">Volunteer</h1>
      <p className="mt-4 opacity-80">
        Volunteer sign-up and ministry opportunities will appear here.
      </p>
    </main>
  );
}