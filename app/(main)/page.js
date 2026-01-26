import Navbar from "@/(main)/components/Navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gray-50">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600">
        {/* Decorative Circles */}
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Automate Your Business Social Media
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Instantly reply to comments, messages, and inquiries across <strong>Facebook, Messenger, WhatsApp, YouTube</strong> and grow your engagement effortlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold shadow-lg hover:scale-105 transform transition duration-300"
            >
              Get Started Free
            </Link>

            <Link
              href="/about"
              className="px-6 py-3 rounded-lg bg-white/20 text-white font-medium hover:bg-white/30 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Automation Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to automate your social media engagement across multiple platforms.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Facebook Comment Automation</h3>
            <p className="text-gray-600">Automatically reply to comments on posts, pages, and ads to never miss engagement.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Messenger & WhatsApp Inbox</h3>
            <p className="text-gray-600">Centralize messages from Facebook Messenger and WhatsApp and respond instantly.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">YouTube Comment Automation</h3>
            <p className="text-gray-600">Manage and reply to YouTube comments automatically to boost channel engagement.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive automation tools designed to save time, increase engagement, and grow your business.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Comment & Message Automation</h3>
            <p className="text-gray-600">Never miss a lead or engagement on any social platform.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Multi-platform Integration</h3>
            <p className="text-gray-600">Connect Facebook, Messenger, WhatsApp, YouTube, and more in one dashboard.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Analytics & Insights</h3>
            <p className="text-gray-600">Track engagement, leads, and conversions with powerful reporting tools.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We help businesses automate their social media presence, save time, and grow faster with intelligent tools for Facebook, Messenger, WhatsApp, YouTube, and more.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want a demo? Get in touch with us.
          </p>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input type="email" placeholder="Your Email" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <textarea placeholder="Your Message" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">Send Message</button>
        </div>
      </section>
    </div>
  );
}
