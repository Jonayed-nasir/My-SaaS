"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold">
            New <span className="text-pink-500"> Smart </span>    
            
            Agent
          </h1>
          <p className="text-gray-300 mt-2 max-w-xs">
            স্বয়ংক্রিয় সোশ্যাল মিডিয়া টুলস দিয়ে আপনার ব্যবসা দ্রুত এবং স্মার্টভাবে পরিচালনা করুন।
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">দ্রুত লিঙ্ক</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-300 hover:text-pink-400 transition">হোম</Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-300 hover:text-pink-400 transition">সেবাসমূহ</Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-pink-400 transition">আমাদের সম্পর্কে</Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-pink-400 transition">যোগাযোগ</Link>
            </li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">আমাদের অনুসরণ করুন</h3>
          <div className="flex gap-4 mb-4">
            <a href="#" className="p-3 rounded-full bg-indigo-700 hover:bg-pink-500 transition text-white shadow-md hover:shadow-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 rounded-full bg-indigo-700 hover:bg-blue-400 transition text-white shadow-md hover:shadow-lg">
              <FaTwitter />
            </a>
            <a href="#" className="p-3 rounded-full bg-indigo-700 hover:bg-blue-600 transition text-white shadow-md hover:shadow-lg">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-3 rounded-full bg-indigo-700 hover:bg-pink-400 transition text-white shadow-md hover:shadow-lg">
              <FaInstagram />
            </a>
          </div>
          <p className="text-gray-300">Support: <a href="mailto:support@mysaas.com" className="hover:text-pink-400">support@mysaas.com</a></p>
        </div>

        {/* Payment Options */}
        <div>
          <h3 className="text-lg font-semibold mb-4">পেমেন্ট অপশন</h3>
          <div className="flex gap-4 text-4xl">
            <FaCcVisa className="hover:text-blue-500 transition cursor-pointer" />
            <FaCcMastercard className="hover:text-red-500 transition cursor-pointer" />
            <FaCcPaypal className="hover:text-blue-400 transition cursor-pointer" />
          </div>

          {/* Newsletter */}
          <div className="mt-6">
            <h4 className="text-md font-semibold mb-2">নিউজলেটার সাবস্ক্রাইব</h4>
            <div className="flex gap-2 ">
              <input 
                type="email" 
                placeholder="আপনার ইমেইল লিখুন" 
                className="flex-1 p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="px-3 bg-pink-500 rounded-r-lg hover:bg-pink-600 transition font-semibold cursor-pointer">Subscribe</button>
            </div>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} My SaaS. সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
}

export default Footer;
