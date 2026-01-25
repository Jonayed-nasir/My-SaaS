"use client";
import { useState } from "react";

// column label generator
const getColumnLabel = (n) => {
  let label = "";
  while (n >= 0) {
    label = String.fromCharCode((n % 26) + 65) + label;
    n = Math.floor(n / 26) - 1;
  }
  return label;
};

export default function Spreadsheet({ sheet, setSheet }) {
  const [selected, setSelected] = useState(null);

  if (!sheet) return <p className="text-gray-500">No sheet selected</p>;

  const { rows, cols, data } = sheet;

  const handleCellChange = (row, col, value) => {
    const key = `${row}-${col}`;
    const newData = { ...data, [key]: value };
    setSheet({ ...sheet, data: newData });
  };

  const addRow = () => setSheet({ ...sheet, rows: rows + 1 });
  const removeRow = () => setSheet({ ...sheet, rows: Math.max(1, rows - 1) });
  const addCol = () => setSheet({ ...sheet, cols: cols + 1 });
  const removeCol = () => setSheet({ ...sheet, cols: Math.max(1, cols - 1) });

  return (
    <div className="border border-[#dadce0] rounded-md overflow-auto">
      {/* Toolbar */}
      <div className="flex gap-2 px-2 py-1 border-b bg-[#f8f9fa] text-sm">
        <button onClick={addRow} className="px-2 py-1 border rounded hover:bg-[#eceff1]">+ Row</button>
        <button onClick={removeRow} className="px-2 py-1 border rounded hover:bg-[#eceff1]">- Row</button>
        <button onClick={addCol} className="px-2 py-1 border rounded hover:bg-[#eceff1]">+ Col</button>
        <button onClick={removeCol} className="px-2 py-1 border rounded hover:bg-[#eceff1]">- Col</button>
      </div>

      {/* Grid */}
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="w-12 sticky left-0 z-10 bg-[#f8f9fa] border-b border-r border-[#dadce0]"></th>
            {Array.from({ length: cols }).map((_, col) => (
              <th key={col} className="text-center min-w-[100px] border-b border-r border-[#dadce0] bg-[#f8f9fa] text-[#5f6368] text-sm font-medium">
                {getColumnLabel(col)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, row) => (
            <tr key={row}>
              <th className="sticky left-0 z-10 bg-[#f8f9fa] border-r border-b border-[#dadce0] text-center text-sm text-[#5f6368]">
                {row + 1}
              </th>
              {Array.from({ length: cols }).map((_, col) => {
                const key = `${row}-${col}`;
                const isActive = selected === key;
                return (
                  <td key={col} className={`border-r border-b border-[#e0e0e0] relative ${isActive ? "outline outline-2 outline-[#1a73e8]" : ""}`} onClick={() => setSelected(key)}>
                    <input
                      value={data[key] || ""}
                      onChange={(e) => handleCellChange(row, col, e.target.value)}
                      className="w-full h-full px-2 py-[6px] text-sm focus:outline-none"
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
