import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TimeLineContent } from "./components/TimeLine";
import { ArrowsComp } from "./components/Arrows";
import { GridContent } from "./components/Grid";

export const MainComponent = (): JSX.Element => {
  return (
    <>
      <div className="flex mt-3 items-center justify-between py-6">
        <ArrowsComp left />
          <TimeLineContent />
        <ArrowsComp />
      </div>
      <div className=" flex flex-col">
        <GridContent />
      </div></>
  );
};
