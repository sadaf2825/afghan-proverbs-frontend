import { Link } from "react-router-dom";

export default function ProverbCard({ proverb }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <p className="text-right text-lg">{proverb.textDari}</p>
      <p className="text-left text-lg">{proverb.textPashto}</p>
      <p className="mt-2 italic">{proverb.translationEn}</p>
      <p className="text-sm text-gray-600">Category: {proverb.category}</p>
      <Link to={`/proverbs/${proverb.id}`} className="text-blue-600 underline">
        View Details
      </Link>
    </div>
  );
}
