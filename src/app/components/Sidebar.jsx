// app/components/Sidebar.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  HomeIcon,
  LinkIcon,
  CreditCardIcon,
  TableCellsIcon,
  Cog6ToothIcon,
  UserIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

const links = [
  { name: "Overview", href: "/dashboard", icon: HomeIcon },
  { name: "Connect", href: "/dashboard/connect", icon: LinkIcon },
  { name: "Payment", href: "/dashboard/payment", icon: CreditCardIcon },
  { name: "Sheet", href: "/dashboard/sheet", icon: TableCellsIcon },
  { name: "Settings", href: "/dashboard/settings", icon: Cog6ToothIcon },
  { name: "Profile", href: "/dashboard/profile", icon: UserIcon },
  { name: "Notifications", href: "/dashboard/notifications", icon: BellIcon },
  { name: "Logout", href: "/dashboard/logout", icon: ArrowRightOnRectangleIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 h-full flex flex-col bg-white shadow-md
                    w-12 md:w-64 p-3">
      {/* Desktop Logo */}
      <h1 className="hidden md:block text-xl font-bold mb-8 text-blue-600">My SaaS</h1>

      <nav className="flex-1 flex flex-col items-center md:items-stretch">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link key={link.name} href={link.href}>
              <div
                className={`flex items-center md:justify-start justify-center w-full
                            p-3 mb-2 rounded-md cursor-pointer hover:bg-blue-100
                            ${isActive ? "bg-blue-200 font-bold" : ""}`}
              >
                <Icon className="h-5 w-5 text-blue-600" />
                <span className="ml-10 hidden md:inline pl-8 ">{link.name}</span>
              </div>
            </Link>
          );
        })}

      
      </nav>
    </div>
  );
}
