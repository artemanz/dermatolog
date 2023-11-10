"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import portfolio1 from "../assets/portfolio-1.jpg";
import portfolio2 from "../assets/portfolio-2.jpg";
import portfolio3 from "../assets/portfolio-3.jpg";
import portfolio4 from "../assets/portfolio-4.jpg";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Arrow } from "./svg";

import c from "./style.module.scss"

interface Props {}

const slides = [
  { id: 1, src: portfolio1 },
  { id: 2, src: portfolio2 },
  { id: 3, src: portfolio3 },
  { id: 4, src: portfolio4 },
];

const Slider = (props: Props) => {
  return (
    <div className={c.sliderContainer}>
      <div>
        <Swiper
          spaceBetween={16}
          modules={[Navigation]}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2.5 },
            1024: {
              slidesPerView: 3.5,
            },
          }}
          navigation={{
            nextEl: "[data-selector=portfolio-next-el]",
            prevEl: "[data-selector=portfolio-prev-el]",
          }}
        >
          {slides.map((s) => (
            <SwiperSlide className={c.slide} key={s.id}>
              <Image className="mx-auto" src={s.src} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-around desktop:justify-end gap-16">
        <button className="text-accent" data-selector="portfolio-prev-el">
          <Arrow />
        </button>
        <button
          className="text-accent rotate-180"
          data-selector="portfolio-next-el"
        >
          <Arrow />
        </button>
      </div>
    </div>
  );
};

export { Slider };
