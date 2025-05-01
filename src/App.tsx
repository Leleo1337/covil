// hooks
import { useEffect, useRef, useState } from "react";

// components
import Menu from "./components/Menu";
import Card from "./components/Card";
import Photo from "./components/Photo";
import {
   ArrowDown,
   ArrowLeft,
   ArrowRight,
   Beer,
   ClockIcon,
   Facebook,
   Handshake,
   Instagram,
   MailIcon,
   MapIcon,
   Music,
   PhoneIcon,
   Twitter,
} from "lucide-react";

// utils
import { galeryPhotos as galeryPhotosData, historyPhotos } from "./data/imgDatas.ts";

// functions
import { handleScrollToRef } from "./functions/handleScrollToRef";

// types

function App() {
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   const [sticky, setSticky] = useState<boolean>(false);
   const [fullScreenPhotoId, setFullscreenPhotoId] = useState<number>(0);
   const [tabIndex, setTabIndex] = useState<number>(0)

   const homeSectionRef = useRef<HTMLElement | null>(null);
   const historySectionRef = useRef<HTMLElement | null>(null);
   const galerySectionRef = useRef<HTMLElement | null>(null);
   const contactSectionRef = useRef<HTMLElement | null>(null);
   const reserveDivRef = useRef<HTMLDivElement | null>(null);

   const renderGalery = galeryPhotosData.slice(tabIndex * 6, tabIndex * 6 + 6).map((item) => (
      <Photo
         key={item.id}
         id={item.id}
         img={item.img}
         text={item.text}
         toggleFullscreen={() => toggleFullScreenPhoto(item.id)}
         closeFullscreen={() => setFullscreenPhotoId(0)}
         fullscreen={fullScreenPhotoId === item.id}
      />
   ));

   function showNextTab() {
      const maxTabs = Math.ceil(galeryPhotosData.length / 6) - 1;
      setTabIndex(prev => (prev < maxTabs ? prev + 1 : prev));
   }
   
   function showPreviousTab() {
      setTabIndex(prev => (prev > 0 ? prev - 1 : 0));
   }

   function toggleFullScreenPhoto(id: number) {
      return setFullscreenPhotoId((prev) => (id === prev ? 0 : id));
   }

   useEffect(() => {
      fullScreenPhotoId > 0 ? (document.body.style.overflowY = "hidden") : (document.body.style.overflowY = "auto");
   }, [fullScreenPhotoId]);

   useEffect(() => {
      const handleScroll = () => {
         setSticky(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("load", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
         window.removeEventListener("load", handleScroll);
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
                  <ul className="flex items-center gap-3 md:gap-8 text-white text-base">
                     <li className="cursor-pointer hover:text-amber-300 transition ease-in duration-75">
                        <a onClick={() => handleScrollToRef(homeSectionRef)}>Início</a>
                     </li>
                     <li className="cursor-pointer hover:text-amber-300 transition ease-in duration-75">
                        <a onClick={() => handleScrollToRef(historySectionRef)}>Sobre</a>
                     </li>
                     <li className="cursor-pointer hover:text-amber-300 transition ease-in duration-75">
                        <a onClick={() => handleScrollToRef(galerySectionRef)}>Galeria</a>
                     </li>
                     <li className="cursor-pointer hover:text-amber-300 transition ease-in duration-75">
                        <a onClick={() => handleScrollToRef(contactSectionRef)}>Contato</a>
                     </li>
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
                  <div
                     className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4">
                     <button className="bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-lg font-semibold text-white w-full sm:w-[200px] py-3 rounded-md cursor-pointer transition ease-in duration-75">
                        Ver Cardapio
                     </button>
                     <button onClick={() => handleScrollToRef(reserveDivRef)} className="outline-2 outline-white text-lg font-semibold text-white w-full sm:w-[200px] py-3 rounded-md cursor-pointer active:bg-white/0 hover:bg-white/20 transition ease-in duration-75">
                        Fazer Reserva
                     </button>
                  </div>
               </div>
               <div className="absolute top-0 -z-1 w-full h-screen bg-cover bg-center bg-[url(./assets/background.png)]"></div>
               <ArrowDown
                  onClick={() => handleScrollToRef(historySectionRef)}
                  size={30}
                  className="absolute bottom-10 animate-bounce cursor-pointer text-white hover:text-amber-300"
               />
            </section>
            <section ref={historySectionRef} className="bg-amber-800/5 p-4 pt-12 pb-28">
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
                        <p className="text-gray-600 pb-4 text-sm md:text-base">
                           Historia - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi consectetur
                           expedita iure quod molestias, perferendis dolores commodi dolorem minima consequatur velit
                           repellendus debitis repudiandae provident veritatis ipsa! Velit, obcaecati molestiae!
                        </p>
                        <p className="text-gray-600 text-sm md:text-base">
                           proposta - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, quod aut facilis
                           laborum perspiciatis sed quam voluptate distinctio atque iste pariatur provident, nisi
                           inventore? Accusantium tenetur odio molestias veritatis tempore.
                        </p>
                        <div className="flex flex-col justify-center items-center md:flex-row gap-2 lg:gap-6 pt-14">
                           <Card
                              icon={<Beer size={30} color="#d97706" />}
                              title={"Bebidas"}
                              text={"Variedade de bebidas alcólicas"}
                           />
                           <Card
                              icon={<Music size={30} color="#d97706" />}
                              title={"Música"}
                              text={"Zezé Di Camargo & Luciano aos sabados"}
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
            <section ref={galerySectionRef} className="bg-amber-900/10">
               <div className="container mx-auto p-4 pt-20">
                  <div className="flex flex-col justify-center items-center gap-4">
                     <h1 className="text-amber-800 text-4xl font-bold">Nossa Galeria</h1>
                     <p className="text-gray-600">Momentos da Gurizada no covil</p>
                     <div className="w-20 bg-amber-500 h-1"></div>
                  </div>
                  <div>
                     <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 h-full gap-4 pt-16 pb-8 max-h-[1000px] relative z-1">
                        {renderGalery}
                     </div>
                     <div className="flex items-center justify-center pb-8 gap-4">
                        <ArrowLeft onClick={showPreviousTab} className="cursor-pointer hover:text-amber-500"/>
                        <ArrowRight onClick={showNextTab} className="cursor-pointer hover:text-amber-500"/>
                     </div>
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
            <section ref={contactSectionRef} className="bg-amber-800/5 pb-24">
               <div className="container mx-auto pt-16 p-4">
                  <div className="flex flex-col justify-center items-center gap-4 pb-16">
                     <h1 className="text-2xl md:text-4xl text-amber-800 font-bold">Localização & Contato</h1>
                     <p className="text-gray-600 text-sm text-center md:text-base">
                        Encontre-nos facilmente e entre em contato para mas informações ou reservas.
                     </p>
                     <div className="w-20 h-1 bg-amber-500"></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-12">
                     <div className="shadow-md">
                        <iframe
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.358084737092!2d-51.60939783339293!3d-28.7984010613808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951dc90010e4898b%3A0x20bb891982dd5824!2sCovil%20dos%20Guri!5e0!3m2!1spt-BR!2sbr!4v1746036561230!5m2!1spt-BR!2sbr"
                           className="h-full w-full rounded-md min-h-60"
                           loading="lazy"></iframe>
                     </div>
                     <div className="flex flex-col gap-8">
                        <div className="bg-white p-6 rounded-md shadow-md">
                           <h3 className="text-amber-800 text-xl font-bold">Informações de contato</h3>
                           <div className="pt-6">
                              <div className="pt-0">
                                 <div className="flex gap-4 pb-2">
                                    <MapIcon className="text-amber-500" />
                                    <h1 className="font-semibold border-b border-gray-300">Endereço</h1>
                                 </div>
                                 <div className="pl-10 text-sm md:text-base text-gray-600">
                                    <p>Av. Placidina de Araújo - Centro</p>
                                    Nova Prata - RS, 95320-000
                                 </div>
                              </div>
                              <div className="pt-4">
                                 <div className="flex gap-4 pb-2">
                                    <ClockIcon className="text-amber-500" />
                                    <h1 className="font-semibold border-b border-gray-300">Horário de Funcionamento</h1>
                                 </div>
                                 <div className="pl-10 text-sm md:text-base text-gray-600">
                                    <p>Terça a Quinta: 18h às 00h </p>
                                    <p>Sexta e Sábado: 18h às 02h </p>
                                    <p> Domingo: 18h às 00h</p>
                                    <p>Segunda: Fechado</p>
                                 </div>
                              </div>
                              <div className="pt-4">
                                 <div className="flex gap-4 pb-2">
                                    <PhoneIcon className="text-amber-500" />
                                    <h1 className="font-semibold border-b border-gray-300">Telefone</h1>
                                 </div>
                                 <div className="pl-10 text-sm md:text-base text-gray-600">
                                    <p>(54) 9999-9999</p>
                                 </div>
                              </div>
                              <div className="pt-4">
                                 <div className="flex gap-4 pb-2">
                                    <MailIcon className="text-amber-500" />
                                    <h1 className="font-semibold border-b border-gray-300">E-mail</h1>
                                 </div>
                                 <div className="pl-10 text-sm md:text-base text-gray-600">
                                    <p>contato@covildosguri.com.br</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div ref={reserveDivRef} className="bg-amber-900/8 rounded-md shadow-md">
                           <div className="p-6">
                              <h3 className="text-amber-800 text-2xl font-bold pb-4">Faça sua Reserva</h3>
                              <p className="text-gray-600 text-base">
                                 Garanta seu lugar para eventos especiais ou um happy hour entre amigos.
                              </p>
                           </div>
                           <div className="px-6 pb-6">
                              <div className="flex flex-col gap-4">
                                 <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                       type="text"
                                       placeholder="Nome"
                                       className="bg-white px-4 py-2 rounded-md border border-gray-300 focus:outline-0 focus:ring-2 focus:ring-amber-400"
                                    />
                                    <input
                                       type="email"
                                       placeholder="E-mail"
                                       className="bg-white px-4 py-2 rounded-md border border-gray-300 focus:outline-0 focus:ring-2 focus:ring-amber-400"
                                    />
                                 </div>
                                 <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                       type="tel"
                                       placeholder="telefone"
                                       className="bg-white px-4 py-2 rounded-md border border-gray-300 focus:outline-0 focus:ring-2 focus:ring-amber-400"
                                    />
                                    <input
                                       type="number"
                                       placeholder="Numero de pessoas"
                                       className="bg-white px-4 py-2 rounded-md border border-gray-300 focus:outline-0 focus:ring-2 focus:ring-amber-400"
                                    />
                                 </div>
                                 <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                       type="date"
                                       className="bg-white px-4 py-2 rounded-md border border-gray-300 focus:outline-0 focus:ring-2 focus:ring-amber-400"
                                    />
                                    <button className="flex justify-between bg-white px-4 py-2 rounded-md border border-gray-300 focus:outline-0 focus:ring-2 focus:ring-amber-400">
                                       {"Selecione"} <ArrowDown />
                                    </button>
                                 </div>
                                 <textarea
                                    placeholder="Observações ou pedidos especiais"
                                    className="bg-white h-26 px-4 py-2 rounded-md border border-gray-300 focus:outline-0 focus:ring-2 focus:ring-amber-400"></textarea>
                              </div>
                              <button className="w-full px-4 py-3 mt-4 bg-amber-600 text-white rounded-md hover:bg-amber-700 active:bg-amber-600 cursor-pointer">
                                 Solicitar reserva
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <footer className="w-full bg-amber-900">
            <div className="container mx-auto p-4">
               <div className="grid gap-8l md:grid-cols-3 lg:grid-cols-4 gap-8 border-b border-amber-700 pt-8 pb-16 md:align-middle">
                  <div className="lg:col-span-2">
                     <h1 className="text-lg font-bold text-white pb-4">Covil dos Guri</h1>
                     <p className="text-amber-100 text-sm md:text-base">
                        O melhor lugar para encontrar a gurizada,curtir boa música e saborear as melhores bebidas.
                     </p>
                     <div className="flex gap-4 text-white font-bold py-4">
                        <a href="https://facebook.com" target="_blank" className="hover:text-amber-300 hover:scale-105 cursor-pointer">
                           <Facebook />
                        </a>
                        <a href="https://x.com" target="_blank" className="hover:text-amber-300 hover:scale-105 cursor-pointer">
                           <Twitter />
                        </a>
                        <a href="https://instagram.com/" target="_blank" className="hover:text-amber-300 hover:scale-105 cursor-pointer">
                           <Instagram />
                        </a>
                     </div>
                  </div>
                  <div className="flex flex-col">
                     <h1 className="text-white font-bold text-lg pb-4">links rapidos</h1>
                     <ul className="flex flex-col gap-2 text-white text-sm md:text-base">
                        <li>
                           <a
                              onClick={() => handleScrollToRef(homeSectionRef)}
                              className="cursor-pointer text-amber-100 hover:text-amber-300 transition ease-in duration-75">
                              Início
                           </a>
                        </li>
                        <li>
                           <a
                              onClick={() => handleScrollToRef(historySectionRef)}
                              className="cursor-pointer text-amber-100 hover:text-amber-300 transition ease-in duration-75">
                              Sobre
                           </a>
                        </li>
                        <li>
                           <a
                              onClick={() => handleScrollToRef(galerySectionRef)}
                              className="cursor-pointer text-amber-100 hover:text-amber-300 transition ease-in duration-75">
                              Galeria
                           </a>
                        </li>
                        <li>
                           <a
                              onClick={() => handleScrollToRef(contactSectionRef)}
                              className="cursor-pointer text-amber-100 hover:text-amber-300 transition ease-in duration-75">
                              Contato
                           </a>
                        </li>
                        <li>
                           <a className="cursor-pointer text-amber-100 hover:text-amber-300 transition ease-in duration-75">
                              Reservas
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div className=" text-sm md:text-base text-amber-100 space-y-2">
                     <h1 className="text-lg text-white font-bold">Contato</h1>
                     <p>Av. Placidina de Araújo - Centro</p>
                     <p>Nova Prata - RS, 95320-000</p>
                     <p>(54) 9999-9999</p>
                     <p>contato@covildosguri.com.br</p>
                  </div>
               </div>
               <div className="py-8 space-y-2 ">
                  <h3 className="text-center text-amber-200 text-sm md:text-base">
                     © 2025 Covil dos Guri. Todos os direitos reservados.
                  </h3>
                  <p className="text-sm text-amber-200 text-center">
                     <a href="#" className="hover:underline">Política de Privacidade</a> | <a href="#" className="hover:underline">Termos de Uso</a>
                  </p>
               </div>
            </div>
         </footer>
      </>
   );
}

export default App;
