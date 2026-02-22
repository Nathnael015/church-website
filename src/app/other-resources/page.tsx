const resources = [
  {
    title: "Ethiopian Orthodox (Official)",
    items: [
      { label: "ethiopianorthodox.org", href: "https://www.ethiopianorthodox.org/" },
    ],
  },
];

export default function OtherResourcesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Other Resources</h1>
      <p className="mt-2 opacity-80">
        Curated external links. Clicking opens the official website.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {resources.map((group) => (
          <section key={group.title} className="rounded-2xl border p-5">
            <h2 className="text-lg font-semibold">{group.title}</h2>
            <div className="mt-4 grid gap-3">
              {group.items.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border px-4 py-3 hover:bg-muted"
                >
                  {it.label}
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}