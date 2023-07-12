import Image from "next/image";
import React, { memo, useEffect } from "react";
import { StackedCarouselSlideProps } from "react-stacked-center-carousel";

const Slide = ({
  data,
  dataIndex,
  isCenterSlide,
  swipeTo,
  slideIndex,
}: StackedCarouselSlideProps) => {
  const [loadDelay, setLoadDelay] = React.useState<any>();
  const [removeDelay, setRemoveDelay] = React.useState<any>();
  const [loaded, setLoaded] = React.useState(false);

  useEffect(() => {
    if (isCenterSlide) {
      clearTimeout(removeDelay);
      setLoadDelay(setTimeout(() => setLoaded(true), 1000));
    } else {
      clearTimeout(loadDelay);
      if (loaded) setRemoveDelay(setTimeout(() => setLoaded(false), 1000));
    }
  }, [isCenterSlide]);

  useEffect(() => {
    clearTimeout(removeDelay);
    clearTimeout(loadDelay);
  }, []);

  const { coverImage, video } = data[dataIndex];

  return (
    <div
      className={`transition-all ease-in duration-300 cursor-pointer w-full h-[18.75rem] relative bg-white shadow-black [&>:not(:nth-child(2))]:hover:scale-105`}
      draggable={false}
    >
      <div
        className={`absolute transition-opacity ease-in duration-300 w-full h-full ${
          isCenterSlide && loaded ? "opacity-0 -z-10" : "opacity-100 z-10"
        }`}
      >
        <div
          className="select-none absolute bg-black/30 transition-all ease-in duration-300 card-overlay w-full h-full"
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
        <Image
          width={500}
          height={170}
          className="bg-cover w-full h-full"
          src={coverImage}
          alt="teste"
        />
      </div>
      {loaded && (
        <div className="flex w-full h-full z-20 bg-slate-300 ">
          <Image
            width={500}
            height={170}
            className="w-[70%]"
            src={video}
            alt="teste"
          />

          <div className="flex w-[30%] flex-col bg-orange-800">
            teste
            {/* <CardHeader
              avatar={<Avatar className="avatar">D</Avatar>}
              title="Bot Danny"
              subheader="September 14, 2016"
            />
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. He done a
              great job!
            </Typography> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Slide);
