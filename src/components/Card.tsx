import { cardProps } from "../types/cardProps.ts";

export default function Card({ icon, title, text }: cardProps) {
   return (
      <>
         <div className="flex flex-col items-center justify-center w-full h-32 md:h-40 bg-amber-900/10 p-4 rounded-md">
            {icon}
            <h1 className="font-semibold pt-2 text-md text-amber-800">{title}</h1>
            <p className="text-sm text-gray-600 text-center">{text}</p>
         </div>
      </>
   );
}
