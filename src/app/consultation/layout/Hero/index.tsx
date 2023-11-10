import Image from "next/image";
import bg from "./assets/bg.jpg";
import c from "./style.module.scss";
import { ScrollButton } from "@/components";
import Link from "next/link";
import { CTA } from "@/common/contacts";
import { Motion } from "@/components/Motion";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section className="relative">
      <Image className={c.bg} src={bg} alt="bg" />

      <div className={c.content}>
        <Motion animate="from_bottom">
          <h1 className={c.title}>
            ОНЛАЙН-
            <br />
            КОНСУЛЬТАЦИЯ
          </h1>
        </Motion>

        <Motion animate="from_left" className={c.price} delay={0.5}>
          4000 р.
        </Motion>

        <Motion animate="from_bottom" delay={0.75}>
          <a href={CTA} className={c.button}>
            Записаться
          </a>
        </Motion>
        <ScrollButton href="#about" className={c.scrollButton} />
      </div>
    </section>
  );
};

export { Hero };
