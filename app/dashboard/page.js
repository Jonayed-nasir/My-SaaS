"use client";

import { useState } from "react";
import SheetTabs from "../components/SheetTabs";
import Spreadsheet from "../components/Spreadsheet";

export default function SheetPage() {
  const [sheets, setSheets] = useState([
    { id: 1, name: "Sheet 1", rows: 20, cols: 10, data: {}, colors: {} },
  ]);
  const [activeSheetId, setActiveSheetId] = useState(1);

  const activeSheet = sheets.find((s) => s.id === activeSheetId);

  const setSheet = (updated) => {
    setSheets((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
  };

  const addSheet = () => {
    const newId = sheets.length ? Math.max(...sheets.map((s) => s.id)) + 1 : 1;
    const newSheet = {
      id: newId,
      name: `Sheet ${newId}`,
      rows: 20,
      cols: 10,
      data: {},
      colors: {},
    };
    const newSheets = [...sheets, newSheet];
    setSheets(newSheets);
    setActiveSheetId(newId); // make new sheet active
  };

  const deleteSheet = (id) => {
    const filtered = sheets.filter((s) => s.id !== id);
    setSheets(filtered);
    if (activeSheetId === id) {
      setActiveSheetId(filtered.length ? filtered[0].id : null);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Activity Sheets</h1>

      <SheetTabs
        sheets={sheets}
        activeSheetId={activeSheetId}
        setActiveSheetId={setActiveSheetId}
        addSheet={addSheet}
        deleteSheet={deleteSheet}
      />

      {activeSheet ? (
        <Spreadsheet sheet={activeSheet} setSheet={setSheet} />
      ) : (
        <p className="p-4 text-gray-500">No sheet selected</p>
      )}
    </div>
  );
}
