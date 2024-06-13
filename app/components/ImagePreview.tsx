"use client";
import { type ImagePreview } from "../lib/types";
import React, { ComponentPropsWithoutRef, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard, EffectFade } from "swiper/modules";
import image_dummy from "../../public/images/image_dummy.jpg";
import image_dummy_version from "../../public/images/image_dummy_version.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Image from "next/image";
import { cn } from "../lib/helpers";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/outline";

function Button({
  direction,
  className,
  ...props
}: ComponentPropsWithoutRef<"button"> & {
  direction: "backwards" | "forwards";
}) {
  const styles = {
    backwards: "left-6",
    forwards: "right-6",
  };
  const iconStyles = {
    backwards: "left-[calc(50%-1px)]",
    forwards: "left-[calc(50%+1px)]",
  };
  function getIcon(direction: "backwards" | "forwards") {
    if (direction === "backwards") return ChevronLeftIcon;
    if (direction === "forwards") return ChevronRightIcon;
  }
  const Icon = getIcon(direction) as typeof ChevronLeftIcon;

  return (
    <button
      className={cn(
        "absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
        styles[direction],
      )}
      {...props}
    >
      <MinusCircleIcon className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 fill-teal-400 stroke-none" />
      <Icon
        className={cn(
          "absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2",
          iconStyles[direction],
        )}
      />
    </button>
  );
}

export default function ImagePreview({ data }: { data: ImagePreview }) {
  const swiperInstance = useRef<SwiperRef>(null);
  const [realIndex, setRealIndex] = useState<number>(0);

  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, Keyboard, EffectFade]}
        loop={true}
        onSlideChange={(swiper) => setRealIndex(swiper.realIndex)}
        keyboard={{
          enabled: true,
        }}
        className="relative h-[500px] w-full bg-blue-500 text-black"
        ref={swiperInstance}
      >
        {data.images.map((image, i) => (
          <SwiperSlide
            key={i}
            className="pointer-events-none !flex h-full w-full items-center justify-center"
            {...image}
          >
            <Image
              src={i % 2 ? image_dummy : image_dummy_version}
              alt={image.alt}
              fill
              className="pointer-events-none object-cover"
            />
          </SwiperSlide>
        ))}
        <Button
          direction="backwards"
          onClick={() => swiperInstance.current?.swiper.slidePrev()}
        />
        <Button
          direction="forwards"
          onClick={() => swiperInstance.current?.swiper.slideNext()}
        />
      </Swiper>
      <div className="my-2.5">
        <ul className="flex space-x-1">
          {data.images.map((image, i) => (
            <li
              className={cn(
                "inline-block h-[2px] flex-1 bg-neutral-700",
                realIndex === i && "bg-neutral-400",
              )}
            ></li>
          ))}
        </ul>
      </div>
      <div className="">
        <span className="mr-2 pt-1.5 text-xs font-medium text-neutral-400">
          {realIndex + 1}/{data.images.length}
        </span>
        <div className="inline pt-1.5 text-xs font-light italic text-neutral-400">
          <figcaption className="mr-2 inline">{data.description}</figcaption>
          <cite className="not-italic">Images: {data.imageSource}</cite>
        </div>
      </div>
    </>
  );
}
