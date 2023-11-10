import c from "./style.module.scss";
import { IData } from "@/common/actions/getPriceList";
import { Motion } from "@/components/Motion";

export const PriceList = async ({ data }: { data: IData }) => {
  return (
    <div className={c.priceList}>
      {data.title && <p className={c.priceListTitle}>{data.title}</p>}
      <ul className="flex flex-col gap-16 mt-12 desktop:mt-20">
        {data.blocks.map((b) => (
          <Motion element="li" animate="from_bottom" key={b.priceList.title}>
            <p className={c.priceListSubtitle}>{b.priceList.title}</p>

            <ul className="flex flex-col gap-10 mt-12 desktop:mt-20">
              {b.priceList.prices.map((p) => (
                <Motion
                  element="li"
                  animate="from_bottom"
                  key={p.service}
                  className="flex items-start gap-10 justify-between"
                >
                  <p className={c.priceListService}>{p.service}</p>
                  <p className={c.priceListPrice}>{p.price}</p>
                </Motion>
              ))}
            </ul>
          </Motion>
        ))}
      </ul>
    </div>
  );
};
