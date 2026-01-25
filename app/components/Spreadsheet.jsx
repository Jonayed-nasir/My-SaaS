"use client";

import React, { useState, useRef } from "react";

// Column label generator
const getColumnLabel = (n) => {
  let label = "";
  while (n >= 0) {
    label = String.fromCharCode((n % 26) + 65) + label;
    n = Math.floor(n / 26) - 1;
  }
  return label;
};

export default function Spreadsheet({ sheet, setSheet }) {
  const [selected, setSelected] = useState({ row: 0, col: 0 });
  const [columns, setColumns] = useState(Array(sheet?.cols || 10).fill({ width: 120 }));
  const [rowHeights, setRowHeights] = useState(Array(sheet?.rows || 20).fill(30));

  const resizing = useRef(null);

  if (!sheet) return <p className="p-4 text-gray-500">No sheet selected</p>;

  const { rows, data } = sheet;

  // Handle cell input
  const handleCellChange = (row, col, value) => {
    const key = `${row}-${col}`;
    const newData = { ...data, [key]: value };
    setSheet({ ...sheet, data: newData });

    // Auto add row
    if (row === rows - 1) setSheet({ ...sheet, data: newData, rows: rows + 1 });
    // Auto add column
    if (col === columns.length - 1) {
      setColumns([...columns, { width: 120 }]);
      setSheet({ ...sheet, data: newData, cols: columns.length + 1, rows: sheet.rows });
      setRowHeights((prev) => [...prev]);
    }
  };

  // Column resize
  const startColResize = (e, index) => {
    resizing.current = { type: "col", index, startX: e.clientX, startWidth: columns[index].width };
    window.addEventListener("mousemove", onResize);
    window.addEventListener("mouseup", stopResize);
  };

  // Row resize
  const startRowResize = (e, index) => {
    resizing.current = { type: "row", index, startY: e.clientY, startHeight: rowHeights[index] };
    window.addEventListener("mousemove", onResize);
    window.addEventListener("mouseup", stopResize);
  };

  const onResize = (e) => {
    if (!resizing.current) return;

    if (resizing.current.type === "col") {
      const { index, startX, startWidth } = resizing.current;
      const newWidth = Math.max(50, startWidth + e.clientX - startX);
      const newCols = [...columns];
      newCols[index] = { width: newWidth };
      setColumns(newCols);
    }

    if (resizing.current.type === "row") {
      const { index, startY, startHeight } = resizing.current;
      const newHeight = Math.max(20, startHeight + e.clientY - startY);
      const newRows = [...rowHeights];
      newRows[index] = newHeight;
      setRowHeights(newRows);
    }
  };

  const stopResize = () => {
    resizing.current = null;
    window.removeEventListener("mousemove", onResize);
    window.removeEventListener("mouseup", stopResize);
  };

  return (
    <div className="overflow-auto border border-gray-300 rounded-md">
      <table className="border-collapse w-max">
        <thead>
          <tr>
            <th className="sticky left-0 z-10 bg-gray-100 border-b border-r w-12 h-6"></th>
            {columns.map((col, i) => (
              <th
                key={i}
                className="sticky top-0 bg-gray-100 border-b border-r text-sm text-gray-700 font-medium relative"
                style={{ width: col.width, height: 30 }}
              >
                <div className="flex justify-between items-center h-full">
                  {getColumnLabel(i)}
                  <div
                    className="w-1 h-full cursor-col-resize"
                    onMouseDown={(e) => startColResize(e, i)}
                  />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, r) => (
            <tr key={r} style={{ height: rowHeights[r] }}>
              <th
                className="sticky left-0 bg-gray-100 border-r border-b text-sm text-gray-700 text-center relative"
              >
                {r + 1}
                <div
                  className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize"
                  onMouseDown={(e) => startRowResize(e, r)}
                />
              </th>
              {columns.map((col, c) => {
                const key = `${r}-${c}`;
                const isActive = selected.row === r && selected.col === c;
                return (
                  <td
                    key={c}
                    className={`border-r border-b relative ${isActive ? "outline outline-2 outline-blue-500" : ""}`}
                    style={{ height: rowHeights[r] }}
                    onClick={() => setSelected({ row: r, col: c })}
                  >
                    <input
                      value={data[key] || ""}
                      onChange={(e) => handleCellChange(r, c, e.target.value)}
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
