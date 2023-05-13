import './App.css';
import Navbar from './components/Navbar';
import Logo from './img/Afrowave.svg'
import Video from './img/AFROWAVE_PROMO_VIDEO.mp4'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="relative h-screen">
          <div className='flex absolute z-[-60] overflow-hidden'>
            <video autoplay="autoplay" loop="loop" muted defaultMuted playsInline style={{ maxWidth: "1000%" }} id='myVideo'>
              <source src={Video}></source>
            </video>
          </div>
          <div className="mx-auto max-w-3xl pb-32 sm:pb-40 drop">
            <div>
              <div className='home'>
                <img className='logo' src={Logo} alt="afrowave logo" />
                <p>JUNE 17TH, 2023</p>
                <p>HISTORY - TORONTO, ON</p>
                <div className="mt-8 flex gap-x-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-white hover:ring-red-500 hover:text-white transition"
                  >
                    2023 TICKETS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className='video'>
        <video autoplay="autoplay" loop="loop" controls id='Video2022'>
          <source src={Video}></source>
        </video>
      </div>
      <div className='flyers'>

      </div>
      <div className='whychooseus'>
        <h2>WHY CHOOSE US?</h2>
      </div>
    </div>
  );
}

export default App;
