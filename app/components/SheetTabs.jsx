"use client";

export default function SheetTabs({
  sheets = [],
  activeSheetId,
  setActiveSheetId,
  setSheets,
}) {
  if (!sheets || sheets.length === 0) {
    return (
      <div className="px-4 py-2 text-gray-500">No sheets available</div>
    );
  }

  return (
    <div className="flex items-center border-b border-gray-300 bg-gray-100">
      {sheets.map((sheet) => (
        <div
          key={sheet.id}
          className={`flex items-center px-4 py-2 cursor-pointer ${
            sheet.id === activeSheetId ? "bg-gray-200 font-bold" : ""
          }`}
          onClick={() => setActiveSheetId(sheet.id)}
        >
          {sheet.name}
        </div>
      ))}
    </div>
  );
}
