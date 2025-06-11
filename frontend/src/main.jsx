import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import About from './pages/About.jsx'
import Obozy from './pages/Obozy.jsx'
import Treningi from './pages/Treningi.jsx'
import Kontakt from './pages/Kontakt.jsx'
import Form from './pages/Form.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/o-nas' element={<About />} />
      <Route path='/obozy-i-polkolonie' element={<Obozy />} />
      <Route path='/treningi' element={<Treningi />}></Route>
      <Route path='/kontakt' element={<Kontakt />}></Route>
      <Route path='/formularz' element={<Form />}></Route>
    </Routes>
  </BrowserRouter>
)
