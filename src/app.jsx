import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AddProverb from "./pages/addproverb";
import ProverbDetails from "./pages/proverbdetails";
import EditProverb from "./pages/editproverb";
import Navbar from "./components/Navbar";
import RandomProverb from "./pages/randomproverb";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProverb />} />
        <Route path="/proverbs/:id" element={<ProverbDetails />} />
        <Route path="/proverbs/:id/edit" element={<EditProverb />} />
        <Route path="/random" element={<RandomProverb />} /> 
      </Routes>
    </Router>
  );
}

