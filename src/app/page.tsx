import Link from "next/link";

const YOUTUBE_STREAMS_URL =
  "https://www.youtube.com/@mekanebirhanst.gebrieleotc2468/streams";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      {/* HERO */}
      <section className="border-b border-zinc-200 bg-gradient-to-b from-white to-zinc-50 dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
              Mekane Birhan St. Gebriel Ethiopian Orthodox Monastery
            </h1>
            <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-300">
              Seattle, WA
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              A welcoming community rooted in faith, tradition, and service.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/live"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Watch Live
              </a>

              <Link
                href="/about"
                className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACCESS */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center text-3xl font-semibold text-zinc-900 dark:text-white">
          Quick Access
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card
            title="Live Stream"
            desc="Go to the church YouTube Live section."
            href={YOUTUBE_STREAMS_URL}
            external
            linkText="Open Live →"
          />

          <Card
            title="Church Forms"
            desc="Membership, Baptism, and more."
            href="/forms"
            linkText="View Forms →"
          />

          <Card
            title="Contact Us"
            desc="Office hours and phone number."
            href="/contact"
            linkText="Get in Touch →"
          />
        </div>
      </section>

      {/* SIMPLE SECTION PLACEHOLDER */}
      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Moments at Our Church
          </h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            We can add photos here later (gallery preview).
          </p>
        </div>
      </section>
    </main>
  );
}

function Card({
  title,
  desc,
  href,
  linkText,
  external,
}: {
  title: string;
  desc: string;
  href: string;
  linkText: string;
  external?: boolean;
}) {
  const classes =
    "group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition " +
    "dark:border-zinc-800 dark:bg-zinc-900/40";

  const content = (
    <>
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{desc}</p>
      <div className="mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
        {linkText}
      </div>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
