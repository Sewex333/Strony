import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { NavLink, Link } from 'react-router'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/Navbar'
import { motion, scale } from "motion/react";
import Form from './pages/Form'
import Aktualnosci from './pages/Aktualnosci'
import Footer from './pages/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        
        <section
          className="relative h-[90vh] bg-fixed bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/zdjecieOPEN.JPG')" }}
        >
          <div className='absolute bottom-[295px] left-10 z-10 bg-black max-w-[80%] h-50 w-300 shadow-xl rounded'></div>
          <div className="absolute bottom-[350px] left-10 z-10">
            <h1 className="text-white text-5xl md:text-7xl font-black max-w-[80%] leading-tight px-6 py-4 rounded ">
              Twoja przyszłość zaczyna się w <span className="text-[#D3AF37] tracking-wider">Future</span>
            </h1>
          </div>
    </section>
        <section className="flex flex-col md:flex-row items-start justify-between px-10 py-16 gap-10">
  {/* Lista z grafikami */}
  <div className="flex-1 space-y-6">
    <h2 className="text-3xl font-bold text-[#D3AF37] mb-6">W Future oferujemy:</h2>

    <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:scale-[1.02] transition-transform">
      <img src="/icons/shoot.png" alt="Sport" className="w-12 h-12" />
      <p className="text-lg font-medium">Sportową rywalizację</p>
    </div>

    <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:scale-[1.02] transition-transform">
      <img src="/icons/strategy.png" alt="Trener" className="w-12 h-12" />
      <p className="text-lg font-medium">Rozwój pod okiem najlepszych trenerów</p>
    </div>

    <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:scale-[1.02] transition-transform">
      <img src="/icons/football-pitch.png" alt="Turniej" className="w-12 h-12" />
      <p className="text-lg font-medium">Różne turnieje i wydarzenia</p>
    </div>

    <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:scale-[1.02] transition-transform">
      <img src="/icons/red.png" alt="Trening" className="w-12 h-12" />
      <p className="text-lg font-medium">Dyscyplina sportowa</p>
    </div>

    <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:scale-[1.02] transition-transform">
      <img src="/icons/brain.png" alt="Trening" className="w-12 h-12" />
      <p className="text-lg font-medium">Treningi mentalne dla każdego zawodnika</p>
    </div>

    <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:scale-[1.02] transition-transform">
      <img src="/icons/sport.png" alt="Trening" className="w-12 h-12" />
      <p className="text-lg font-medium">Obozy i róznorodne polkolonie</p>
    </div>
  </div>

  {/* Komponent Aktualnosci */}
  <div className="flex-1">
    <Aktualnosci />
  </div>
</section>
          {/* <div id='desc'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo consequatur maxime fugiat quisquam accusamus odit id, debitis enim ipsa temporibus fuga qui porro nihil at in, aliquam iste doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur voluptatem vitae consequatur, officia repellat minus voluptas corrupti accusamus hic voluptates quis fuga eum, adipisci illo incidunt optio magnam vel illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut! Fugiat rerum deleniti, tenetur consectetur commodi dolore odio non iure perspiciatis fuga explicabo eveniet beatae iusto debitis illo necessitatibus culpa.</p>
          </div> */}
      </main>
      <Form />
      <Footer />
    </>
  )
}

export default App
