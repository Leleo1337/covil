import { galeryPhotoProps } from '../types/galeryPhotoProps'

export default function GaleryPhoto({ img, text }: galeryPhotoProps) {
   return (
      <>
         <div className="group relative flex items-center justify-center overflow-hidden cursor-pointer rounded-md">
            <img
               className="rounded-lg h-full w-full object-cover hover:brightness-40 hover:scale-110 transition-all ease duration-300 "
               src={img}
               alt="First"
            />
            <p className="absolute text-white select-none group-hover:opacity-100 opacity-0 transition-all ease duration-300">
               {text}
            </p>
         </div>
      </>
   );
}
