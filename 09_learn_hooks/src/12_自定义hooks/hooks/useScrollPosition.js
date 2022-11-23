import { useState, useEffect } from "react";

function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    function handleScroll() {
      //   console.log(window.scrollX, window.scrollY);
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    //  这里不依赖数据 handleScroll就不会被重复创建吗 对的
  }, []);
  return [scrollX, scrollY];
}

export default useScrollPosition;
