import c from "./style.module.scss";
import { Review } from "@/components";
import { reviews } from "@/common/reviews";

const Page = async () => {
  // const [reviews, error] = await getReviews();

  return (
    <main>
      <ul className={c.reviews}>
        {reviews.map((r) => (
          <li key={r.id}>
            <Review data={r} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Page;
