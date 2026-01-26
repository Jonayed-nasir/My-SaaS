// app/contact/page.js
export default function ContactPage() {
  return (
    <section className="py-20 px-6 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

      <form className="bg-white shadow p-6 rounded-md space-y-4">
        <input className="w-full p-2 border rounded" placeholder="Your Name" />
        <input className="w-full p-2 border rounded" placeholder="Your Email" />
        <textarea className="w-full p-2 border rounded h-32" placeholder="Message" />
        <button className="bg-blue-600 text-white w-full py-2 rounded-md">
          Send Message
        </button>
      </form>
    </section>
  );
}
