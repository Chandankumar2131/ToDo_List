import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center gap-2">
          🗂️ TaskMaster
        </div>
        <ul className="flex gap-6 text-lg font-medium">
          <li>
            <a href="#" className="hover:text-yellow-300 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition duration-300">
              Tasks
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition duration-300">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
