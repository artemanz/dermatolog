import c from "./style.module.scss";
import class1 from "./assets/class-1.png";
import class2 from "./assets/class-2.jpg";
import class3 from "./assets/class-3.jpg";
import {
  c1,
  c10,
  c11,
  c12,
  c13,
  c14,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  d1,
  d2,
  d3,
  d4,
  d5,
  d6,
  d7,
} from "./assets";
import Image from "next/image";
import { Gallery } from "@/components";
import { Motion } from "@/components/Motion";

interface Props {}

const classes = [
  {
    title: `Мастер-класс
«Панч-биопсия»`,
    info: `Обучение включается в себя теоретическую и практическую части. Отработка практических навыков осуществляется на тренажерах.

Все расходные материалы включены в стоимость обучения.
По результатам мастер-класса предоставляется сертификат негосударственного образца.
    `,
    image: class1,
    _name: "punch",
    gallery: [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14],
    formats: [
      {
        name: "Индивидуальный",
        info: null,
        length: "1 день",
        price: "35.000 р.",
      },
      {
        name: "Групповой",
        info: "максимальное количество обучающихся - 2",
        length: "1 день",
        price: "20.000 р.",
      },
    ],
  },
  {
    title: `Мастер-класс
«Деструктивные методы удаления» (лазерный, электрокоагулятор)`,
    info: `Обучение проводится на СО2-лазере «Acupulse» и электрокоагуляторе «Фотек». Обработка навыков осуществляется на пациентах.Все расходные материалы включены в стоимость обучения.
    `,
    image: class2,
    _name: "destructive",
    gallery: [d1, d2, d3, d4, d5, d6, d7],
    formats: [
      {
        name: "Индивидуальный",
        info: null,
        length: "1 день",
        price: "30.000 р.",
      },
      {
        name: "Групповой",
        info: "маĸсимальное ĸоличество обучающихся- 2",
        length: "1 день",
        price: "20.000 р.",
      },
    ],
  },
  {
    title: `Комбо обучение:
панч и шейв-биопсии, деструктивные методы удаления (лазерный, электрокоагулятор)`,
    info: `Обучение проводится на СО2-лазере «Acupulse» и электрокоагуляторе «Фотек». Обработка навыков осуществляется на пациентах.Все расходные материалы включены в стоимость обучения.
    `,
    image: class3,
    _name: "",
    gallery: [],
    formats: [
      {
        name: "Индивидуальный",
        info: `Все расходные материалы включены в стоимость обучения.
Отработка панч-биопсии осуществляется на тренажерах. Шейв-биопсия и деструктивные методы удаления на пациентах.`,
        length: "1-2 дня (обговаривается индивидуально)",
        price: "48.000 р.",
      },
    ],
  },
];

const Classes = (props: Props) => {
  return (
    <section id="classes">
      <div className={c.content}>
        <ul className={c.classes}>
          {classes.map((cl) => (
            <li key={cl.title}>
              <div className={c.card}>
                <div className={c.cardWrapper}>
                  <Motion animate="from_left" className={c.cardTitle}>
                    {cl.title}
                  </Motion>
                  <Motion animate="from_left" className={c.cardInfo}>
                    {cl.info}
                  </Motion>
                </div>
                <Motion className={c.cardImage} animate="from_right">
                  <Image src={cl.image} alt={cl.title} />
                </Motion>
              </div>
              <div className={c.format}>
                <Motion animate="from_bottom" className={c.formatTitle}>
                  Формат обучения:
                </Motion>
                <ul className={c.formatList}>
                  {cl.formats.map((f, idx) => (
                    <Motion element="li"
                      animate={idx % 2 !== 0 ? "from_right" : "from_left"}
                      className={c.formatCard}
                      key={f.name}
                    >
                      <p className={c.formatName}>{f.name}</p>
                      <p className={c.formatInfo}>{f.info}</p>
                      <p className={c.formatLength}>
                        Продолжительность - {f.length}
                      </p>
                      <p className={c.formatPrice}>
                        Стоимость обучения - <span>{f.price}</span>
                      </p>
                    </Motion>
                  ))}
                </ul>
                {cl.gallery.length ? (
                  <div className={c.gallery}>
                    <Gallery name={cl._name} items={cl.gallery} />
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Classes };
