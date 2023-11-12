"use client";

import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import c from "./style.module.scss";
import clsx from "clsx";
import { Arrow } from "@/components/svg";
import Image, { StaticImageData } from "next/image";

interface Props {
  name: string;
  items: (string | StaticImageData)[];
  desctiptions?: (string | null)[];
}

const Gallery = ({ name, items, desctiptions }: Props) => {
  return (
    <div className={c.sliderContainer}>
      <Swiper
        spaceBetween={16}
        modules={[Navigation, Pagination]}
        breakpoints={{
          840: {
            slidesPerView: 3,
            spaceBetween: 48,
          },
        }}
        loop
        navigation={{
          nextEl: `[data-selector=${name}-slider-next]`,
          prevEl: `[data-selector=${name}-slider-prev]`,
        }}
        pagination={{
          el: `[data-selector=${name}-pagination]`,
          clickable: true,
          bulletClass: "SwiperBullet",
          bulletActiveClass: "active",
        }}
      >
        {items.map((gi, idx) => (
          <SwiperSlide className={c.slide} key={idx}>
            <Image className={c.image} src={gi} alt="Изображение галлереи" />
            {desctiptions && desctiptions[idx] && (
              <p className="text-lg desktop:text-xl text-center">{desctiptions[idx]}</p>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={c.controls}>
        <button
          className={clsx("SwiperControl", "rotate-180")}
          data-selector={`${name}-slider-prev`}
        >
          <Arrow />
        </button>

        <div
          data-selector={`${name}-pagination`}
          className="SwiperPagination"
        ></div>

        <button className="SwiperControl" data-selector={`${name}-slider-next`}>
          <Arrow />
        </button>
      </div>
    </div>
  );
};

export { Gallery };
