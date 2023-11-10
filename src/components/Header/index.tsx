"use client";

import Image from "next/image";
import "./style.module.scss";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import c from "./style.module.scss";
import { NAVIGATION } from "@/common/navigation";
import { Burger } from "./svg";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Props {}

const Header = (props: Props) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="absolute inset-x-0 z-10">
      <div className={c.container}>
        <a href={NAVIGATION.ROOT.path}>
          <Image src={logo} width={50} alt="Logo" />
        </a>

        <nav className={c.desktopNav}>
          <ul>
            {Object.entries(NAVIGATION).map(([key, path]) => (
              <li key={key}>
                {path.text && <a href={path.path}>{path.text}</a>}
              </li>
            ))}
          </ul>
        </nav>

        <button onClick={() => setMobileMenu(!mobileMenu)} className={c.burger}>
          {!mobileMenu ? <Burger /> : <AiOutlineClose size={32} />}
        </button>

        {mobileMenu && <MobileMenu close={() => setMobileMenu(false)} />}
      </div>
    </header>
  );
};

export { Header };
