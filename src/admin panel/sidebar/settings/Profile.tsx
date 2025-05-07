import React, { useRef, useState } from "react";

export default function Profile() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@bidua.com");
  const [notifications, setNotifications] = useState({
    email: true,
    system: false,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNotificationChange = (type: "email" | "system") => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">General Settings</h1>

      {/* Profile Image Section */}
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <div className="flex items-center space-x-4">
          <img
            src={imagePreview || "https://via.placeholder.com/150"}
            alt="Admin Avatar"
            className="w-16 h-16 rounded-full object-cover border border-gray-600"
          />
          <div>
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-400">{email}</p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="mt-2 text-sm text-blue-400 hover:underline"
            >
              Choose Profile Image
            </button>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              className="hidden"
              title="Choose a profile image"
            />
          </div>
        </div>
      </div>

      {/* Account Section */}
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Account</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-400">Name</label>
            <input
              type="text"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              title="Name input field"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-400">Email</label>
            <input
              type="email"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              title="Email input field"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-400">Password</label>
            <input
              type="password"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded"
              placeholder="Enter your password"
              title="Password input field"
              aria-label="Password"
            />
          </div>
          <button className="mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
            Save Changes
          </button>
        </div>
      </div>

      {/* Notification Section */}
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span>Email Notifications</span>
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={() => handleNotificationChange("email")}
              className="w-5 h-5"
              title="Toggle email notifications"
              aria-label="Email Notifications"
            />
          </div>
          <div className="flex justify-between items-center">
            <span>System Alerts</span>
            <input
              type="checkbox"
              checked={notifications.system}
              onChange={() => handleNotificationChange("system")}
              className="w-5 h-5"
              title="Toggle system alerts"
              aria-label="System Alerts"
            />
          </div>
        </div>
      </div>

      {/* Billing Section */}
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Billing</h2>
        <p className="text-gray-300 mb-1">Status: Pro Plan – Active</p>
        <p className="text-gray-400 text-sm">Renewal: 2025-01-01</p>
        <div className="mt-4 space-x-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Manage Billing
          </button>
        </div>
      </div>

      {/* Final Log Out Button */}
      <div className="text-right">
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
          Log Out
        </button>
      </div>
    </div>
  );
}
