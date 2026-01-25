// app/dashboard/page.js
"use client";

import DashboardCard from "../components/DashboardCard";
import Spreadsheet from "../components/Spreadsheet";
import SheetTabs from "../components/SheetTabs";

export default function DashboardPage() {
  return (
    <div className="p-4 space-y-6">
      {/* Top Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DashboardCard title="Messages Sent" value="1,234" />
        <DashboardCard title="Comments Replied" value="567" />
        <DashboardCard title="Active Workflows" value="12" />
      </div>

      {/* Google Sheet style Activity Sheet */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Activity Sheet</h2>

        {/* Sheet Tabs */}
        <SheetTabs />

        {/* Spreadsheet Grid */}
        <Spreadsheet />
      </div>
    </div>
  );
}
