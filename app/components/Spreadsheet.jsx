"use client";

import { useState, useEffect } from "react";

const getColumnLabel = (n) => {
  let label = "";
  while (n >= 0) {
    label = String.fromCharCode((n % 26) + 65) + label;
    n = Math.floor(n / 26) - 1;
  }
  return label;
};

export default function Spreadsheet({ sheet, setSheet }) {
  const { rows = 20, cols = 10, data = {}, colors = {} } = sheet;

  const [selected, setSelected] = useState({ row: 0, col: 0 });
  const [columns, setColumns] = useState(Array(cols).fill({ width: 120 }));
  const [rowHeights, setRowHeights] = useState(Array(rows).fill(30));

  const [copiedValue, setCopiedValue] = useState("");

  // Add/Delete Row/Col
  const addRow = () => {
    setSheet({ ...sheet, rows: sheet.rows + 1 });
    setRowHeights((prev) => [...prev, 30]);
  };

  const deleteRow = () => {
    if (sheet.rows <= 1) return;
    setSheet({ ...sheet, rows: sheet.rows - 1 });
    setRowHeights((prev) => prev.slice(0, -1));
  };

  const addCol = () => {
    setSheet({ ...sheet, cols: sheet.cols + 1 });
    setColumns((prev) => [...prev, { width: 120 }]);
  };

  const deleteCol = () => {
    if (sheet.cols <= 1) return;
    setSheet({ ...sheet, cols: sheet.cols - 1 });
    setColumns((prev) => prev.slice(0, -1));
  };

  // Cell change & color
  const handleCellChange = (r, c, value) => {
    const key = `${r}-${c}`;
    const newData = { ...data, [key]: value };
    setSheet({ ...sheet, data: newData });
  };

  const setCellColor = (r, c, color) => {
    const key = `${r}-${c}`;
    const newColors = { ...colors, [key]: color };
    setSheet({ ...sheet, colors: newColors });
  };

  // Keyboard navigation
  const handleKeyDown = (e, r, c) => {
    if (e.ctrlKey && e.key === "c") {
      // Copy
      const key = `${r}-${c}`;
      setCopiedValue(data[key] || "");
      e.preventDefault();
    } else if (e.ctrlKey && e.key === "v") {
      // Paste
      const key = `${r}-${c}`;
      handleCellChange(r, c, copiedValue);
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      setSelected({ row: r, col: Math.min(c + 1, sheet.cols - 1) });
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      setSelected({ row: r, col: Math.max(c - 1, 0) });
      e.preventDefault();
    } else if (e.key === "ArrowDown") {
      setSelected({ row: Math.min(r + 1, sheet.rows - 1), col: c });
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      setSelected({ row: Math.max(r - 1, 0), col: c });
      e.preventDefault();
    } else if (e.key === "Enter") {
      setSelected({ row: Math.min(r + 1, sheet.rows - 1), col: c });
      e.preventDefault();
    } else if (e.key === "Tab") {
      setSelected({ row: r, col: Math.min(c + 1, sheet.cols - 1) });
      e.preventDefault();
    }
  };

  return (
    <div>
      {/* Action buttons */}
      <div className="flex gap-2 mb-2">
        <button onClick={addRow} className="px-2 py-1 bg-green-500 text-white rounded">Add Row</button>
        <button onClick={deleteRow} className="px-2 py-1 bg-red-500 text-white rounded">Del Row</button>
        <button onClick={addCol} className="px-2 py-1 bg-green-500 text-white rounded">Add Col</button>
        <button onClick={deleteCol} className="px-2 py-1 bg-red-500 text-white rounded">Del Col</button>
      </div>

      {/* Spreadsheet table */}
      <div className="overflow-auto border border-gray-300 rounded-md">
        <table className="border-collapse w-max">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 bg-gray-100 border-b border-r w-12 h-6"></th>
              {columns.map((_, i) => (
                <th key={i} className="sticky top-0 bg-gray-100 border-b border-r w-32 h-6">
                  {getColumnLabel(i)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: sheet.rows }).map((_, r) => (
              <tr key={r} style={{ height: rowHeights[r] }}>
                <th className="sticky left-0 bg-gray-100 border-r border-b text-center">{r + 1}</th>
                {columns.map((_, c) => {
                  const key = `${r}-${c}`;
                  return (
                    <td
                      key={c}
                      style={{ backgroundColor: colors[key] || "white" }}
                      className="border-b border-r p-0 relative"
                    >
                      <input
                        value={data[key] || ""}
                        onChange={(e) => handleCellChange(r, c, e.target.value)}
                        onFocus={() => setSelected({ row: r, col: c })}
                        onKeyDown={(e) => handleKeyDown(e, r, c)}
                        className="w-full h-full px-2 py-[2px] text-sm focus:outline-none"
                        style={{ backgroundColor: colors[key] || "white" }}
                      />
                      {selected.row === r && selected.col === c && (
                        <input
                          type="color"
                          className="absolute top-0 right-0 w-6 h-6 p-0 border-0"
                          onChange={(e) => setCellColor(r, c, e.target.value)}
                        />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
