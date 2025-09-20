'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useFetch from '../../hooks/useFetch';
import PostCard from '../../components/PostCard';
import { Post } from '../../types';

export default function PostsPage() {
  const [simulateError, setSimulateError] = useState(false);

  const { data, loading, error } = useFetch<Post[]>(
    simulateError
      ? 'https://jsonplaceholder.typicode.com/invalid-endpoint'
      : 'https://jsonplaceholder.typicode.com/posts'
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Posts</h1>
        <button
          onClick={() => setSimulateError(!simulateError)}
          className="text-sm bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-md"
        >
          {simulateError ? 'Reset' : 'Simulate Error'}
        </button>

      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.slice(0, 12).map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <PostCard post={post} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
