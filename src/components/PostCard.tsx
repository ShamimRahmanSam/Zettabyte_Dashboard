import { Post } from "../types";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="p-4 border border-gray-700 rounded-lg shadow-md bg-gray-800 hover:bg-gray-700 transition">
      <h2 className="font-bold text-lg mb-2 text-gray-100">{post.title}</h2>
      <p className="text-gray-300">{post.body}</p>
    </div>
  );
}
