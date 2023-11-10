import c from "./style.module.scss";
import { Slider } from "./components/Slider";
interface Props {}

const Portfolio = (props: Props) => {
  return (
    <section className="relative">
      <svg className={c.bg}
        width="1920"
        height="1350"
        viewBox="0 0 1920 1350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 70.3778L967.998 1.61123C1020.42 -2.1124 1073.1 1.24306 1124.62 11.5888L1444.08 75.7353C1497.86 86.5351 1552.8 90.4823 1607.58 87.4833L1920 70.3778L1920 1317.62L1580.13 1299.01C1543.5 1297.01 1506.76 1298.11 1470.31 1302.3L1089.6 1346.1C1061.23 1349.36 1032.65 1350.54 1004.11 1349.63L0 1317.62V70.3778Z"
          fill="white"
        />
      </svg>

      <div className={c.content}>
        <h2 className={c.title}>
          Результаты <br /> работ
        </h2>

        <Slider />
      </div>
    </section>
  );
};

export { Portfolio };
