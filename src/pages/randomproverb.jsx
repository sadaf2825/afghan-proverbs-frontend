import { useEffect, useState } from "react";
import api from "../api";

export default function RandomProverb() {
  const [proverb, setProverb] = useState(null);

  useEffect(() => {
    api.get("/proverbs").then((res) => {
      const all = res.data;
      const random = all[Math.floor(Math.random() * all.length)];
      setProverb(random);
    });
  }, []);

  if (!proverb) return <p>Loading random proverb...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2 text-center">Random Proverb</h2>
      <p className="text-right text-xl">{proverb.textDari}</p>
      <p className="text-left text-xl">{proverb.textPashto}</p>
      <p className="italic">{proverb.translationEn}</p>
      <p className="my-2">{proverb.meaning}</p>
      <p>Category: {proverb.category}</p>
    </div>
  );
}
