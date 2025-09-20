'use client';
import { motion } from 'framer-motion';

export default function HomePage() {
  const stats = [
    { title: 'Total Posts', value: 120+ },
    { title: 'Total Users', value: 25k+ },
    { title: 'New Signups', value: 50+ },
    { title: 'Active Sessions', value: 32+ },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-gray-800 rounded-lg shadow-md text-gray-100"
      >
        <h1 className="text-2xl font-bold mb-2">Welcome to the the Dashboard of ZettaByte</h1>
        <p className="text-gray-300">
          This is your mini dashboard. Here you can see summary stats and navigate to other pages.
        </p>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition text-gray-100"
          >
            <h2 className="text-lg font-semibold">{stat.title}</h2>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
