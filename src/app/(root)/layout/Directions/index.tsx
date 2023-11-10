import Image from "next/image";
import { content } from "./content";
import c from "./style.module.scss";
import line from "./assets/line.svg";
import { Motion } from "@/components/Motion";

interface Props {}

const Directions = (props: Props) => {
  return (
    <section id="directions" className="relative">
      <div className={c.content}>
        <h2 className={c.title}>
          <Motion animate="from_left">
            Основные <br /> направления
          </Motion>
        </h2>
        <ul className={c.list}>
          {content.map((card, idx) => (
            <li className={c.card} key={card.title}>
              <div className={c.cardContent}>
                <div className={c.cardTitle}>
                  <Motion animate={idx % 2 === 0 ? "from_left" : "from_right"}>
                    {card.title}
                  </Motion>
                </div>
                <div className={c.cardInfo}>
                  <div className={c.cardGradient} />
                  <Image
                    className={c.cardImage}
                    src={card.image}
                    alt={card.title}
                  />
                  <div className={c.cardText}>
                    <Motion
                      animate={idx % 2 === 0 ? "from_right" : "from_left"}
                    >
                      {card.text}
                    </Motion>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <Image className={c.line} src={line} alt="" />
      </div>
    </section>
  );
};

export { Directions };
