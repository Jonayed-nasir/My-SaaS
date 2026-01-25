"use client";
import React from "react";

export default function SheetTabs({ sheets, activeSheetId, setActiveSheetId, setSheets }) {
  const addSheet = () => {
    const newSheet = {
      id: Date.now(),
      name: `Sheet ${sheets.length + 1}`,
      rows: 20,
      cols: 10,
      data: {},
    };
    setSheets([...sheets, newSheet]);
    setActiveSheetId(newSheet.id);
  };

  const removeSheet = (id) => {
    if (!confirm("Delete this sheet?")) return;
    const updated = sheets.filter((s) => s.id !== id);
    setSheets(updated);
    if (activeSheetId === id && updated.length) setActiveSheetId(updated[0]?.id || null);
  };

  return (
    <div className="flex items-center border-b border-gray-300 bg-gray-100">
      {sheets.map((sheet) => (
        <div
          key={sheet.id}
          className={`flex items-center px-4 py-2 cursor-pointer ${
            activeSheetId === sheet.id
              ? "border-b-2 border-blue-600 font-semibold bg-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setActiveSheetId(sheet.id)}
        >
          {sheet.name}
          <span
            className="ml-2 text-red-500 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              removeSheet(sheet.id);
            }}
          >
            ✕
          </span>
        </div>
      ))}
      <button
        onClick={addSheet}
        className="ml-2 px-2 py-1 bg-gray-200 text-blue-600 font-bold rounded hover:bg-gray-300"
      >
        +
      </button>
    </div>
  );
}
