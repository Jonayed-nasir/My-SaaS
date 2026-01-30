"use client";

import { useState } from "react";
import { 
  FaFacebook, FaWhatsapp, FaInstagram, FaTelegram, 
  FaArrowLeft, FaCheckCircle, FaLink, FaShieldAlt, 
  FaKey, FaCopy, FaTrashAlt, FaHashtag, FaUserCircle 
} from "react-icons/fa";

export default function IntegrationManager({ webhookUrl = "" }) {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [status, setStatus] = useState("Not Connected");
  const [formData, setFormData] = useState({});

  const platformConfigs = {
    facebook: {
      id: "facebook",
      name: "Facebook",
      icon: <FaFacebook />,
      color: "bg-blue-600",
      fields: [
        { name: "page_id", label: "Page ID", placeholder: "Enter Facebook Page ID", icon: <FaHashtag /> },
        { name: "access_token", label: "Page Access Token", placeholder: "EAA...", icon: <FaKey /> },
        { name: "verify_token", label: "Verify Token", placeholder: "Your secret string", icon: <FaShieldAlt /> }
      ]
    },
    whatsapp: {
      id: "whatsapp",
      name: "WhatsApp Business",
      icon: <FaWhatsapp />,
      color: "bg-green-500",
      fields: [
        { name: "phone_number_id", label: "Phone Number ID", placeholder: "105...", icon: <FaHashtag /> },
        { name: "waba_id", label: "WhatsApp Business Account ID", placeholder: "240...", icon: <FaUserCircle /> },
        { name: "access_token", label: "Permanent Access Token", placeholder: "EAAB...", icon: <FaKey /> }
      ]
    },
    instagram: {
      id: "instagram",
      name: "Instagram",
      icon: <FaInstagram />,
      color: "bg-pink-600",
      fields: [
        { name: "insta_id", label: "Instagram Professional ID", placeholder: "178...", icon: <FaHashtag /> },
        { name: "access_token", label: "Access Token", placeholder: "IG...", icon: <FaKey /> }
      ]
    },
    telegram: {
      id: "telegram",
      name: "Telegram Bot",
      icon: <FaTelegram />,
      color: "bg-sky-500",
      fields: [
        { name: "bot_token", label: "Bot API Token", placeholder: "123456:ABC...", icon: <FaKey /> }
      ]
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConnect = async () => {
    console.log(`Connecting to ${selectedPlatform.id} with data:`, formData);
    setStatus("Connected");
  };

  const handleDisconnect = async () => {
    setStatus("Not Connected");
    setFormData({});
  };

  const inputClass = "w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none text-gray-700 shadow-sm text-sm sm:text-base";
  const labelClass = "block text-xs sm:text-sm font-bold text-gray-700 mb-2 ml-1";

  // --- প্ল্যাটফর্ম সিলেকশন গ্রিড (Responsive) ---
  if (!selectedPlatform) {
    return (
      <div className="max-w-6xl mx-auto py-8 sm:py-16 px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">Connect Channels</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-lg font-medium">Configure your automated workflow</p>
        </div>

        {/* Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 justify-center">
          {Object.values(platformConfigs).map((p) => (
            <div 
              key={p.id}
              onClick={() => setSelectedPlatform(p)}
              className="group relative cursor-pointer bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${p.color} text-white flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-105 transition-transform`}>
                <span className="text-2xl sm:text-3xl">{p.icon}</span>
              </div>
              <h3 className="font-extrabold text-gray-800 text-lg sm:text-xl">{p.name}</h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">Setup automation & webhooks</p>
              <div className="mt-4 sm:mt-6 flex items-center text-indigo-600 font-bold text-xs sm:text-sm">
                Get Started <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- ডাইনামিক সেটআপ ফর্ম (Responsive) ---
  return (
    <div className="max-w-2xl mx-auto my-6 sm:my-12 px-4 sm:px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={() => { setSelectedPlatform(null); setStatus("Not Connected"); setFormData({}); }}
        className="flex items-center gap-2 text-gray-400 hover:text-indigo-600 text-sm sm:text-base font-bold mb-6 sm:mb-8 transition-all group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
      </button>

      <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-xl border border-gray-50 overflow-hidden">
        {/* Header Responsive Padding */}
        <div className={`${selectedPlatform.color} p-6 sm:p-10 text-white relative`}>
          <div className="relative z-10 flex items-center gap-4 sm:gap-5">
            <div className="p-3 sm:p-4 bg-white/20 rounded-xl sm:rounded-[1.5rem] backdrop-blur-xl border border-white/30">
              <span className="text-2xl sm:text-3xl">{selectedPlatform.icon}</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-3xl font-black">{selectedPlatform.name}</h2>
              <p className="text-white/80 text-xs sm:text-sm font-medium">Integration Settings</p>
            </div>
          </div>
          <div className="absolute top-[-20%] right-[-10%] w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="p-6 sm:p-10 space-y-6 sm:space-y-8">
          {/* Webhook Section */}
          <div className="p-4 sm:p-6 bg-gray-50 rounded-2xl sm:rounded-[2rem] border border-gray-100 space-y-2 sm:space-y-3">
            <label className={labelClass}>Webhook URL</label>
            <div className="relative">
              <input
                type="text"
                readOnly
                value={webhookUrl || `https://api.site.com/wh/${selectedPlatform.id}`}
                className="w-full pl-3 pr-20 py-3 bg-white border border-gray-200 rounded-xl text-[10px] sm:text-xs font-mono text-indigo-600"
              />
              <button 
                onClick={() => { navigator.clipboard.writeText(webhookUrl); alert("Copied!"); }}
                className="absolute right-1 top-1 bottom-1 px-3 bg-gray-900 text-white text-[10px] sm:text-xs font-bold rounded-lg hover:bg-black transition-all"
              >
                Copy
              </button>
            </div>
          </div>

          {/* Dynamic Input Fields */}
          <div className="space-y-4 sm:space-y-6">
            {selectedPlatform.fields.map((field) => (
              <div key={field.name} className="relative">
                <label className={labelClass}>{field.label}</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 text-sm sm:text-base transition-colors">
                    {field.icon}
                  </div>
                  <input
                    name={field.name}
                    type="text"
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    className={inputClass}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Connection Status */}
          <div className={`p-3 sm:p-4 rounded-xl border flex items-center justify-between transition-all ${status === 'Connected' ? 'bg-green-50 border-green-100 text-green-700' : 'bg-gray-50 border-gray-100 text-gray-400'}`}>
            <span className="text-xs font-bold tracking-wide">● {status}</span>
            {status === 'Connected' && <FaCheckCircle className="text-green-500 text-sm" />}
          </div>

          {/* Action Buttons (Stack on mobile) */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={handleConnect}
              className={`w-full sm:flex-1 flex items-center justify-center gap-2 sm:gap-3 px-6 py-3.5 sm:py-4 ${selectedPlatform.color} text-white text-sm sm:text-base font-black rounded-xl sm:rounded-2xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all`}
            >
              <FaCheckCircle /> Save & Connect
            </button>
            <button
              onClick={handleDisconnect}
              className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-white border-2 border-red-50 text-red-500 font-bold rounded-xl sm:rounded-2xl hover:bg-red-50 transition-all"
            >
              <FaTrashAlt className="mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}