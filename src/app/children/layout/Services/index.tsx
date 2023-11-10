import { Gallery } from "@/components";
import c from "./style.module.scss";
import { s11, s12, s13, s21, s22, s23, s31, s32, s33 } from "./assets";
import Link from "next/link";
import { CTA } from "@/common/contacts";

interface Props {}

const services1 = [s11, s12, s13, s11, s12, s13];
const services2 = [s21, s22, s23, s21, s22, s23];
const services3 = [s31, s32, s33, s31, s32, s33];

const services = [
  {
    title: "Удаление новообразований у детей",
    slider: { name: "child1", items: services1 },
  },
  {
    title: "Лечение заболеваний кожи у детей",
    slider: { name: "child2", items: services2 },
  },
  {
    title: "Невус Спитц у детей",
    slider: { name: "child3", items: services3 },
  },
];

const Services = (props: Props) => {
  return (
    <section id="services" className="relative">
      <ul className={c.content}>
        {services.map((s) => (
          <li key={s.title}>
            <h2 className={c.title}>{s.title}</h2>
            <div className={c.slider}>
              <Gallery items={s.slider.items} name={s.slider.name} />
            </div>
            <div className={c.info}>
              <p>
                Мы работаем на результат, а отличный результат возможен только,
                когда всем комфортно, и, кажется, я нашла нужный{" "}
                <span>«элексир комфорта»</span>
              </p>
              <Link className={c.button} href={CTA}>
                Записаться онлайн
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export { Services };
