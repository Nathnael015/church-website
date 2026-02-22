export default function ForbiddenPage() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-semibold">Forbidden</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        You’re signed in, but your account doesn’t have permission to view this page.
      </p>
    </div>
  );
}