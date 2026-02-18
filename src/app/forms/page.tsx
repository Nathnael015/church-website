import Link from "next/link";

const forms = [
  { title: "Baptism Form", pdf: "#", online: "/forms/baptism" },
  { title: "Church Membership Form", pdf: "#", online: "/forms/membership" },
];

export default function FormsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-10">Church Forms</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {forms.map((f) => (
          <div key={f.title} className="bg-white border rounded-xl p-6">
            <div className="text-xl font-semibold">{f.title}</div>
            <p className="text-gray-600 mt-2">
              Download as PDF or fill it online. Online submissions will be sent to the church office.
            </p>

            <div className="mt-5 flex gap-3">
              <a className="px-4 py-2 rounded-md border font-semibold hover:bg-gray-50" href={f.pdf}>
                Download PDF
              </a>
              <Link className="px-4 py-2 rounded-md bg-black text-white font-semibold hover:bg-gray-800" href={f.online}>
                Fill Online
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
