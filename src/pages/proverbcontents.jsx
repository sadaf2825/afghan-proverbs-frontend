import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

export default function proverbcontents() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [proverb, setProverb] = useState(null);

  useEffect(() => {
    api.get(`/proverbs/${id}`).then((res) => setProverb(res.data));
  }, [id]);

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this proverb?")) {
      await api.delete(`/proverbs/${id}`);
      navigate("/");
    }
  };

  if (!proverb) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <p className="text-right text-xl">{proverb.textDari}</p>
      <p className="text-left text-xl">{proverb.textPashto}</p>
      <p className="italic">{proverb.translationEn}</p>
      <p className="my-2">{proverb.meaning}</p>
      <p>Category: {proverb.category}</p>
      <div className="mt-4 space-x-4">
        <button onClick={() => navigate(`/proverbs/${id}/edit`)} className="bg-yellow-400 px-4 py-2 rounded">Edit</button>
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
      </div>
    </div>
  );
}
