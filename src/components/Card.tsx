import { cardProps } from "../types/cardProps.ts";

export default function Card({ icon, title, text }: cardProps) {
   return (
      <>
         <div className="flex flex-col items-center justify-center w-full lg:w-[300px] h-35 bg-amber-900/10 p-2 rounded-md">
            {icon}
            <h1 className="font-bold pt-2 text-md text-amber-800">{title}</h1>
            <p className="text-sm text-gray-600 text-center">{text}</p>
         </div>
      </>
   );
}
