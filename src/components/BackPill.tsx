import Link from "next/link";

type BackPillProps = {
  href: string;
  label: string;
};

export default function BackPill({ href, label }: BackPillProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold tracking-wide
                 bg-gray-200 shadow-md transition hover:shadow-lg hover:-translate-y-0.5
                 dark:bg-gray-800"
    >
      ← {label}
    </Link>
  );
}