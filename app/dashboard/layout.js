// app/dashboard/layout.jsx
"use client";

import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";

export default function dashboardLayout({children}) {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <TopNav />
                <main className="p-4 flex-1 ml-12 md:ml-64 overflow-y-auto">{children}</main>
            </div>
        </div>
    )
}