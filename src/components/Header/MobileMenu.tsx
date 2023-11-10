import { NAVIGATION } from "@/common/navigation";
import c from "./style.module.scss";
import Link from "next/link";
import { useStopScrolling } from "@/common/hooks/useStopScrolling";
import { motion } from "framer-motion";

interface Props {
  close(): void;
}

const MobileMenu = ({ close }: Props) => {
  useStopScrolling();
  return (
    <motion.ul
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1, originY: "top" }}
      className={c.mobileMenu}
    >
      {Object.entries(NAVIGATION)
        .filter(([key]) => !(key === "REVIEWS_FULL"))
        .map(([key, path]) => (
          <li key={key}>
            <a href={path.path} onClick={close}>
              {path.text}
            </a>
          </li>
        ))}

      <div className="fixed inset-0 -z-10" onClick={close}></div>
    </motion.ul>
  );
};

export { MobileMenu };
