import Image from "next/image";
import c from "./style.module.scss";
import bg from "./assets/bg.jpg";

import bg1 from "./assets/block-1.jpg";
import bg2 from "./assets/block-2.jpg";
import bg3 from "./assets/block-3.jpg";
import bg4 from "./assets/block-4.jpg";
import { PriceList } from "./PriceList";
import { Motion } from "@/components/Motion";
import { data } from "./data";

const Price =  () => {
  // const [data, error] = await getPriceList();

  return (
    <main>
      <section className="relative">
        <Image className={c.bg} src={bg} alt="Bg" />
        <div className={c.backdrop} />
        <div className={c.heroContainer}>
          <Motion animate="from_bottom">
            <h1 className={c.title}>Прайс</h1>
          </Motion>
          <Motion
            element="p"
            animate="from_left"
            className={c.subtitle}
          >
            Актуальные цены необходимо уточнять у администраторов клиники
          </Motion>
        </div>
      </section>

      <section>
        <ul>
          <li className="relative">
            <Image className={c.sectionBg} src={bg1} alt="Консультация" />
            <PriceList data={data[0]} />
          </li>
          <li className="relative">
            <Image className={c.sectionBg} src={bg2} alt="Консультация" />
            <PriceList data={data[1]} />
          </li>
          <li className="relative">
            <Image className={c.sectionBg} src={bg3} alt="Консультация" />
            <PriceList data={data[2]} />
            <PriceList data={data[3]} />
          </li>
          <li className="relative">
            <Image className={c.sectionBg} src={bg4} alt="Консультация" />
            <PriceList data={data[4]} />
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Price;
