"use client";

import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";

export default function ConnectForm({ connected, pageName, onConnect, onDisconnect }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-lg text-center">
      <FaFacebookF className="text-5xl text-blue-600 mx-auto mb-4" />
      <h1 className="text-2xl font-bold mb-2">Connect Your Facebook Page</h1>
      <p className="text-gray-600 mb-6">
        Connect your Facebook Page to automate comments & Messenger replies.
      </p>

      {connected ? (
        <div className="flex flex-col items-center gap-4">
          <span className="text-green-600 font-semibold">
            Connected: {pageName}
          </span>
          <button
            onClick={onDisconnect}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={onConnect}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          <FaFacebookF /> Connect Facebook
        </button>
      )}
    </div>
  );
}
