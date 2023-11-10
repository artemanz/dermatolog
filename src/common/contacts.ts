import {
  Adress,
  Dzen,
  Instagram,
  Mail,
  Phone,
  Telegram,
  Vk,
} from "@/components/svg";
import { FC } from "react";

export const CTA =
  "https://wa.me/79850020828?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D0%A1%D0%B2%D0%B5%D1%82%D0%BB%D0%B0%D0%BD%D0%B0%20%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%B2%D0%BD%D0%B0!";

export const CONTACTS: {
  [key: string]: { href?: string; value?: string; icon?: FC };
} = {
  phone: { href: "tel:+79850020828", value: "+7-985-002-08-28", icon: Phone },
  mail: {
    href: "mailto:ss.dermatolog@yandex.ru",
    value: "ss.dermatolog@yandex.ru",
    icon: Mail,
  },
  adress: {
    value: "ул. Татищева, д. 15, к. 1",
    icon: Adress,
  },
};

export const SOCIALS = {
  vk: {
    href: "#",
    icon: Vk,
  },
  telegram: {
    href: "#",
    icon: Telegram,
  },
  instagram: {
    href: "#",
    icon: Instagram,
  },
  dzen: {
    href: "#",
    icon: Dzen,
  },
};
