// app/dashboard/notifications/page.js
"use client";

const notifications = [
  { id: 1, message: "Facebook connected successfully" },
  { id: 2, message: "New comment automation triggered" },
  { id: 3, message: "Payment processed" },
];

export default function NotificationsPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>

      <div className="bg-white shadow rounded-md divide-y">
        {notifications.map((n) => (
          <div key={n.id} className="p-3 hover:bg-gray-50">
            {n.message}
          </div>
        ))}
      </div>
    </div>
  );
}
