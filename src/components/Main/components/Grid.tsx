import { Bold } from "lucide-react";
import React from "react";

export const GridContent = (): JSX.Element => {
  return (
    <>
        <div className="text-2xl ml-5 mb-6" >
            <h1> <b className="text-purple-600 ">Canais ao vivo</b> que achamos que você vai gostar</h1>
        </div>

        <div className=" grid grid-flow-col col-span-2 gap-2 ml-6">
              <div className="bg-slate-500 w-60 h-48"></div>
              <div className="bg-slate-500 w-60 h-48"></div>
              <div className="bg-slate-500 w-60 h-48"></div>
              <div className="bg-slate-500 w-60 h-48"></div>
              <div className="bg-slate-500 w-60 h-48"></div>
              <div className="bg-slate-500 w-60 h-48"></div>
        </div>
    </>
  );
};
