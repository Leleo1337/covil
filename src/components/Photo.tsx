import { galeryPhotoProps } from "../types/galeryPhotoProps";
import { X } from "lucide-react";

export default function Photo({ img, text, fullscreen, toggleFullscreen, closeFullscreen }: galeryPhotoProps) {
   return (
      <>
         <div
            onClick={toggleFullscreen}
            className="group relative flex items-center justify-center overflow-hidden cursor-pointer rounded-md z-0">
            <img
               className="rounded-lg h-full w-full object-cover hover:brightness-40 hover:scale-110 transition-all ease duration-300 "
               src={img}
               alt="First"
            />
            <p className="absolute text-white select-none group-hover:opacity-100 opacity-0 transition-all ease duration-300">
               {text}
            </p>
         </div>
         {fullscreen && (
            <div className="flex items-center justify-center w-screen h-screen fixed inset-0 z-20 bg-black/85 backdrop-blur-xs overflow-y-hidden">
               <X
                  onClick={closeFullscreen}
                  className="absolute right-4 md:right-8 top-16 text-white hover:text-amber-500 cursor-pointer"
                  size={40}
               />
               <div className="flex items-center justify-center z-20 w-full h-90 rounded-lg">
                  <img
                     className="rounded-lg w-full max-h-[70vh] max-w-[400px] sm:max-w-[600px] md:max-w-[750px] mx-auto"
                     src={img}
                     alt="First"
                  />
               </div>
            </div>
         )}
      </>
   );
}
