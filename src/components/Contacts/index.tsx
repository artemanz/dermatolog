"use client";

import { CONTACTS, SOCIALS } from "@/common/contacts";
import c from "./style.module.scss";
import Script from "next/script";
import { useEffect } from "react";

interface Props {}

const Contacts = (props: Props) => {
  return (
    <section>
      <div className={c.content}>
        <div className={c.info}>
          <h2 className={c.title}>Контакты</h2>

          <ul className={c.contacts}>
            {Object.entries(CONTACTS).map(([key, contact]) =>
              contact.icon ? (
                <li key={key}>
                  {contact.href ? (
                    <a className={c.contact} href={contact.href}>
                      <span className="text-accent">
                        <contact.icon />
                      </span>
                      <span>{contact.value}</span>
                    </a>
                  ) : (
                    <div className={c.contact}>
                      <span className="text-accent">
                        <contact.icon />
                      </span>
                      <span>{contact.value}</span>
                    </div>
                  )}
                </li>
              ) : null
            )}
          </ul>
          <ul className={c.socials}>
            {Object.entries(SOCIALS).map(([key, social]) => (
              <li key={key}>
                <a className={c.social} href={social.href} target="_blank">
                  <social.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className={c.gradient} />
          <div className={c.map}>
            <div id="map" style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </div>

      <Script
        onLoad={() => {
          window.ymaps.ready(function () {
            var myMap = new window.ymaps.Map("map", {
              center: [55.713527, 37.616638],
              zoom: 15,
            });
            var myPlacemark = new window.ymaps.Placemark([
              55.713527, 37.616638,
            ]);
            myMap.geoObjects.add(myPlacemark);
          });
        }}
        src="https://api-maps.yandex.ru/2.1/?apikey=1e7ba8b7-3dce-407b-9973-b10a214f4e42&lang=ru-RU"
      />
    </section>
  );
};

export { Contacts };
