import React, { useEffect, useState } from "react";

//윈도우의 width값 추적 (헤더의 scrollY)
function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
}

export default useWindowDimensions;
