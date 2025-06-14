import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { NavLink, Link } from 'react-router'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/Navbar'
import { motion, scale } from "motion/react";
import Form from './pages/Form'
import Aktualnosci from './pages/Aktualnosci'



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
            <h1 className="text-white text-5xl md:text-7xl font-black max-w-[80%] leading-tight px-6 py-4 rounded">
              Twoja przyszłość zaczyna się w <span className="text-[#D3AF37]">Future</span>
            </h1>
          </div>
    </section>
        <section>
        <motion.div
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              duration: 1,
              scale: {type: "spring", visualDuration: 0.5, bounce: 0}
            }}
          >
        <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 gap-10">
          <img src="/Bez_nazwy.jpg" alt="Zdjęcie" className="w-full md:w-1/2 h-auto rounded-lg shadow-lg" />
          <div className="bg-blue-900 text-yellow-300 p-6 rounded-lg md:w-1/2 text-lg shadow-md">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo consequatur maxime...
            </p>
          </div>
          <Aktualnosci />
        </section>
        </motion.div>
          {/* <div id='desc'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo consequatur maxime fugiat quisquam accusamus odit id, debitis enim ipsa temporibus fuga qui porro nihil at in, aliquam iste doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur voluptatem vitae consequatur, officia repellat minus voluptas corrupti accusamus hic voluptates quis fuga eum, adipisci illo incidunt optio magnam vel illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut! Fugiat rerum deleniti, tenetur consectetur commodi dolore odio non iure perspiciatis fuga explicabo eveniet beatae iusto debitis illo necessitatibus culpa.</p>
          </div> */}
        </section>
      </main>
      <Form />
    </>
  )
}

export default App
