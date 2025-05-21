import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function addingProverb() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    textDari: "",
    textPashto: "",
    translationEn: "",
    meaning: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(form).some((val) => val.trim() === "")) {
      alert("Please fill out all fields.");
      return;
    }
    await api.post("/proverbs", form);
    navigate("/");
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
      <button className="bg-green-500 text-white px-4 py-2 rounded">Add Proverb</button>
    </form>
  );
}
