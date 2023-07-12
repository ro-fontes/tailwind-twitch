"use client";
import { useStreamers } from "@/context/Streamers";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import {
  ResponsiveContainer,
  StackedCarousel,
} from "react-stacked-center-carousel";
import { Arrow } from "./Arrows";
import slide from "./slide";

export function RecommendedCarousel() {
  const ref = useRef<StackedCarousel>();
  const { currentStreamers } = useStreamers();

  const data = currentStreamers?.map((e) => {
    return {
      coverImage: e.thumbnail_url
        .replace("{width}", "300")
        .replace("{height}", "172"),
      video: e.thumbnail_url
        .replace("{width}", "300")
        .replace("{height}", "172"),
    };
  }) || [
    { coverImage: "", video: "" },
    { coverImage: "", video: "" },
    { coverImage: "", video: "" },
    { coverImage: "", video: "" },
    { coverImage: "", video: "" },
    { coverImage: "", video: "" },
  ];
  return (
    <div className="flex relative w-full h-full">
      <Arrow.Root>
        <Arrow.Icon onClick={() => ref.current?.goBack()} icon={ArrowLeft} />
      </Arrow.Root>
      <ResponsiveContainer
        carouselRef={ref}
        render={(width, carouselRef) => {
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={slide}
              slideWidth={750}
              carouselWidth={width}
              data={data}
              maxVisibleSlide={5}
              disableSwipe
              customScales={[1, 0.85, 0.7, 0.55]}
              transitionTime={450}
            />
          );
        }}
      />
      <Arrow.Root>
        <Arrow.Icon onClick={() => ref.current?.goNext()} icon={ArrowRight} />
      </Arrow.Root>
    </div>
  );
}
