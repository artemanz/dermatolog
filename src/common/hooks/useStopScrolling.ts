import { useEffect } from "react";

export const useStopScrolling = () => {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, []);
};
