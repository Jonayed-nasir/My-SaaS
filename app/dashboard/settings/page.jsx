// app/dashboard/settings/page.js
"use client";

export default function SettingsPage() {
  return (
    <div className="bg-white shadow rounded-md p-6">
      <h2 className="text-xl font-semibold mb-4">App Settings</h2>

      <label className="flex items-center gap-2 mb-4">
        <input type="checkbox" />
        Enable Email Notifications
      </label>

      <label className="flex items-center gap-2 mb-4">
        <input type="checkbox" />
        Auto-reply to comments
      </label>

      <button className="bg-black text-white px-4 py-2 rounded-md">
        Save Changes
      </button>
    </div>
  );
}
