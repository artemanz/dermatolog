"use client"

import { ReactNode, createContext, useState } from "react";

export const PopupContext = createContext({
  isVisible: true,
  show() {},
  hide() {},
});
