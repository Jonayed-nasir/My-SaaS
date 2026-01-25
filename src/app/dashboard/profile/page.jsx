// app/dashboard/profile/page.js
"use client";

export default function ProfilePage() {
  return (
    <div className="bg-white shadow rounded-md p-6">
      <h2 className="text-xl font-semibold mb-4">Profile</h2>

      <div className="mb-4">
        <label>Email</label>
        <input className="w-full p-2 border rounded" defaultValue="user@example.com" />
      </div>

      <div className="mb-4">
        <label>Name</label>
        <input className="w-full p-2 border rounded" defaultValue="Jonayed" />
      </div>

      <button className="bg-black text-white px-4 py-2 rounded-md">
        Update Profile
      </button>
    </div>
  );
}
