"use client";

import { useState } from "react";
import { FaUserAlt, FaUserTie } from "react-icons/fa";

export default function AuthPage() {
  const [selectedType, setSelectedType] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    division: "",
    district: "",
    upazila: "",
    password: "",
    confirmPassword: "",
    createdBy: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const divisions = ["Dhaka", "Chattogram", "Khulna"];
  const districts = ["Dhaka", "Gazipur", "Narsingdi"];
  const upazilas = ["Savar", "Dhamrai", "Narsingdi Sadar"];
  const createdByOptions = ["Business", "Student", "Other"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "confirmPassword") {
      if (formData.password !== e.target.value) {
        setPasswordError("Passwords do not match!");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${selectedType}`);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match!");
      return;
    }
    alert(`Sign Up as ${selectedType} successful!`);
    console.log({ ...formData, accountType: selectedType });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex flex-col items-center justify-center py-12 px-4">

      {/* Cards */}
      {!selectedType && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
          {/* Agent Card */}
          <div
            onClick={() => setSelectedType("Agent")}
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-90 group-hover:opacity-100 transition"></div>
            <div className="relative p-10 flex flex-col items-center text-center text-white">
              <FaUserTie className="text-6xl mb-6" />
              <h2 className="text-2xl font-bold mb-2">Agent</h2>
              <p className="text-md max-w-xs">
                Sign up as an agent to manage multiple users and earn commission effortlessly.
              </p>
              <span className="mt-6 inline-block px-6 py-2 bg-white text-blue-600 font-semibold rounded-full shadow-md group-hover:scale-105 transform transition">
                Select
              </span>
            </div>
          </div>

          {/* User Card */}
          <div
            onClick={() => setSelectedType("User")}
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-green-400 via-teal-500 to-blue-500 opacity-90 group-hover:opacity-100 transition"></div>
            <div className="relative p-10 flex flex-col items-center text-center text-white">
              <FaUserAlt className="text-6xl mb-6" />
              <h2 className="text-2xl font-bold mb-2">User</h2>
              <p className="text-md max-w-xs">
                Sign up as a regular user to access our powerful automation tools.
              </p>
              <span className="mt-6 inline-block px-6 py-2 bg-white text-green-600 font-semibold rounded-full shadow-md group-hover:scale-105 transform transition">
                Select
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Login Form */}
      {selectedType && !showSignUp && (
        <div className="mt- bg-white p-8 rounded-xl shadow-2xl w-full max-w-md animate-fadeIn">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Log In as {selectedType}
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleLoginSubmit}>
            <input type="text" placeholder="Email or Phone Number" className="p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            <input type="password" placeholder="Password" className="p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            <button type="submit" className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
              Log In
            </button>
            <div className="flex justify-between items-center mt-2 text-sm">
              <span className="text-blue-600 cursor-pointer hover:underline">Forgotten password?</span>
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => setShowSignUp(true)}
              >
                Create new account
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSelectedType("")}
              className="mt-4 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
            >
              Back
            </button>
          </form>
        </div>
      )}

      {/* SignUp Form */}
      {selectedType && showSignUp && (
        <div className="mt-12 bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl animate-fadeIn">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Sign Up as {selectedType}
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSignUpSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            <input type="text" name="number" placeholder="Phone Number" value={formData.number} onChange={handleChange} className="p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            <select name="division" value={formData.division} onChange={handleChange} className="p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <option value="">Division</option>
              {divisions.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <select name="district" value={formData.district} onChange={handleChange} className="p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <option value="">District</option>
              {districts.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <select name="upazila" value={formData.upazila} onChange={handleChange} className="p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <option value="">Upazila</option>
              {upazilas.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            
            {passwordError && <span className="text-red-600 font-semibold">{passwordError}</span>}

            <select name="createdBy" value={formData.createdBy} onChange={handleChange} className="p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <option value="">Created By</option>
              {createdByOptions.map(c => <option key={c} value={c}>{c}</option>)}
            </select>

            <button type="submit" className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
              Sign Up
            </button>
            <button type="button" onClick={() => setShowSignUp(false)} className="mt-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition">
              Back to Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
