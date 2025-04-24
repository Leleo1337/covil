import { useState } from "react";
import Menu from "./components/Menu";
import { ArrowDown } from "lucide-react";

function App() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   return (
      <>
         <header className="container w-full inset-0 h-16 mx-auto fixed flex justify-around md:justify-between pt-4">
            <h1 className="text-2xl font-bold text-white text-center ">Covil dos guri</h1>
            <nav className="hidden sm:block">
               <ul className="flex gap-3 md:gap-8 text-white text-md">
                  <li>Inicio</li>
                  <li>Sobre</li>
                  <li>Menu</li>
                  <li>Galeria</li>
                  <li>Contato</li>
                  <li>
                     <button className="bg-amber-600 py-2 px-5 rounded-md">Reservas</button>
                  </li>
               </ul>
            </nav>
            <div className="sm:hidden">
               <Menu isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
         </header>
         <main>
            <section className="flex justify-center items-center w-full h-screen">
              <div className="flex flex-col container mx-auto max-w-2xl px-4 text-center">
                  <div className="flex flex-col pb-8">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">Bem-vindo ao </span>
                    <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-300">Covil dos Guri</span>
                  </div>
                  <p className="text-gray-200 text-xl md:text-2xl text-center pb-8">O lugar perfeito para encontrar os amigos, curtir boa música, saborear os melhores churrascos e bebidas alcólicas de Nova Prata.</p>
                  <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4">
                    <button className="bg-amber-600 text-lg font-semibold text-white w-full sm:w-[200px] py-3 rounded-md">Ver cardapio</button>
                    <button className="outline-2 outline-white text-lg font-semibold text-white w-full sm:w-[200px] py-3 rounded-md">Fazer reserva</button>
                  </div>
              </div>
              <div className="absolute top-0 -z-1 w-full h-screen bg-cover bg-center bg-[url(./assets/background.png)]"></div>
              <ArrowDown color="white" size={30} className="absolute bottom-10 animate-bounce" />
            </section>
            <section className="h-screen bg-amber-100/90">
              <div className="container">

              </div>
            </section>
         </main>
      </>
   );
}

export default App;
