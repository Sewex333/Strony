import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Obozy = () => {
  return (
    <div className="bg-black text-yellow-400 min-h-screen flex flex-col">
      <Navbar />

      <section
        className="relative h-[60vh] bg-fixed bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/glowna-obozy.jpg')" }}
      >
        <div className="text-center bg-black/70 p-6 rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Obozy i Półkolonie Lato 2025</h1>
          <p className="text-lg md:text-xl">Niezapomniane wakacje z Future Football Club!</p>
        </div>
      </section>

      <main className="flex-1 max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Tytuł sekcji */}
        <h2 className="text-4xl md:text-6xl text-center font-bold mb-12">Obozy</h2>

        {/* Wprowadzenie */}
        <div className="text-center space-y-4">
          <p className="text-2xl italic">
            Szanowni Państwo,<br />
            Dziękujemy i gratulujemy dobrego wyboru na wakacyjny wyjazd dla dzieci i młodzieży.
          </p>
          <p className="text-xl italic">
            Future Football Camp - niezapomniane dni pełne treningów, gier, przygód i edukacji w Ośrodku Wypoczynkowym w Wąsoszu!
          </p>
        </div>

        {/* Obóz Wąsosz */}
        <div className="bg-zinc-900 rounded-2xl p-8 shadow-xl space-y-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/wasosz.png" alt="Obóz Wąsosz" className="rounded-xl object-cover w-full h-64" />
            <div>
              <h3 className="text-3xl font-bold mb-4">Obóz Piłkarski Wąsosz 2025</h3>
              <ul className="text-yellow-300 list-disc list-inside space-y-1 mb-4">
                <li><strong>Termin:</strong> 27.07 – 03.08.2025 (8 dni, 7 nocy)</li>
                <li><strong>Miejsce:</strong> Hotel Albatros, Wąsosz</li>
                <li><strong>Cena:</strong> 2099 zł (członkowie) / 2199 zł (pozostali)</li>
                <li><strong>W cenie:</strong> pełne wyżywienie, zakwaterowanie, atrakcje, transport</li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/Documents/oboz_wasosz.pdf"
                  download
                  className="bg-yellow-400 text-black font-bold px-5 py-2 rounded-lg hover:bg-yellow-300 transition"
                >
                  Pobierz dokumenty
                </a>
                <a
                  href="mailto:ffc.biuro@gmail.com"
                  className="border border-yellow-400 px-5 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition"
                >
                  Zapisz dziecko
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-2xl italic font-semibold">Szczegóły</h4>
            <p className="text-base italic">
              Dokładną listę opiekunów na obozie, trenerów, szczegółach ostatecznych i terminie dokładnym odjazdu i powrotu
              poinformujemy około dnia 14.07.2025. Wyjazd z rana dnia 27.07.2025, powrót w godzinach popołudniowych dnia 03.08.2025.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold italic">Dokumenty i płatność</h4>
            <p className="text-base italic">
              Dokumenty i pełną płatność wraz z potwierdzeniem wpłaty należy dostarczyć skanem na maila do dnia 16.06.2025:
              <a href="mailto:ffc.biuro@gmail.com" className="text-yellow-300 underline"> ffc.biuro@gmail.com</a>.<br />
              Oryginały do 30.06.2025 osobiście lub listownie na adres: Dunikowskiego 41/12, 70-123 Szczecin.
            </p>
            <p className="text-sm italic">
              W załącznikach dokumenty wymagane do wypełnienia:
              <br />1. Karta kwalifikacyjna i dokumenty (PDF / DOC)
              <br />2. Karta zdrowia sportowca - niezbędna dla każdego
              <br />3. Deklaracja gry obozowa - tylko dla graczy z klubu na sezon 2025/2026
            </p>
          </div>
        </div>

        {/* Półkolonie Szczecin */}
        <div className="bg-zinc-900 rounded-2xl p-8 shadow-xl space-y-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/polkolonia.png" alt="Półkolonie Szczecin" className="rounded-xl object-cover w-full h-64" />
            <div>
              <h3 className="text-3xl font-bold mb-4">Półkolonie Letnie Szczecin 2025</h3>
              <ul className="text-yellow-300 list-disc list-inside space-y-1 mb-4">
                <li><strong>Termin:</strong> 30.06 – 04.07.2025</li>
                <li><strong>Miejsce:</strong> SP61, ul. 3 Maja 4, Szczecin</li>
                <li><strong>Cena:</strong> 699 zł (członkowie) / 749 zł (pozostali)</li>
                <li><strong>W programie:</strong> park linowy, kino, trampoliny, wykłady, treningi, basen i więcej!</li>
              </ul>
              <a
                href="mailto:ffc.biuro@gmail.com"
                className="bg-yellow-400 text-black font-bold px-5 py-2 rounded-lg hover:bg-yellow-300 transition"
              >
                Zarezerwuj miejsce
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Obozy;