'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useFetch from '@/hooks/useFetch';

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export default function UsersPage() {
  const { data, loading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (loading) return <p className="text-gray-400">Loading users...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!data) return <p className="text-gray-400">No users found.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-blue-400">Users</h1>
      <table className="w-full bg-gray-800 rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gray-700">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="border-b border-gray-700 hover:bg-gray-600">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">
                <button
                  className="px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded"
                  onClick={() => setSelectedUser(user)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <AnimatePresence>
        {selectedUser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full"
            >
              <h2 className="text-xl font-bold mb-2 text-blue-400">{selectedUser.name}</h2>
              <p className="text-gray-200">Email: {selectedUser.email}</p>
              <p className="text-gray-200">Phone: {selectedUser.phone}</p>
              <button
                className="mt-4 px-3 py-1 bg-red-500 hover:bg-red-600 rounded"
                onClick={() => setSelectedUser(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
