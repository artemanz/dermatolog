import { getReviews } from "@/common/actions/getReviews";
import c from "./style.module.scss";
import Image from "next/image";
import { Review } from "@/components";

const Page = async () => {
  const [reviews, error] = await getReviews();
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
