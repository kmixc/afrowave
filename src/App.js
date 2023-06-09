import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Info from './pages/info';
import Lineup from './pages/Lineup';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Past_Festivals from './pages/Past Festivals';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/lineup" element={<Lineup />} />
        <Route path="/pastfestivals" element={<Past_Festivals />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
