import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Info from './pages/info';
import Lineup from './pages/Lineup';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Past_Festivals_2021 from './pages/Past Festivals 2021';
import Past_Festivals_2022 from './pages/Past Festivals 2022';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/lineup" element={<Lineup />} />
        <Route path="/pastfestivals2021" element={<Past_Festivals_2021 />} />
        <Route path="/pastfestivals2022" element={<Past_Festivals_2022 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
