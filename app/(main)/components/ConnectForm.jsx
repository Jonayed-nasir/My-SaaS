"use client";

import { useState } from "react";

export default function ConnectForm({ webhookUrl }) {
  const [verifyToken, setVerifyToken] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [status, setStatus] = useState("Not Connected");

  const handleCopyWebhook = () => {
    navigator.clipboard.writeText(webhookUrl);
    alert("Webhook URL copied!");
  };

  const handleConnect = async () => {
    // Send hashed tokens to Django backend
    const res = await fetch("/api/facebook/connect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        verifyToken: btoa(verifyToken),  // Simple Base64 hash for demo
        accessToken: btoa(accessToken),
      }),
    });

    if (res.ok) setStatus("Connected");
    else setStatus("Error connecting");
  };

  const handleDisconnect = async () => {
    const res = await fetch("/api/facebook/disconnect", { method: "POST" });
    if (res.ok) setStatus("Not Connected");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded space-y-4">
      <h2 className="text-xl font-bold">Connect Your Facebook Page</h2>
      <p className="text-gray-600">
        Go to{" "}
        <a
          href="https://developers.facebook.com"
          target="_blank"
          className="text-blue-500 underline"
        >
          developers.facebook.com
        </a>{" "}
        to configure your app.
      </p>

      {/* Webhook URL */}
      <div>
        <label className="block text-gray-700">Webhook URL</label>
        <div className="flex gap-2 mt-1">
          <input
            type="text"
            readOnly
            value={webhookUrl}
            className="flex-1 border px-2 py-1 rounded bg-gray-100"
          />
          <button
            onClick={handleCopyWebhook}
            className="px-2 py-1 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
        </div>
      </div>

      {/* Tokens */}
      <div>
        <label className="block text-gray-700">Verify Token</label>
        <input
          type="text"
          value={verifyToken}
          onChange={(e) => setVerifyToken(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <div>
        <label className="block text-gray-700">Access Token</label>
        <input
          type="text"
          value={accessToken}
          onChange={(e) => setAccessToken(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      {/* Connect / Disconnect */}
      <div className="flex gap-2">
        <button
          onClick={handleConnect}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Connect Facebook
        </button>
        <button
          onClick={handleDisconnect}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Disconnect
        </button>
      </div>

      {/* Status */}
      <p className="text-gray-700 mt-2">Status: {status}</p>
    </div>
  );
}
