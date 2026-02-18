const fathers = [
  { name: "Father 1", title: "Priest", bio: "Short bio placeholder." },
  { name: "Father 2", title: "Priest", bio: "Short bio placeholder." },
  { name: "Father 3", title: "Deacon", bio: "Short bio placeholder." },
];

export default function FathersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-10">Church Fathers</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fathers.map((p) => (
          <div key={p.name} className="bg-white border rounded-xl p-6">
            <div className="h-28 w-28 bg-gray-100 rounded-full mb-4 border" />
            <div className="text-xl font-semibold">{p.name}</div>
            <div className="text-gray-500">{p.title}</div>
            <p className="text-gray-600 mt-3">{p.bio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
