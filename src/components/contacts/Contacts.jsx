import React, { useState } from "react";

export default function Contact() {


  return (
    <div>
      <div className="bg-white">
        {/* Top Header */}
        <div className="bg-black flex justify-between items-center px-10 py-4">
          <div className="flex items-center gap-3">
            <img
              src="src/components/contacts/Screenshot 2024-09-28 001558.png"
              alt="Plex Logo"
              className="h-20"
            />
            <h1 className="text-white text-xl font-bold">Help Center</h1>
          </div>
          <div className="flex gap-6">
            <button className="border-2 text-white bg-[#F40612] px-6 py-2 rounded-md">
              Join S-cart
            </button>
            <button className="text-white bg-[#F40612] px-6 py-2 rounded-md">
              Sign in
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="mt-2 font-semibold">
              Tell us more and we'll find the best solution for you
            </p>
          </div>
   
      

          {/* Quick Links */}
          <div className="mt-10 space-y-6">
            <div>
              <h1 className="text-2xl font-semibold">Quick Links</h1>
              <hr className="mt-2 border-gray-300" />
            </div>
            <div className="space-y-4">
              <QuickLink title="Content Grievances in India" />
              <QuickLink title="Reset Password" />
              <QuickLink title="Update Email" />
              <QuickLink title="Get Help Signing In" />
              <QuickLink title="Update Payment Method" />
              <QuickLink title="Request TV Shows or Movies" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-tr from-black to-red-900 py-10">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <button className="border-2 bg-red-500 px-8 py-2 text-white rounded-md">
              English
            </button>
            <div className="text-white space-y-2">
              <p>Terms of Use</p>
              <p>Privacy</p>
              <p>Cookie Preferences</p>
              <p>Corporate Information</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Component for Quick Links
const QuickLink = ({ title }) => (
  <div>
    <a href="#" className="text-blue-500 hover:underline">
      {title}
    </a>
    <hr className="mt-2 border-gray-300" />
  </div>
);
