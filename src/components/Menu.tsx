import { Clock, MapPin, MenuIcon, Phone, X } from "lucide-react";
import { menuProps } from "../types/MenuProps";
import clsx from "clsx";
import { handleScrollToRef } from "../functions/handleScrollToRef";

export default function Menu({ isOpen, onClick, refs }: menuProps) {
   return (
      <>
         <button onClick={onClick} className="group relative mt-2 rounded">
            {isOpen ? <X color="white" /> : <MenuIcon color="white" />}
         </button>
         <div
            className={clsx(
               "absolute mx-auto right-0 w-screen p-4 mt-1 bg-amber-800/90 text-white shadow-md z-10 origin-top transition-all duration-200 ease-in-out pb-16",
               isOpen ? "scale-y-100 opacity-100" : "scale-y-0"
            )}>
            <ul className="flex flex-col gap-3">
               <a onClick={() => handleScrollToRef(refs.homeSectionRef)} className="block border-b pt-2 pb-1 border-amber-700 text-lg font-semibold text-start">
                  Inicio
               </a>
               <a onClick={() => handleScrollToRef(refs.historySectionRef)} className="block border-b pb-1 border-amber-700 text-lg font-semibold text-start">
                  Sobre
               </a>
               <a onClick={() => handleScrollToRef(refs.galerySectionRef)} className="block border-b pb-1 border-amber-700 text-lg font-semibold text-start">
                  Galeria
               </a>
               <a onClick={() => handleScrollToRef(refs.contactSectionRef)} className="block border-b pb-1 border-amber-700 text-lg font-semibold text-start">
                  Contato
               </a>
            </ul>
            <div className="pt-4 space-y-4">
               <div className="flex gap-2 text-sm items-center">
                  <MapPin />
                  <div className="flex flex-col justify-start">
                     <p>Av. Placidina de Araújo - Centro</p>
                     <p className="text-start"> Nova Prata - RS</p>
                  </div>
               </div>
               <div className="flex gap-2 text-sm items-center">
                  <Phone />
                  <p>(54) 9999-9999</p>
               </div>
               <div className="flex gap-2 text-sm items-center">
                  <Clock />
                  <p>Ter-Dom: 18h às 00h</p>
               </div>
            </div>
         </div>
      </>
   );
}
