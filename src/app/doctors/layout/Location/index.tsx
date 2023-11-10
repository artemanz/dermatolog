import Image from "next/image";
import c from "./style.module.scss";
import pic from "./assets/pic.svg";

interface Props {}

const Location = (props: Props) => {
  return (
    <section className="relative">
      <Image className={c.picture} src={pic} alt="Decor" />
      <div className={c.content}>
        <h2 className={c.title}>Место проведения мастер-классов</h2>
        <p>Клиниĸа «Меланома Unit»г. Мосĸва. ул. Татищева 15, ĸ.1</p>
        <p>
          Обучение проводится при условии предварительного бронирования даты и
          времени, а таĸже внесении 100% предоплаты.
        </p>
      </div>
    </section>
  );
};

export { Location };
