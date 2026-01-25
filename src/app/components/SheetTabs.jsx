"use client";
import { useState } from "react";

export default function SheetTabs({ sheets, setSheets, activeSheet, setActiveSheet }) {
  const addSheet = () => {
    const newSheet = {
      id: Date.now(),
      name: `Sheet ${sheets.length + 1}`,
      rows: 20,
      cols: 10,
      data: {},
    };
    setSheets([...sheets, newSheet]);
    setActiveSheet(newSheet.id);
  };

  const removeSheet = (id) => {
    if (!confirm("Delete sheet?")) return;
    const updated = sheets.filter((s) => s.id !== id);
    setSheets(updated);
    if (activeSheet === id && updated.length) setActiveSheet(updated[0].id);
    if (!updated.length) setActiveSheet(null); // No sheet left
  };

  return (
    <div className="flex gap-2 border-t">
      {sheets.map((sheet) => (
        <button
          key={sheet.id}
          onClick={() => setActiveSheet(sheet.id)}
          className={`px-4 py-2 border-r text-sm ${
            activeSheet === sheet.id
              ? "bg-white border-t-2 border-[#1a73e8] font-medium"
              : "bg-[#f8f9fa] text-[#5f6368]"
          }`}
        >
          {sheet.name}
          <span
            onClick={(e) => {
              e.stopPropagation();
              removeSheet(sheet.id);
            }}
            className="ml-2 text-red-500 cursor-pointer"
          >
            ✕
          </span>
        </button>
      ))}
      <button
        onClick={addSheet}
        className="px-3 py-2 bg-[#f8f9fa] text-[#1a73e8] text-lg font-bold"
      >
        +
      </button>
    </div>
  );
}
