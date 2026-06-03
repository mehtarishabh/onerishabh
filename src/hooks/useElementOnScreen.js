import { useEffect, useRef, useState } from "react";

const useElementOnScreen = (options) => {
  const containerRef = useRef([]);
  const [isVisibleIndex, setIsVisibleIndex] = useState(false);

  const callbackFunction = (entries) => {
    entries.forEach(function (entry) {
      if(entry.isIntersecting) {
        setIsVisibleIndex(entry.target.classList.value);
      }
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const elements = containerRef.current;

    if (elements.length > 0) {
      elements.forEach((current) => {
        if (current) observer.observe(current);
      });
    }

    return () => {
      elements.forEach((current) => {
        if (current) observer.unobserve(current);
      });
    };
  }, [options]);

  return [containerRef, isVisibleIndex];
}

export default useElementOnScreen;
