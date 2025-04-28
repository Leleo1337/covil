import { useState } from "react";
import Menu from "./components/Menu";
import { ArrowDown, Beer, Handshake, Music } from "lucide-react";
import Card from "./components/Card";

import firstImage from "./assets/gallery/first.png";
import secondImage from "./assets/gallery/second.png";
import thirdImage from "./assets/gallery/third.png";
import fourthImage from "./assets/gallery/fourth.png";

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
                  <p className="text-gray-200 text-xl md:text-2xl text-center pb-8">
                     O lugar perfeito para encontrar os amigos, curtir boa música, saborear os melhores churrascos e
                     bebidas alcólicas de Nova Prata.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4">
                     <button className="bg-amber-600 text-lg font-semibold text-white w-full sm:w-[200px] py-3 rounded-md">
                        Ver cardapio
                     </button>
                     <button className="outline-2 outline-white text-lg font-semibold text-white w-full sm:w-[200px] py-3 rounded-md">
                        Fazer reserva
                     </button>
                  </div>
               </div>
               <div className="absolute top-0 -z-1 w-full h-screen bg-cover bg-center bg-[url(./assets/background.png)]"></div>
               <ArrowDown color="white" size={30} className="absolute bottom-10 animate-bounce" />
            </section>
            <section className="bg-amber-900/10 p-4">
               <div className="mx-auto md:max-w-[1200px]">
                  <div className="flex flex-col gap-3 justify-center items-center pt-12">
                     <h1 className="text-3xl font-bold text-amber-900 text-center">Nossa historia</h1>
                     <div className="w-24 h-1 bg-amber-500"></div>
                  </div>
                  <div className="lg:flex flex-row-reverse gap-8 items-center justify-center">
                     <div className="grid grid-cols-2 gap-3 pt-20 lg:flex lg:flex-wrap lg:w-140 lg:pt-10">
                        <img
                           className="w-full h-42 sm:h-60 md:h-70 max-h-80 lg:h-50 lg:w-58.5 rounded-md"
                           src={firstImage}
                           alt="First"
                        />
                        <img
                           className="w-full h-42 sm:h-60 md:h-70 max-h-80 lg:h-50 lg:w-58.5 rounded-md"
                           src={secondImage}
                           alt="Second"
                        />
                        <img
                           className="w-full h-42 sm:h-60 md:h-70 max-h-80 lg:h-50 lg:w-58.5 rounded-md"
                           src={thirdImage}
                           alt="Third"
                        />
                        <img
                           className="w-full h-42 sm:h-60 md:h-70 max-h-80 lg:h-50 lg:w-58.5 rounded-md"
                           src={fourthImage}
                           alt="Fourth"
                        />
                     </div>
                     <div className="lg:w-140 py-12">
                        <h1 className="font-bold text-2xl text-amber-800 pb-4 md:text-center">
                           Um Lugar de Tradição e Amizade
                        </h1>
                        <p className="text-gray-600 pb-4 md:text-center lg:text-start">
                           Historia - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi consectetur
                           expedita iure quod molestias, perferendis dolores commodi dolorem minima consequatur velit
                           repellendus debitis repudiandae provident veritatis ipsa! Velit, obcaecati molestiae!
                        </p>
                        <p className="text-gray-600 md:pl-8 lg:pl-0">
                           proposta - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, quod aut facilis
                           laborum perspiciatis sed quam voluptate distinctio atque iste pariatur provident, nisi
                           inventore? Accusantium tenetur odio molestias veritatis tempore.
                        </p>
                        <div className="flex flex-col justify-center items-center md:flex-row gap-2 pt-8">
                           <Card
                              icon={<Beer size={30} color="#d97706" />}
                              title={"Cervejas/Chop"}
                              text={"variedade de sabores"}
                           />
                           <Card
                              icon={<Music size={30} color="#d97706" />}
                              title={"Música"}
                              text={"Michael jackson e vini aos sabados"}
                           />
                           <Card
                              icon={<Handshake size={30} color="#d97706" />}
                              title={"Amizades"}
                              text={"Ambiente para criar memórias."}
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section>
               <div>
                  <h1>Nosso Cardápio</h1>
               </div>
            </section>
         </main>
         <footer>
            
         </footer>
      </>
   );
}

export default App;
