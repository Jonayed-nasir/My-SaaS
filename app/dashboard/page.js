"use client";

import { useState } from "react";
import SheetTabs from "@/components/SheetTabs";
import Spreadsheet from "@/components/Spreadsheet";


export default function SheetPage() {
  const [sheets, setSheets] = useState([
    { id: 1, name: "Sheet 1", rows: 20, cols: 10, data: {} },
  ]);
  const [activeSheetId, setActiveSheetId] = useState(1);

  const activeSheet = sheets.find((s) => s.id === activeSheetId);

  const setSheet = (updated) => {
    setSheets((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Activity Sheets</h1>
      <SheetTabs
        sheets={sheets}
        activeSheetId={activeSheetId}
        setActiveSheetId={setActiveSheetId}
        setSheets={setSheets}
      />
      <Spreadsheet sheet={activeSheet} setSheet={setSheet} />
    </div>
  );
}
