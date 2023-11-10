import Image from "next/image";
import c from "./style.module.scss";
import bg from "./assets/bg.png";
import mobilebg from "./assets/mobile-bg.jpg";
import { ScrollButton } from "@/components";
import { Motion } from "@/components/Motion";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section className="relative">
      <Image priority className={c.image} src={bg} alt="Врач с ребенком" />
      <Image
        priority
        className={c.mobileImage}
        src={mobilebg}
        alt="Врач с ребенком"
      />

      <div className={c.content}>
        <Motion animate="from_bottom">
          <h1 className={c.title}>ДЕТСКОЕ НАПРАВЛЕНИЕ</h1>
        </Motion>

        <div className={c.text}>
          <Motion element="p" animate="from_bottom" delay={0.5}>
            К детям нужен <span>особенный</span>, очень{" "}
            <span>индивидуальный</span> подход
          </Motion>
          <p>&nbsp;</p>
          <Motion element="p" animate="from_bottom" delay={0.75}>
            Мы работаем на результат, а отличный результат возможен только,
            когда всем комфортно, и, кажется, я нашла нужный{" "}
            <span>«элексир комфорта»</span>
          </Motion>
        </div>

        <ScrollButton className="mx-auto" href="#services" />
      </div>
    </section>
  );
};

export { Hero };
