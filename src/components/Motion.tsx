"use client";

import type {
  MotionProps,
  TargetAndTransition,
  VariantLabels,
} from "framer-motion";
import type { HTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props extends HTMLAttributes<HTMLDivElement> {
  animate: "from_bottom" | "from_left" | "from_right" | "from_top";
  delay?: number;
  element?: "div" | "p" | "li";
}

const Motion = ({
  children,
  animate,
  delay,
  className,
  element,
}: PropsWithChildren<Props>) => {
  let initial: MotionProps["initial"] = { opacity: 0 };
  let to: MotionProps["whileInView"] = { opacity: 1 };
  switch (animate) {
    case "from_bottom":
      initial.translateY = 100;
      to.translateY = 0;
      break;
    case "from_top":
      initial.translateY = -100;
      to.translateY = 0;
      break;
    case "from_left":
      initial.translateX = -100;
      to.translateX = 0;
      break;
    case "from_right":
      initial.translateX = 100;
      to.translateX = 0;
      break;
  }

  switch (element) {
    case "li":
      return (
        <motion.li
          className={className}
          initial={initial}
          whileInView={to}
          transition={{ delay, bounce: false, duration: 1 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.li>
      );
    case "p":
      return (
        <motion.p
          className={className}
          initial={initial}
          whileInView={to}
          transition={{ delay, bounce: false, duration: 1 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.p>
      );
    default:
      return (
        <motion.div
          className={className}
          initial={initial}
          whileInView={to}
          transition={{ delay, bounce: false, duration: 1 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      );
  }
};

export { Motion };
