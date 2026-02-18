const volunteerTasks = [
  { title: "Event Setup Crew", description: "Help set up chairs and equipment before services." },
  { title: "Kitchen Support", description: "Assist with preparation and cleanup during events." },
  { title: "Transportation Help", description: "Help deliver items or support pick-ups when needed." },
];

export default function VolunteerPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Volunteer</h1>
      <p className="text-gray-700 mb-10">
        The church will post errands and volunteer needs here. You can apply to help with a task.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {volunteerTasks.map((t) => (
          <div key={t.title} className="bg-white border rounded-xl p-6">
            <h2 className="text-xl font-semibold">{t.title}</h2>
            <p className="text-gray-600 mt-3">{t.description}</p>

            <button className="mt-5 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              Apply →
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
