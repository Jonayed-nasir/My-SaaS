"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null); // টাইপ মুছে ফেলা হয়েছে

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg(null);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/users/create_user/", formData);
      setStatusMsg({ text: "Registration Successful!", isError: false });
      
      if (response.data.access) {
        localStorage.setItem("access_token", response.data.access);
      }
    } catch (error) {
      let errorDetail = "Something went wrong.";
      if (error.response && error.response.data) {
        const data = error.response.data;
        const firstErrorKey = Object.keys(data)[0];
        const firstErrorMessage = data[firstErrorKey];
        errorDetail = Array.isArray(firstErrorMessage) ? firstErrorMessage[0] : firstErrorMessage;
      }
      setStatusMsg({ text: errorDetail, isError: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6 text-black">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
  
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>

          {statusMsg && (
            <div className={`p-2 text-center rounded ${statusMsg.isError ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
              {statusMsg.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}