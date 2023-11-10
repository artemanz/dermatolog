"use client";

import { ReactNode } from "react";
import c from "./style.module.scss";
import { useStopScrolling } from "@/common/hooks/useStopScrolling";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  children: ReactNode;
  close(): void;
}

const Popup = ({ children, close }: Props) => {
  useStopScrolling();

  return (
    <div className={c.popup}>
      <div onClick={close} className={c.backdrop} />

      <div className={c.content}>
        {children}
        <button className={c.closeButton} onClick={close}>
          <AiOutlineClose size={32} />
        </button>
      </div>
    </div>
  );
};

export { Popup };
