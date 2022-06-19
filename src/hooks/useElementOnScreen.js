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

    containerRef.current.length > 0 && containerRef.current.forEach((current) => {
      if(current) observer.observe(current);
    })

    return () => {
      containerRef.current.length > 0 && containerRef.current.forEach((current) => {
        if(current) observer.unobserve(current);
      })
    }
  },[containerRef.current, options])

  return [containerRef, isVisibleIndex];
}

export default useElementOnScreen;
