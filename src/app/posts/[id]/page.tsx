'use client';
import { useParams } from 'next/navigation';
import useFetch from '@/hooks/useFetch';
import { Post } from '@/types';

export default function PostDetails() {
  const { id } = useParams();
  const { data, loading, error } = useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (loading) return <p className="text-gray-400">Loading post...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!data) return <p className="text-gray-400">No post found.</p>;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-400">{data.title}</h1>
      <p className="text-gray-200">{data.body}</p>
    </div>
  );
}
