"use client";

import { useState } from "react";
import Spreadsheet from "@/app/components/Spreadsheet";
import SheetTabs from "@/app/components/SheetTabs";

export default function SheetPage() {
  const [sheets, setSheets] = useState([]); // no default sheet
  const [activeSheetId, setActiveSheetId] = useState(null);

  const activeSheet = sheets.find((s) => s.id === activeSheetId);

  const setSheet = (updatedSheet) => {
    setSheets((prev) => prev.map((s) => (s.id === updatedSheet.id ? updatedSheet : s)));
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Activity Sheets</h1>

      <SheetTabs
        sheets={sheets}
        setSheets={setSheets}
        activeSheet={activeSheetId}
        setActiveSheet={setActiveSheetId}
      />

      <Spreadsheet sheet={activeSheet} setSheet={setSheet} />
    </div>
  );
}
