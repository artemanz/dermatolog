import { Form } from "..";
import c from "./style.module.scss";

interface Props {}

const Feedback = (props: Props) => {
  return (
    <section id="feedback" className="relative">
      <div className={c.content}>
        <h2 className={c.title}>Хотите записаться <br /> на прием?</h2>

        <Form bg />
      </div>
    </section>
  );
};

export { Feedback };
