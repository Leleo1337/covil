// hooks
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Beer, Handshake, Instagram, Music } from "lucide-react";

// components
import Menu from "./components/Menu";
import Card from "./components/Card";
import GaleryPhoto from "./components/GaleryPhoto";

// utils
import { galeryPhotos, historyPhotos } from "./utils/imgPathsObj";

// functions
import { handleScrollToRef } from "./functions/handleScrollToRef";

function App() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [sticky, setSticky] = useState(false);

   const homeSectionRef = useRef<HTMLElement | null>(null);
   const historySectionRef = useRef<HTMLElement | null>(null);
   const galerySectionRef = useRef<HTMLElement | null>(null);

   useEffect(() => {
      const handleScroll = () => {
         setSticky(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   });

   return (
      <>
         <header
            className={`w-full h-16 fixed top-0 left-0 z-50 backdrop-blur-md transition-all duration-150 ease-in-out 
               ${sticky ? "-translate-y-3 bg-amber-900 shadow-md opacity-90 " : "translate-y-0"}
               ${isMenuOpen ? "bg-amber-900 origin-top shadow-md opacity-90 " : ""}
               `}>
            <div className="container mx-auto flex flex-row items-center justify-around pt-4 md:justify-between px-4 h-full">
               <h1 className="text-2xl font-bold text-white text-center ">Covil dos Guri</h1>
               <nav className="hidden sm:block">
                  <ul className="flex items-center gap-3 md:gap-8 text-white text-md">
                     <li
                        onClick={() => handleScrollToRef(homeSectionRef)}
                        className="cursor-pointer hover:text-amber-300 transition ease-in duration-75">
                        Inicio
                     </li>
                     <li
                        onClick={() => handleScrollToRef(historySectionRef)}
                        className="cursor-pointer hover:text-amber-300 transition ease-in duration-75">
                        Sobre
                     </li>
                     <li
                        onClick={() => handleScrollToRef(galerySectionRef)}
                        className="cursor-pointer hover:text-amber-300 transition ease-in duration-75">
                        Galeria
                     </li>
                     <li className="cursor-pointer hover:text-amber-300 transition ease-in duration-75">Contato</li>
                     <li>
                        <button className="bg-amber-600 py-2 px-5 rounded-md cursor-pointer hover:bg-amber-700 transition ease-in duration-75">
                           Reservas
                        </button>
                     </li>
                  </ul>
               </nav>
               <div className="sm:hidden">
                  <Menu isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
               </div>
            </div>
         </header>
         <main>
            <section ref={homeSectionRef} className="flex justify-center items-center w-full h-screen">
               <div className="flex flex-col container mx-auto max-w-2xl px-4 text-center">
                  <div className="flex flex-col pb-8">
                     <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">Bem-vindo ao </span>
                     <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-400">Covil dos Guri</span>
                  </div>
                  <p className="text-gray-200 text-xl md:text-2xl text-center pb-8">
                     O lugar perfeito para encontrar os amigos, curtir boa música, saborear os melhores churrascos e
                     bebidas alcólicas de Nova Prata.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4">
                     <button className="bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-lg font-semibold text-white w-full sm:w-[200px] py-3 rounded-md cursor-pointer transition ease-in duration-75">
                        Ver Cardapio
                     </button>
                     <button className="outline-2 outline-white text-lg font-semibold text-white w-full sm:w-[200px] py-3 rounded-md cursor-pointer active:bg-white/0 hover:bg-white/20 transition ease-in duration-75">
                        Fazer Reserva
                     </button>
                  </div>
               </div>
               <div className="absolute top-0 -z-1 w-full h-screen bg-cover bg-center bg-[url(./assets/background.png)]"></div>
               <ArrowDown
                  onClick={() => handleScrollToRef(historySectionRef)}
                  color="white"
                  size={30}
                  className="absolute bottom-10 animate-bounce cursor-pointer"
               />
            </section>
            <section ref={historySectionRef} className="bg-amber-900/5 p-4 pt-12 pb-28">
               <div className="mx-auto md:max-w-[1500px]">
                  <div className="flex flex-col gap-3 justify-center items-center pt-12">
                     <h1 className="text-3xl font-bold text-amber-900 text-center md:text-4xl">Nossa historia</h1>
                     <div className="w-24 h-1 bg-amber-500"></div>
                  </div>
                  <div className="lg:flex flex-row-reverse gap-12 items-center justify-center pt-8">
                     <div className="grid grid-cols-2 gap-3 lg:w-190 ">
                        <img
                           className="rounded-lg h-40 sm:h-60 w-full object-cover"
                           src={historyPhotos.historyFirst}
                           alt="First"
                        />
                        <img
                           className="rounded-lg h-40 sm:h-60 w-full object-cover"
                           src={historyPhotos.historySecond}
                           alt="Second"
                        />
                        <img
                           className="rounded-lg h-40 sm:h-60 w-full object-cover"
                           src={historyPhotos.historyThird}
                           alt="Third"
                        />
                        <img
                           className="rounded-lg h-40 sm:h-60 w-full object-cover"
                           src={historyPhotos.historyFourth}
                           alt="Fourth"
                        />
                     </div>
                     <div className="lg:w-180 py-12">
                        <h1 className="font-bold text-2xl text-amber-800 pb-4">Um Lugar de Tradição e Amizade</h1>
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
                        <div className="flex flex-col justify-center items-center md:flex-row gap-2 lg:gap-6 pt-14">
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
            <section ref={galerySectionRef} className="bg-amber-50">
               <div className="container mx-auto p-4 pt-20">
                  <div className="flex flex-col justify-center items-center gap-4">
                     <h1 className="text-amber-800 text-4xl font-bold">Nossa Galeria</h1>
                     <p className="text-gray-600">Momentos da Gurizada no covil</p>
                     <div className="w-20 bg-amber-500 h-1"></div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 h-full gap-4 pt-16 pb-8">
                     <GaleryPhoto img={galeryPhotos.galeryFirst} text="Essa noite foi Louca..." />
                     <GaleryPhoto img={galeryPhotos.galerySecond} text="Maromba & mansão maromba..." />
                     <GaleryPhoto img={galeryPhotos.galeryThird} text="Um verdadeiro carro vermelho" />
                     <GaleryPhoto img={galeryPhotos.galeryFourth} text="A mais bela culinaria da casa" />
                     <GaleryPhoto img={galeryPhotos.galeryFifth} text="Reunião de negocios..." />
                     <GaleryPhoto
                        img={galeryPhotos.galerySixth}
                        text="Nossos chef's profissionais e altamente qualificados"
                     />
                  </div>
                  <div>
                     <div className="flex gap-2 justify-center text-amber-800">
                        <a
                           href="https://instagram.com"
                           target="_blank"
                           className="hover:text-amber-900 hover:underline">
                           veja mais no nosso instagram
                        </a>
                        <span>
                           <Instagram />
                        </span>
                     </div>
                  </div>
               </div>
            </section>
            <section className="h-screen bg-amber-950/10"></section>
         </main>
         <footer></footer>
      </>
   );
}

export default App;
