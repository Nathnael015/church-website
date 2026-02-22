import BackPill from "@/components/BackPill";

export default function ChurchFathersPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <BackPill href="/member" label="Back to Member Portal" />

      <h1 className="mt-6 text-3xl font-bold">Church Fathers</h1>

      <p className="mt-4 opacity-80">
        Teachings, biographies, and curated resources from the Church Fathers
        will be organized here.
      </p>

      <div className="mt-8 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Coming Soon</h2>
        <p className="mt-2 text-sm opacity-70">
          We will add sections for writings, summaries, and study materials.
        </p>
      </div>
    </main>
  );
}