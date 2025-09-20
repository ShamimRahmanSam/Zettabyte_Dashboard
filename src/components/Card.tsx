type Props = {
  title: string;
  description: string;
};

export default function Card({ title, description }: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-semibold text-lg mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
