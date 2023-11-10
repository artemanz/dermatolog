"use client";

import Image from "next/image";
import c from "./style.module.scss";
import bg from "./assets/bg.svg";
import { useForm } from "react-hook-form";
import {
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import IMask from "imask";

interface Props {
  bg?: boolean;
}

interface IForm {
  name: string;
  tel: string;
  service: string;
}

const Form = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const submit = (formData: IForm) => {
    console.log(formData);
  };

  const phoneRef = useRef<HTMLInputElement>(null);
  const { ref, ...rest } = register("tel", {
    required: true,
    pattern: /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/,
  });

  useEffect(() => {
    if (phoneRef.current) {
      IMask(phoneRef.current, {
        mask: "+{7} (000) 000-00-00",
      });
    }
  }, []);

  useImperativeHandle(ref, () => phoneRef.current);
  return (
    <form className={c.form} onSubmit={handleSubmit(submit)}>
      {props.bg && <Image className={c.bg} src={bg} alt="" />}
      <div className={c.content}>
        <p className={c.title}>Заполните форму</p>

        <div className={c.inputGroup}>
          <input
            {...register("name", { required: true })}
            data-state={errors.name ? "invalid" : ""}
            className={c.input}
            type="text"
            placeholder="Имя"
          />
          <input
            ref={phoneRef}
            {...rest}
            data-state={errors.tel ? "invalid" : ""}
            className={c.input}
            type="tel"
            placeholder="Телефон"
          />
          <input
            {...register("service", { required: true })}
            data-state={errors.service ? "invalid" : ""}
            className={c.input}
            type="text"
            placeholder="На какую услугу Вы бы хотели записаться?"
          />
          <button className={c.button}>Записаться онлайн</button>
        </div>
      </div>
    </form>
  );
};

export { Form };
