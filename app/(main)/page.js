import Navbar from "@/(main)/components/Navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gray-50">

      {/* Navbar */}
      <Navbar />

     {/* Hero Section */}
<section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">

  {/* Decorative Blobs */}
  <div className="absolute -top-32 -left-32 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-blob"></div>
  <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
  <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-blob animation-delay-4000"></div>
  <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-blob animation-delay-6000"></div>

  {/* Hero Content */}
  <div className="relative z-10 px-6 max-w-4xl text-white">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-snug drop-shadow-lg">
      Automate Your Social Media & Grow Faster
    </h1>
    <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed drop-shadow-sm">
      New Smart Agent নিয়ে এসেছে একটি অসাধারণ ও স্মার্ট প্লাটফর্ম, যা আপনার ব্যক্তিগত ও ব্যবসায়িক জীবনকে করবে আরও স্মার্ট, দ্রুত ও নিরাপদ। 
      <strong>Facebook Page, WhatsApp, Messenger, YouTube</strong> ইত্যাদি সংযোগ করুন এবং New Smart Agent স্বয়ংক্রিয়ভাবে 
      সকল কমেন্ট, মেসেজ ও অনুরোধের উত্তর দেবে যেকোনো ভাষায়, দ্রুত ও নিরাপদভাবে। 
      এখনই শুরু করুন এবং সময় বাঁচান।
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-wrap justify-center gap-6">
      <Link
        href="/signup"
        className="px-8 py-4 rounded-xl bg-white text-blue-600 font-bold shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-2xl"
      >
        শুরু করুন
      </Link>

      <Link
        href="/about"
        className="px-8 py-4 rounded-xl border border-white/50 text-white font-medium hover:bg-white/20 transition duration-300"
      >
        আরও জানুন
      </Link>
    </div>

  </div>

</section>


      {/* Features Section */}
<section className="py-20 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">শক্তিশালী স্বয়ংক্রিয় ফিচারসমূহ</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      আপনার সোশ্যাল মিডিয়া এনগেজমেন্ট স্বয়ংক্রিয় করার জন্য যা যা লাগবে সব কিছু এখানে।
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-90 group-hover:opacity-100 transition"></div>
      <div className="relative p-8 text-white flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-4">Facebook Comment Automation</h3>
        <p className="text-white/90 flex-1">
          আপনার Facebook পোস্ট, পেজ ও অ্যাডের কমেন্টে স্বয়ংক্রিয়ভাবে উত্তর দেবে। আর কখনো engagement মিস হবে না।
        </p>
        <span className="mt-6 inline-block px-5 py-2 bg-white text-blue-600 font-semibold rounded-full shadow-md group-hover:scale-105 transform transition text-center">
          আরও জানুন
        </span>
      </div>
    </div>

    {/* Card 2 */}
    <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-tr from-green-400 via-teal-500 to-blue-500 opacity-90 group-hover:opacity-100 transition"></div>
      <div className="relative p-8 text-white flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-4">Messenger & WhatsApp Inbox</h3>
        <p className="text-white/90 flex-1">
          Facebook Messenger এবং WhatsApp থেকে সব মেসেজ এক জায়গায় ম্যানেজ করুন এবং সঙ্গে সঙ্গে উত্তর দিন।
        </p>
        <span className="mt-6 inline-block px-5 py-2 bg-white text-green-600 font-semibold rounded-full shadow-md group-hover:scale-105 transform transition text-center">
          আরও জানুন
        </span>
      </div>
    </div>

    {/* Card 3 */}
    <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 opacity-90 group-hover:opacity-100 transition"></div>
      <div className="relative p-8 text-white flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-4">YouTube Comment Automation</h3>
        <p className="text-white/90 flex-1">
          YouTube কমেন্টগুলো স্বয়ংক্রিয়ভাবে ম্যানেজ করুন এবং উত্তর দিন, যাতে আপনার চ্যানেলের এনগেজমেন্ট বাড়ে।
        </p>
        <span className="mt-6 inline-block px-5 py-2 bg-white text-pink-600 font-semibold rounded-full shadow-md group-hover:scale-105 transform transition text-center">
          আরও জানুন
        </span>
      </div>
    </div>
  </div>
</section>

