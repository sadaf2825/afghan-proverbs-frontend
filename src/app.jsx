import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AddProverb from "./pages/AddProverb";
import ProverbDetails from "./pages/ProverbDetails";
import EditProverb from "./pages/EditProverb";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProverb />} />
        <Route path="/proverbs/:id" element={<ProverbDetails />} />
        <Route path="/proverbs/:id/edit" element={<EditProverb />} />
      </Routes>
    </Router>
  );
}
