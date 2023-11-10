import c from "./style.module.scss";

import { getReviews } from "@/common/actions/getReviews";
import { Reviews } from "@/components/Reviews";

interface Props {}

const Feedback = async (props: Props) => {
  const [reviews] = await getReviews();
  return (
    <section>
      <div className={c.content}>
        <h2 className={c.title}>Отзывы</h2>

        <div className={c.sliderContainer}>
          <Reviews reviews={reviews.slice(0, 6)} />
        </div>
      </div>
    </section>
  );
};

export { Feedback };
