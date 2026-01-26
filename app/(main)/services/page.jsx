// app/services/page.js
export default function ServicesPage() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <ServiceCard title="Comment Automation" desc="Auto-reply to Facebook comments and convert into leads." />
        <ServiceCard title="Messenger Bot" desc="Send messages and automated sequences on Messenger." />
        <ServiceCard title="Analytics Dashboard" desc="Track engagement metrics & conversion performance." />
      </div>
    </section>
  );
}

function ServiceCard({ title, desc }) {
  return (
    <div className="bg-white shadow p-6 rounded-md">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
