import { useEffect, useState } from "react";

export const useIsMobileLandscape = () => {
  const [isMobileLandscape, setIsMobileLandscape] = useState(
    window.innerWidth > window.innerHeight && window.innerHeight < 500
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileLandscape(window.innerWidth > window.innerHeight && window.innerHeight < 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobileLandscape;
};