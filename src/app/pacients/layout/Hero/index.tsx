import Link from "next/link";
import c from "./style.module.scss";
import { CTA } from "@/common/contacts";
import bg from "./assets/bg.jpg";
import Image from "next/image";
import { ScrollButton } from "@/components";
import { Motion } from "@/components/Motion";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section className="relative">
      <Image className={c.bg} src={bg} alt="Врач" />

      <div className={c.container}>
        <div className={c.content}>
          <Motion animate="from_bottom">
            <h1 className={c.title}>Пациентам</h1>
          </Motion>

          <Motion animate="from_bottom" className={c.buttonsGroup} delay={0.5}>
            <Link className={c.button} href={CTA}>
              Очная консультация
            </Link>
            <Link className={c.buttonSecondary} href={CTA}>
              Онлайн консультация
            </Link>
          </Motion>
        </div>

        <ScrollButton className={c.scrollButton} href="#info" />
      </div>
    </section>
  );
};

export { Hero };
