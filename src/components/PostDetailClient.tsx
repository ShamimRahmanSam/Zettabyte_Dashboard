'use client';
import useFetch from '../hooks/useFetch';
import { Post } from '../types';

export default function PostDetailClient({ id }: { id: string }) {
  const { data, loading, error } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (loading) return <p>Loading post...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!data) return <p>No post found.</p>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
