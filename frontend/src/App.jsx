import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { NavLink, Link } from 'react-router'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        <img src="Bez_nazwy.jpg" alt="MainPhoto" id='zdjecieMain' />
        <section>
          <img src="Bez_nazwy.jpg" alt="smallPhoto" id='smallPhoto' />
          <div id='desc'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo consequatur maxime fugiat quisquam accusamus odit id, debitis enim ipsa temporibus fuga qui porro nihil at in, aliquam iste doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur voluptatem vitae consequatur, officia repellat minus voluptas corrupti accusamus hic voluptates quis fuga eum, adipisci illo incidunt optio magnam vel illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut! Fugiat rerum deleniti, tenetur consectetur commodi dolore odio non iure perspiciatis fuga explicabo eveniet beatae iusto debitis illo necessitatibus culpa.</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
