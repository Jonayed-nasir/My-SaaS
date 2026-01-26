'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = ['Home', 'Doc', 'Services', 'Contact', 'About'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b shadow-sm">
      <div className="max-w-7xl  mx-auto px-6 py-1 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            width={60}
            height={60}
            src="/newsmartagent.jpeg"
            alt="Logo"
            className="h-20 w-20 object-contain"
          />
          <span className="text-2xl font-bold tracking-tight text-blue-600 hidden sm:inline">
            new <span className="text-green-600">smart</span>{' '}
            <span className="text-blue-600">agent</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="relative group px-1 py-1 text-gray-700 hover:text-blue-600 transition"
            >
              {item}
              <span className="absolute left-0 bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          <Link
            href="/signup"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed left-0 inset-0-backdrop-blur-2xl z-50 transition-opacity duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`w-64 h-full bg-white/80 bg-backdrop-blur-3xl shadow-xl p-6 flex  flex-col gap-5 transform transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-semibold">new smart agent</span>
            <button onClick={() => setOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {navItems.map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="py-2 text-gray-800 font-medium hover:text-blue-600 transition"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}

          <Link
            href="/signup"
            className="mt-auto text-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm"
            onClick={() => setOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
