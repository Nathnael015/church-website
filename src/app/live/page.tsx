export default function LivePage() {
  const streamsUrl =
    "https://www.youtube.com/@mekanebirhanst.gebrieleotc2468/streams";

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Live Services</h1>
        <p className="text-gray-600 text-lg">
          Join our live services and watch past recordings on YouTube.
        </p>
      </header>

      {/* Main YouTube Button */}
      <div className="text-center mb-16">
        <a
          href={streamsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition"
        >
          Watch Live on YouTube →
        </a>
      </div>

      {/* Future Live Info Section */}
      <section className="bg-gray-50 border rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4">
          Upcoming & Recent Services
        </h2>

        <p className="text-gray-600">
          Upcoming live stream information and recent service details will be
          displayed here in the future.
        </p>
      </section>
    </main>
  );
}
