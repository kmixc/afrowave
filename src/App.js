import './App.css';
import Navbar from './components/Navbar';
import Logo from './img/Afrowave.svg'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='home'>
        <div className='home-info'>
          <img className='logo' src={Logo} alt="afrowave logo" />
          <p>JUNE 12&13, 2023</p>
          <p>PARC JEAN-DRAPEAU</p>
          <p>AUGUST 11 IN THE CITY</p>
        </div>
      </div>
      <div className='whychooseus'>
        <h2>WHY CHOOSE US?</h2>
      </div>
    </div>
  );
}

export default App;
