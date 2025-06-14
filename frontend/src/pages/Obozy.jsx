import React from 'react'
import Navbar from './Navbar';
import '../Obozy.css'

const Obozy = () => {
  return (
    <div className="obozyMain bg-black text-gold-400">
      <section
        className="relative h-[100vh] bg-fixed bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/zdjecieOPEN.JPG')" }}
      >
        <div className="text-center p-6 rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Obozy i Półkolonie Lato 2025</h1>
          <h2 className="text-xl md:text-2xl font-medium">Zorganizuj niezapomniane wakacje z Future Football Club!</h2>
        </div>
      </section>

      <Navbar />

      <div className="text-center py-10">
        <a
          href="/Documents/oboz_wasosz.pdf"
          download
        >
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
            Zapisz dziecko
          </button>
        </a>
      </div>
    </div>
  );
};

export default Obozy;
