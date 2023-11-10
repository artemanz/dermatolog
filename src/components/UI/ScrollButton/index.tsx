import clsx from "clsx";
import { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const ScrollButton = (props: Props) => {
  return (
    <a
      {...props}
      className={clsx(
        "cursor-pointer animate-bounce block",
        props.className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="66"
        height="67"
        viewBox="0 0 66 67"
        fill="none"
      >
        <path
          d="M31.9393 41.0607C32.5251 41.6464 33.4749 41.6464 34.0607 41.0607L43.6066 31.5147C44.1924 30.9289 44.1924 29.9792 43.6066 29.3934C43.0208 28.8076 42.0711 28.8076 41.4853 29.3934L33 37.8787L24.5147 29.3934C23.9289 28.8076 22.9792 28.8076 22.3934 29.3934C21.8076 29.9792 21.8076 30.9289 22.3934 31.5147L31.9393 41.0607ZM31.5 39V40H34.5V39H31.5Z"
          fill="currentColor"
        />
        <path
          d="M65.5 33.5C65.5 51.7325 50.9422 66.5 33 66.5C15.0578 66.5 0.5 51.7325 0.5 33.5C0.5 15.2675 15.0578 0.5 33 0.5C50.9422 0.5 65.5 15.2675 65.5 33.5Z"
          stroke="currentColor"
        />
      </svg>
    </a>
  );
};

export { ScrollButton };
