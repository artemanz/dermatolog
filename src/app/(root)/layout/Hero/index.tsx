import Image from "next/image";
import c from "./style.module.scss";
import bg from "./assets/bg.png";
import mobilebg from "./assets/mobile-bg.jpg";
import { ScrollButton } from "@/components";
import { Line } from "./components/svg";
import Link from "next/link";
import { CTA } from "@/common/contacts";
import { Motion } from "@/components/Motion";
interface Props {}

const Hero = (props: Props) => {
  return (
    <section className="relative">
      <div className={c.bg}>
        <Image
          className={c.desktop}
          src={bg}
          priority
          alt="Денисевич Светлана"
        />
        <Image
          className={c.mobile}
          src={mobilebg}
          priority
          alt="Денисевич Светлана"
        />
      </div>

      <div className={c.content}>
        <h1 className={c.h1}>
          <Motion animate="from_bottom">
            <span>Денисевич</span>
          </Motion>
          <Motion animate="from_bottom">
            <span>Светлана</span>
          </Motion>
        </h1>

        <Motion animate="from_left">
          <p className={c.subtitle}>врач дерматолог</p>
        </Motion>
        <div className={c.listContainer}>
          <Motion animate="from_right">
            <ul className={c.list}>
              <li>Осмотр и дерматоскопия новообразований кожи</li>
              <li>Лазерная и радиоволновая хирургия, панч-биопсия</li>
              <li>Детская и взрослая дерматология</li>
            </ul>

            <div className={c.line}>
              <Line />
            </div>
          </Motion>
        </div>

        <Motion animate="from_bottom">
          <Link href={CTA} target="_blank" className={c.button}>
            Записаться онлайн
          </Link>
        </Motion>

        <ScrollButton href="#directions" className={c.scrollButton} />
      </div>
    </section>
  );
};

export { Hero };
