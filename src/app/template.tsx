"use client";

import { PopupContext } from "@/common/context/Popups";
import { Contacts, Feedback, Form, Popup } from "@/components";
import { ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

const Root = ({ children }: Props) => {
  const [popup, setPopup] = useState(false);

  const show = () => {
    setPopup(true);
  };
  const hide = () => {
    setPopup(false);
  };

  return (
    <PopupContext.Provider
      value={{
        isVisible: popup,
        show,
        hide,
      }}
    >
      {children}
      <Feedback />
      <Contacts />

      {popup && (
        <Popup close={hide}>
          <Form />
        </Popup>
      )}
    </PopupContext.Provider>
  );
};

export default Root;
