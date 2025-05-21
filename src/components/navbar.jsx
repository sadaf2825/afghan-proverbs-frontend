import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Afghan Proverbs</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/add">Add Proverb</Link>
      </div>
    </nav>
  );
}
