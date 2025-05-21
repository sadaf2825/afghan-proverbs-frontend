import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

export default function editingproverb() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    textDari: "",
    textPashto: "",
    translationEn: "",
    meaning: "",
    category: "",
  });

  useEffect(() => {
    api.get(`/proverbs/${id}`).then((res) => setForm(res.data));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/proverbs/${id}`, form);
    navigate(`/proverbs/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      {["textDari", "textPashto", "translationEn", "meaning", "category"].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field}
          value={form[field]}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      ))}
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Update Proverb</button>
    </form>
  );
}
