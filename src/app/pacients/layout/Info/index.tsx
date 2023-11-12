import { Gallery } from "@/components";
import c from "./style.module.scss";

import {
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  m7,
  m8,
  m9,
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
} from "./assets";

const melanoms = [m1, m2, m3, m4, m5, m6, m7, m8, m9];
const cancers = [c1, c2, c3, c4, c5, c6, c7];
const melanomDesctiptions = [
  "Меланома кожи ягодицы",
  "Меланома кожи бедра",
  "Меланома кожи лица",
  null,
  "Меланома кожи",
  "Меланома кожи",
  "Меланома кожи",
  "Меланома кожи",
  "Меланома кожи",
];
const cancerDesctiptions = [
  "Базальноклеточный рак кожи виска",
  "Базальноклеточный рак передней брюшной стенки",
  "Базальноклеточный рак кожи спины",
  "Базальноклеточный рак носа",
  "Базальноклеточный рак",
  "Базальноклеточный рак",
  "Базальноклеточный рак",
];

interface Props {}
const Info = (props: Props) => {
  return (
    <section id="info" className="relative">
      <div className={c.content}>
        <div className={c.melanom}>
          <h2 className={c.title}>Меланома кожи</h2>
          <div className={c.slider}>
            <Gallery
              desctiptions={melanomDesctiptions}
              items={melanoms}
              name="melanoma"
            />
          </div>
        </div>
        <div className={c.cancer}>
          <h2 className={c.title}>Базальноклеточный рак кожи</h2>
          <div className={c.slider}>
            <Gallery
              desctiptions={cancerDesctiptions}
              items={cancers}
              name="cancer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Info };
