import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomePage() {
  const [proverbs, setProverbs] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/proverbs')
      .then(res => setProverbs(res.data))
      .catch(err => console.error(err));
  }, []);

  const filteredProverbs = proverbs.filter(proverb =>
    proverb.textDari.includes(search) ||
    proverb.textPashto.includes(search) ||
    proverb.translationEn.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search in Dari, Pashto or English"
        className="border p-2 rounded w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredProverbs.map((p) => (
          <li key={p.id} className="mb-2 border-b pb-2">
            <p><strong>Dari:</strong> {p.textDari}</p>
            <p><strong>Pashto:</strong> {p.textPashto}</p>
            <p><strong>English:</strong> {p.translationEn}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const getRandomProverb = async () => {
  const res = await axios.get('http://localhost:3000/proverbs/random');
  alert(res.data.translationEn);
};


<button onClick={getRandomProverb} className="bg-blue-500 text-white px-4 py-2 rounded">
  Show Random Proverb
</button>

