import { IReview } from "@/common/actions/getReviews";
import { Star } from "../svg";
import c from "./style.module.scss";
import Link from "next/link";
interface Props {
  data: IReview;
}

const Review = ({ data }: Props) => {
  return (
    <div className={c.review}>
      <div className={c.reviewHeader}>
        <div className="space-y-2">
          <p>{data.name}</p>
          <div className="flex text-accent">
            {[...Array(data.rating)].map((_, i) => (
              <Star key={i} />
            ))}
          </div>
        </div>

        {data.source && (
          <Link
            className={c.reviewLink}
            target="_blank"
            href={data.source.href}
          >
            {data.source.text}
          </Link>
        )}
      </div>
      <p className={c.reviewText}>{data.text}</p>
    </div>
  );
};

export { Review };
