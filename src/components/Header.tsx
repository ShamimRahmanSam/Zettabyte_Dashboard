"use client";

export default function Header() {
  return (
    <header className="bg-gray-800 p-4 shadow-md text-gray-100 flex justify-between items-center">
      <h1 className="font-bold text-lg">Dashboard</h1>
      <button className="bg-blue-600 hover:bg-blue-700 text-gray-100 px-3 py-1 rounded">
        Action
      </button>
    </header>
  );
}
