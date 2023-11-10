"use client";

import { IReview } from "@/common/actions/getReviews";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import c from "./style.module.scss";
import clsx from "clsx";
import { Arrow } from "@/components/svg";
import { Review } from "./Review";

interface Props {
  reviews: IReview[];
}

const Reviews = ({ reviews }: Props) => {
  return (
    <div className={c.sliderContainer}>
      <Swiper
        spaceBetween={16}
        modules={[Navigation, Pagination]}
        breakpoints={{
          840: {
            slidesPerView: 2,
            spaceBetween: 48,
            slidesPerGroup: 2,
          },
        }}
        navigation={{
          nextEl: `[data-selector=reviews-slider-next]`,
          prevEl: `[data-selector=reviews-slider-prev]`,
        }}
        pagination={{
          el: `[data-selector=reviews-pagination]`,
          clickable: true,
          bulletClass: "SwiperBullet",
          bulletActiveClass: "active",
        }}
      >
        {reviews.map((r) => (
          <SwiperSlide className="h-auto" key={r.id}>
            <Review data={r} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={c.controls}>
        <button
          className={clsx("SwiperControl", "rotate-180")}
          data-selector="reviews-slider-prev"
        >
          <Arrow />
        </button>

        <div
          data-selector="reviews-pagination"
          className="SwiperPagination"
        ></div>

        <button className="SwiperControl" data-selector="reviews-slider-next">
          <Arrow />
        </button>
      </div>
    </div>
  );
};

export { Reviews };
