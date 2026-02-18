const YOUTUBE_STREAMS_URL =
  "https://www.youtube.com/@mekanebirhanst.gebrieleotc2468/streams";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            <div className="font-semibold text-zinc-900 dark:text-zinc-100">
              Mekane Birhan St. Gebriel EOTC Monastery
            </div>
            <div>Seattle, WA</div>
          </div>

          <a
            href={YOUTUBE_STREAMS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Open YouTube Live →
          </a>
        </div>

        <div className="mt-8 text-xs text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} Mekane Birhan St. Gebriel EOTC Monastery.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
