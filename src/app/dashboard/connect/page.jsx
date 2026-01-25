// app/dashboard/connect/page.js
"use client";

export default function ConnectPage() {
  const handleConnect = () => {
    // এখানে Facebook OAuth redirect হবে
    window.location.href = "/api/oauth/facebook";
  };

  return (
    <div className="bg-white p-6 rounded-md shadow">
      <h2 className="text-xl font-semibold mb-4">Connect Facebook</h2>
      <p className="mb-4 text-gray-600">
        Connect your Facebook Page to automate comments & Messenger replies.
      </p>
      <button
        onClick={handleConnect}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Connect Facebook
      </button>
    </div>
  );
}
