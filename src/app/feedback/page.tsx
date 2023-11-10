import Image from "next/image";
import bg from "./assets/bg.jpg";
import mobilebg from "./assets/mobile-bg.jpg";
import c from "./style.module.scss";
import { getReviews } from "@/common/actions/getReviews";
import Link from "next/link";
import { NAVIGATION } from "@/common/navigation";
import { Reviews as ReviewsSlider } from "@/components";

const Reviews = async () => {
  const [reviews, error] = await getReviews();

  if (error)
    return (
      <main>
        <p className="text-center">
          Произошла ошибка. <br /> Попробуйте зайти позже
        </p>
      </main>
    );

  return (
    <main>
      <section className={c.section}>
        <Image className={c.bg} src={bg} alt="Bg" />
        <Image className={c.mobileBg} src={mobilebg} alt="Bg" />

        <div className={c.content}>
          <h1 className={c.title}>ОТЗЫВЫ</h1>

          <div className={c.sliderContainer}>
            <ReviewsSlider reviews={reviews.slice(0, 6)} />
          </div>

          <a className={c.button} href={NAVIGATION.FEEDBACK_FULL.path}>
            Посмотреть все
          </a>
        </div>
      </section>
    </main>
  );
};

export default Reviews;
