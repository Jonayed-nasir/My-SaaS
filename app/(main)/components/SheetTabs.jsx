"use client";

import { FaPlus, FaTrash } from "react-icons/fa";

export default function SheetTabs({
  sheets,
  activeSheetId,
  setActiveSheetId,
  addSheet,
  deleteSheet,
}) {
  return (
    <div className="flex items-center border-b border-gray-300 bg-gray-100 gap-1">
      {sheets.length === 0 && (
        <span className="px-4 py-2 text-gray-500">No sheets available</span>
      )}

      {sheets.map((sheet) => (
        <div
          key={sheet.id}
          className={`flex items-center px-4 py-2 cursor-pointer gap-2 ${
            sheet.id === activeSheetId ? "bg-gray-200 font-bold" : ""
          }`}
        
        >
          <span onClick={() => setActiveSheetId(sheet.id)}>{sheet.name}</span>
          <button
            onClick={() => deleteSheet(sheet.id)}
            className="p-1 bg-red-500 text-white rounded"
          >
            <FaTrash />
          </button>
        </div>
      ))}

      <button onClick={addSheet} className="p-1 bg-green-500 text-white rounded ml-2">
        <FaPlus />
      </button>
    </div>
  );
}
