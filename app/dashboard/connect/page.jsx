"use client";

import { useState } from "react";
import ConnectForm from "../../components/ConnectForm";

export default function ConnectPage() {
  const [connected, setConnected] = useState(false);
  const [pageName, setPageName] = useState("");

  const handleConnect = () => {
    // এখানে তোমার backend OAuth redirect দিতে হবে
    window.location.href = "/api/facebook/connect";
  };

  const handleDisconnect = () => {
    setConnected(false);
    setPageName("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <ConnectForm
        connected={connected}
        pageName={pageName}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
      />
    </div>
  );
}