{/* Services Section */}
<section className="py-20 px-6 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের সেবাসমূহ</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      সময় বাঁচাতে, এনগেজমেন্ট বাড়াতে এবং আপনার ব্যবসা উন্নত করতে তৈরি সম্পূর্ণ স্বয়ংক্রিয় টুলস।
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-tr to-pink-500 from-indigo-500 via-purple-600  opacity-90 group-hover:opacity-100 transition"></div>
      <div className="relative p-8 text-white flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-4">Comment & Message Automation</h3>
        <p className="text-white/90 flex-1">
          কোনো সোশ্যাল প্ল্যাটফর্মে লিড বা এনগেজমেন্ট মিস হবে না। সব কমেন্ট ও মেসেজ স্বয়ংক্রিয়ভাবে হ্যান্ডেল করুন।
        </p>
        <span className="mt-6 inline-block px-5 py-2 bg-white text-indigo-600 font-semibold rounded-full shadow-md group-hover:scale-105 transform transition text-center">
          আরও জানুন
        </span>
      </div>
    </div>

    {/* Card 2 */}
    <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-400 via-cyan-500 to-blue-500 opacity-90 group-hover:opacity-100 transition"></div>
      <div className="relative p-8 text-white flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-4">Multi-platform Integration</h3>
        <p className="text-white/90 flex-1">
          Facebook, Messenger, WhatsApp, YouTube এবং আরও অনেক প্ল্যাটফর্মকে এক ড্যাশবোর্ডে সংযুক্ত করুন।
        </p>
        <span className="mt-6 inline-block px-5 py-2 bg-white text-teal-600 font-semibold rounded-full shadow-md group-hover:scale-105 transform transition text-center">
          আরও জানুন
        </span>
      </div>
    </div>

    {/* Card 3 */}
    <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 via-rose-500 to-red-500 opacity-90 group-hover:opacity-100 transition"></div>
      <div className="relative p-8 text-white flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-4">Analytics & Insights</h3>
        <p className="text-white/90 flex-1">
          এনগেজমেন্ট, লিড এবং কনভার্শন ট্র্যাক করুন শক্তিশালী রিপোর্টিং টুলসের মাধ্যমে।
        </p>
        <span className="mt-6 inline-block px-5 py-2 bg-white text-orange-600 font-semibold rounded-full shadow-md group-hover:scale-105 transform transition text-center">
          আরও জানুন
        </span>
      </div>
    </div>
  </div>
</section>



     {/* About Section */}
<section className="py-20 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের সম্পর্কে</h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
      New Smart Agent একটি সম্পূর্ণ স্মার্ট প্ল্যাটফর্ম, যা আপনাকে Facebook, WhatsApp, Messenger এবং অন্যান্য সোশ্যাল প্ল্যাটফর্মের মাধ্যমে আপনার ব্যবসায়িক ও ব্যক্তিগত জীবন আরও স্মার্ট ও সহজ করতে সাহায্য করে।  
      এটি স্বয়ংক্রিয়ভাবে কমেন্ট এবং মেসেজের উত্তর দেয়, লিড ট্র্যাক করে এবং নিরাপদভাবে কাজের রিপোর্ট প্রদান করে।  
      এর মাধ্যমে আপনার সময় এবং প্রচেষ্টা বাঁচে, এবং আপনি বেশি প্রোডাক্টিভ হতে পারেন।
    </p>
    
    {/* CTA Button */}
    <a
      href="/about"
      className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition"
    >
      আরও জানুন
    </a>
  </div>
</section>


   {/* Contact Section */}
<section className="py-20 px-6 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">যোগাযোগ করুন</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      কোনো প্রশ্ন আছে বা ডেমো চাইছেন? আমাদের সাথে যোগাযোগ করুন।
    </p>
  </div>

  <div className="max-w-2xl mx-auto flex flex-col gap-4">
    <input 
      type="text" 
      placeholder="আপনার নাম" 
      className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm hover:shadow-md"
    />
    <input 
      type="email" 
      placeholder="আপনার ইমেইল" 
      className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm hover:shadow-md"
    />
    <textarea 
      placeholder="আপনার বার্তা" 
      className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm hover:shadow-md"
      rows={6}
    ></textarea>
    <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition font-semibold transform hover:scale-105">
      বার্তা পাঠান
    </button>
  </div>
</section>

    </div>
  );
}
