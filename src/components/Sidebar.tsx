'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <motion.aside
      animate={{ width: open ? 200 : 60 }} // smooth width animation
      transition={{ duration: 0.3, type: 'tween' }}
      className="bg-gray-800 text-gray-100 min-h-screen flex flex-col overflow-hidden"
    >
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 hover:bg-gray-700 focus:outline-none"
      >
        {open ? '«' : '»'}
      </button>

      {/* Navigation */}
      <nav className="flex-1 mt-4">
        <ul className="flex flex-col">
          <li className="p-2 hover:bg-gray-700 rounded">
            <Link href="/">
              <span className={`transition-all ${open ? 'opacity-100' : 'opacity-0'}`}>
                Home
              </span>
            </Link>
          </li>
          <li className="p-2 hover:bg-gray-700 rounded">
            <Link href="/posts">
              <span className={`transition-all ${open ? 'opacity-100' : 'opacity-0'}`}>
                Posts
              </span>
            </Link>
          </li>
          <li className="p-2 hover:bg-gray-700 rounded">
            <Link href="/users">
              <span className={`transition-all ${open ? 'opacity-100' : 'opacity-0'}`}>
                Users
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </motion.aside>
  );
}
