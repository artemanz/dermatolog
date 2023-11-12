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
            <h1 className={c.title}>Врачам</h1>
          </Motion>

          <Motion
            element="p"
            animate="from_left"
            className={c.info}
            delay={0.5}
          >
            Все программы обучения подходят для праĸтиĸующих врачей
            дерматоонĸологов, дерматологов и ĸосметологов, ординаторов и
            студентов.
          </Motion>

          <Motion animate="from_bottom" delay={0.75}>
            <a className={c.button} href={CTA}>
              Записаться на обучение
            </a>
          </Motion>
        </div>

        <ScrollButton className={c.scrollButton} href="#classes" />
      </div>
    </section>
  );
};

export { Hero };
